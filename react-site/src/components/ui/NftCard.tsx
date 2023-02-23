import React, { CSSProperties } from "react";

import {
  BlockchainNetData,
  BlockchainNetworks,
} from "@site/src/constants/BlockchainNetData";

interface NftCardProps {
  img: string;
  name: string;
  highestBid: number;
  owner: string;
  ownerAvatar: string;
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
  widthSuffix = "px",
  width = 400,
}: NftCardProps) {
  const w = `${width}${widthSuffix}`;
  const h = `${width / 0.72}${widthSuffix}`;

  const fontSize1 = `${width / 16.66}${widthSuffix}`;
  const fontSize2 = `${width / 20}${widthSuffix}`;
  const fontSize3 = `${width / 26.66}${widthSuffix}`;
  const imgSize = `${width / 9.5}${widthSuffix}`;
  const netLogoSize = `${width / 11}${widthSuffix}`;

  const bottomBlockH = `${width / 2.8}${widthSuffix}`;
  const NetworkLogo = BlockchainNetData[chain].logo;
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: fontSize1,
      }}
      className="flex items-end relative overflow-hidden border-4 border-white "
    >
      <img src={img} alt="nft" className="absolute w-full h-full" />
      <div
        style={{
          height: bottomBlockH,
          borderBottomLeftRadius: fontSize1,
          borderBottomRightRadius: fontSize1,
        }}
        className="flex flex-col backdrop-blur-sm bg-[rgb(0,0,0,0.2)] w-full"
      >
        <div className="flex flex-row justify-between px-[5%] pt-[5%]">
          <div
            style={{ fontFamily: "ProximaNovaBold", fontSize: fontSize1 }}
            className="text-white font-neucha"
          >
            {name}
          </div>
          <NetworkLogo
            style={{ width: netLogoSize, height: netLogoSize }}
            className="opacity-70"
          />
        </div>
        <div className="flex flex-row mt-[5%]">
          <div className="flex flex-[0.65] flex-col h-full pl-[5%]">
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
                    fontFamily: "ProximaNovaRegular",
                    fontSize: fontSize3,
                  }}
                  className="text-white"
                >
                  Creator
                </div>
                <div
                  style={{ fontFamily: "ProximaNovaBold", fontSize: fontSize2 }}
                  className="text-white font-neucha"
                >
                  {owner}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[0.35] flex-col items-end h-full pr-[5%]">
            <div className="flex flex-col items-end">
              <div
                style={{
                  fontFamily: "ProximaNovaRegular",
                  fontSize: fontSize3,
                }}
                className="font-neucha text-white"
              >
                Highest Bid
              </div>
              <div
                style={{ fontFamily: "ProximaNovaBlack", fontSize: fontSize2 }}
                className="text-white font-neucha"
              >
                {+highestBid.toFixed(3)}{" "}
                {BlockchainNetData[chain].shortCoinName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const maskedStyle: CSSProperties = {
  WebkitMaskImage: "url(img/avaMask.svg)",
  maskRepeat: "no-repeat",
};
