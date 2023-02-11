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
  width?: number;
  widthSuffix?: string;
}

export function NftCard({
  img,
  name,
  highestBid,
  owner,
  ownerAvatar,
  chain,
  widthSuffix = 'px',
  width = 400,
}: NftCardProps) {
  const w = `${width}${widthSuffix}`;
  const h = `${(width / 4) * 5}${widthSuffix}`;

  const fontSize1 = `${width / 16.66}${widthSuffix}`;
  const fontSize2 = `${width / 20}${widthSuffix}`;
  const fontSize3 = `${width / 26.66}${widthSuffix}`;
  const imgSize = `${width / 10}${widthSuffix}`;

  const bottomBlockH = `${width / 2.8}${widthSuffix}`;

  return (
    <div
      style={{width: w, height: h, borderRadius: fontSize1}}
      className="flex items-end relative overflow-hidden">
      <Image
        src={img}
        alt="nft"
        className="absolute w-full h-full"
        height={500}
        width={400}
      />
      <div
        style={{
          height: bottomBlockH,
          borderBottomLeftRadius: fontSize1,
          borderBottomRightRadius: fontSize1,
        }}
        className="flex backdrop-blur-sm bg-[rgb(0,0,0,0.6)] w-full">
        <div className="flex flex-[0.65] flex-col h-full pl-[5%] py-[5%]">
          <div style={{fontSize: fontSize1}} className="text-white font-neucha">
            {name}
          </div>
          <div className="flex flex-row mt-[10%]">
            <Image
              alt="ava"
              height={100}
              width={100}
              style={{
                ...maskedStyle,
                WebkitMaskSize: imgSize,
                width: imgSize,
                height: imgSize,
              }}
              src={ownerAvatar}
            />
            <div className="flex flex-col ml-4">
              <div
                style={{fontSize: fontSize3}}
                className="text-secondary-white font-neucha">
                Creator
              </div>
              <div
                style={{fontSize: fontSize2}}
                className="text-white font-neucha">
                {owner}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[0.35] flex-col items-end h-full pr-[5%] py-[5%]">
          <Image
            alt={chain}
            height={100}
            width={100}
            style={{width: imgSize, height: imgSize}}
            className={'w-[40px] h-[40px] opacity-70'}
            src={BlockchainNetData[chain].logo}
          />
          <div className="flex flex-col mt-[15%] items-end">
            <div
              style={{fontSize: fontSize3}}
              className="text-secondary-white font-neucha">
              Highest Bid
            </div>
            <div
              style={{fontSize: fontSize2}}
              className="text-white font-neucha">
              {+highestBid.toFixed(3)} {BlockchainNetData[chain].shortCoinName}
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
};
