import {CSSProperties} from 'react';

import Image, {StaticImageData} from 'next/image';

import {BlockchainNetData, BlockchainNetworks} from 'src/context';

interface NftCardProps {
  img: string | StaticImageData;
  name: string;
  highestBid: number;
  owner: string;
  ownerAvatar: string | StaticImageData;
  chain: BlockchainNetworks;
}

export function NftCard({
  img,
  name,
  highestBid,
  owner,
  ownerAvatar,
  chain,
}: NftCardProps) {
  return (
    <div className="w-[400px] h-[500px] flex flex-col-reverse relative overflow-hidden rounded-[24px]">
      <Image
        src={img}
        alt="nft"
        className="absolute w-full h-full"
        height={500}
        width={400}
      />
      <div className="flex backdrop-blur-sm rounded-b-[24px] bg-[rgb(0,0,0,0.6)] h-[140px] w-full">
        <div className="flex flex-[0.65] flex-col h-full pl-[5%] py-[5%]">
          <div className="text-[24px] text-white font-neucha">{name}</div>
          <div className="flex flex-row  mt-[20px]">
            <Image
              alt={'ava'}
              height={100}
              width={100}
              style={maskedStyle}
              className={'w-[40px] h-[40px]'}
              src={ownerAvatar}
            />
            <div className="flex flex-col ml-4">
              <div className="text-[15px] text-secondary-white font-neucha">
                Creator
              </div>
              <div className="text-[20px] text-white font-neucha">{owner}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-[0.35] flex-col items-end h-full pr-[5%] py-[5%]">
          <Image
            alt={chain}
            height={100}
            width={100}
            className={'w-[40px] h-[40px] opacity-70'}
            src={BlockchainNetData[chain].logo}
          />
          <div className="flex flex-col  mt-[20px] items-end">
            <div className="text-[15px] text-secondary-white font-neucha">
              Highest Bid
            </div>
            <div className="text-[20px] text-white font-neucha">
              {highestBid.toFixed(3)} {BlockchainNetData[chain].shortCoinName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const maskedStyle: CSSProperties = {
  WebkitMaskImage: 'url(avaMask.svg)',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: '40px',
};
