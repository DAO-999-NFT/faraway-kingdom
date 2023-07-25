import React, {CSSProperties} from 'react';

import {
  BlockchainNetData,
  BlockchainNetworks,
} from 'src/constants/blockchainNetData';

import Ringnft from 'img/ringnft.gif';
import SoldOutIcon from 'img/SoldOut.png';

interface NftCardProps {
  img: string;
  name: string;
  cost?: number;
  owner: string;
  ownerAvatar: string;
  chain: BlockchainNetworks;
  costCoin: string;
  width?: number;
  widthSuffix?: string;
  isSoldOut?: boolean;
}

export function NftCard({
  img,
  name,
  cost = 100,
  costCoin,
  owner,
  ownerAvatar,
  chain,
  widthSuffix = 'px',
  width = 400,
  isSoldOut,
}: NftCardProps) {
  const w = `${width}${widthSuffix}`;
  const h = `${width / 0.8}${widthSuffix}`;

  const fontSize1 = `${width / 15}${widthSuffix}`;
  const fontSize2 = `${width / 20}${widthSuffix}`;
  const fontSize3 = `${width / 24}${widthSuffix}`;
  const imgSize = `${width / 8}${widthSuffix}`;
  const netLogoSize = `${width / 10}${widthSuffix}`;

  const bottomBlockH = `${width / 2.6}${widthSuffix}`;
  const NetworkLogo = BlockchainNetData[chain].logo;
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: fontSize1,
      }}
      className="flex items-end relative overflow-hidden border-4 border-solid border-white">
      <img
        src={Ringnft}
        style={{
          width: h,
          height: h,
        }}
        alt="nft"
        className="absolute object-cover"
      />
      {isSoldOut && (
        <div className="flex flex-1 items-end justify-end">
          <img
            src={SoldOutIcon}
            style={{
              width: '2.8em',
              height: '2.17em',
            }}
            alt="nft"
            className="absolute top-[0.5em] right-[0.5em]"
          />
        </div>
      )}
      <div
        style={{
          height: bottomBlockH,
          borderBottomLeftRadius: fontSize1,
          borderBottomRightRadius: fontSize1,
        }}
        className="flex flex-col z-[5] backdrop-blur-sm bg-[rgb(0,0,0,0.2)] w-full">
        <div className="flex flex-row justify-between px-[5%] pt-[5%]">
          <div
            style={{fontFamily: 'ProximaNovaBold', fontSize: fontSize1}}
            className="text-white font-neucha">
            {name}
          </div>
          <NetworkLogo
            style={{width: netLogoSize, height: netLogoSize}}
            className="opacity-70"
          />
        </div>
        <div className="flex flex-row mt-[5%]">
          <div className="flex flex-[0.95] flex-col h-full pl-[5%]">
            <div className="flex flex-row">
              <img
                alt="ava"
                style={{
                  ...maskedStyle,
                  WebkitMaskSize: imgSize,
                  width: imgSize,
                  height: imgSize,
                }}
                className="object-center"
                src={ownerAvatar}
              />
              <div className="flex flex-col ml-[8%]">
                <div
                  style={{
                    fontFamily: 'ProximaNovaRegular',
                    fontSize: fontSize3,
                  }}
                  className="text-white">
                  Collection
                </div>
                <div
                  style={{
                    width: '100%',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    fontFamily: 'ProximaNovaBold',
                    fontSize: fontSize2,
                    transform: 'translate(0, -3px)',
                  }}
                  className="text-white">
                  {owner}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[0.35] flex-col items-end h-full pr-[5%]">
            {cost && (
              <div className="flex flex-col items-end">
                <div
                  style={{
                    fontFamily: 'ProximaNovaRegular',
                    fontSize: fontSize3,
                  }}
                  className="font-neucha text-white">
                  NFT Cost
                </div>
                <div
                  style={{
                    fontFamily: 'ProximaNovaBlack',
                    transform: 'translate(0, -3px)',
                    fontSize: fontSize2,
                  }}
                  className="text-white font-neucha">
                  {+cost.toFixed(3)} {costCoin}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const maskedStyle: CSSProperties = {
  WebkitMaskImage: 'url(img/avaMask.svg)',
  maskRepeat: 'no-repeat',
};
