import React from 'react';

import {translate} from '@docusaurus/Translate';
import useWindowDimensions from '@site/src/hooks/useWindowDimensions';
import {motion} from 'framer-motion';

import castleOnCloud from 'img/castleOnCloud.png';
import TriangularGridLeftPart from 'img/triangularGridLeftPart.svg';

export function ExploreSection({
  onPressRequestAccess = () =>
    window.open('https://megatix.in.th/white-label/nft-kingdom', '_blank'),
}: {
  onPressRequestAccess?: () => void;
}) {
  const {width} = useWindowDimensions();
  return (
    <section className="bg-white pt-[3em] overflow-hidden">
      <div className="content-container text-content">
        <h3
          style={{fontFamily: 'Montserrat Alternates'}}
          className="font-bold text-[1.7em] text-[#FF71A7] mb-[0.6em] mt-[1em] opacity-90">
          {translate({id: 'what is our project about'})}
        </h3>
        <p
          style={{fontFamily: 'ProximaNovaRegular'}}
          className="text-[#53676C] font-[1em] pb-[2.5em]">
          {translate({id: 'faraway kingdom is'})}
        </p>

        <h3 className="text-[#FF82B2]">
          {translate({id: 'the Faraway Kingdom DAO'})}
        </h3>
        <p className="text-[#53676C] pt-[0.4em] pb-[1em]">
          {translate({id: 'the Faraway Kingdom DAO description'})}
        </p>
        <h3 className="text-[#FF82B2] mt-[1em]">
          {translate({id: 'how to make money in faraway'})}
        </h3>
        <div className="flex flex-row flex-wrap gap-y-[1.25em] text-white">
          <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mr-[0.5em]">
            <CircleOrderNumber bgColor="#FF82B2" textColor="white">
              1
            </CircleOrderNumber>
            <p className="text-[#FF82B2]">
              {translate({id: 'make money step 1'})}
            </p>
          </div>
          <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mx-[0.5em]">
            <CircleOrderNumber bgColor="#FF82B2" textColor="white">
              2
            </CircleOrderNumber>
            <p className="text-[#FF82B2]">
              {translate({id: 'make money step 2'})}
            </p>
          </div>
          <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mx-[0.5em]">
            <CircleOrderNumber bgColor="#FF82B2" textColor="white">
              3
            </CircleOrderNumber>
            <p className="text-[#FF82B2]">
              {translate({id: 'make money step 3'})}
            </p>
          </div>
          <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 ml-[0.5em]">
            <CircleOrderNumber bgColor="#FF82B2" textColor="white">
              4
            </CircleOrderNumber>
            <p className="text-[#FF82B2]">
              {translate({id: 'make money step 4'})}
            </p>
          </div>
        </div>
        <a
          href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/4779901461043521251650643766164585910345101587726362605061919731785628910567"
          target="_blank">
          <button className="button-solid self-end mt-[1em] mb-[3em]">
            {translate({id: 'buy nft'})}
          </button>
        </a>

        {/* {width > 450 ? (
          <div className="flex flex-row">
            <h3 className="flex flex-1 mb-[0.2em] text-[#FF71A7] opacity-90">
              {translate({id: 'earn money on our platform by investing'})}
            </h3>
            <button className="button-solid self-center">
              {translate({id: 'buy nft'})}
            </button>
          </div>
        ) : (
          <>
            <h3 className="mb-[0.2em] text-[#FF71A7] opacity-90">
              {translate({id: 'earn money on our platform by investing'})}
            </h3>
            <button className="button-solid mt-[0.4em]">
              {translate({id: 'buy nft'})}
            </button>
          </>
        )} */}
      </div>
      <div className="relative">
        <motion.img
          initial={{y: '50%', x: '50%'}}
          whileInView={{y: 0, x: '40%'}}
          viewport={{once: true}}
          transition={{ease: 'easeOut', duration: 1.2, bounce: false}}
          className="w-[30%] max-w-[500px] hidden castle:block absolute z-10 right-0 top-[-20%]"
          src={castleOnCloud}
        />

        {/* <div className="bg-gradient-3 relative overflow-hidden">
          <TriangularGridLeftPart height="100%" className="absolute" />
          <div className="content-container py-[1.5em] pb-[2em] text-content">
            <h2 className="text-white b-[0.5em] pt-[0.8em]">
              {translate({id: 'promoters'})}
            </h2>
            <h3 className="text-white mt-[1em]">
              {translate({id: 'connect with us'})}
            </h3>
            <p className="text-white pt-[0.4em] pb-[2em]">
              {translate({id: 'connect with us description'})}
            </p>

            <h3 className="text-white pb-[1em]">
              {translate({id: 'how make money with us'})}
            </h3>
            <div className="flex flex-row flex-wrap gap-y-[1.25em] text-white">
              <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mr-[0.5em]">
                <CircleOrderNumber textColor="#DAB7FB">1</CircleOrderNumber>
                <p>{translate({id: 'how make money with us description 1'})}</p>
              </div>
              <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mx-[0.5em]">
                <CircleOrderNumber textColor="#EEA3FE">2</CircleOrderNumber>
                <p>{translate({id: 'how make money with us description 2'})}</p>
              </div>
              <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mx-[0.5em]">
                <CircleOrderNumber textColor="#FB97FF">3</CircleOrderNumber>
                <p>{translate({id: 'how make money with us description 3'})}</p>
              </div>
              <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 ml-[0.5em]">
                <CircleOrderNumber textColor="#FD8BE8">4</CircleOrderNumber>
                <p>{translate({id: 'how make money with us description 4'})}</p>
              </div>
            </div>
            <button
              onClick={onPressRequestAccess}
              className="button-outline self-end mt-[1em]">
              {translate({id: 'request access'})}
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}

interface CircleOrderNumberProps {
  children: string | JSX.Element;
  textColor: string;
  bgColor?: string;
}

function CircleOrderNumber({
  children,
  textColor,
  bgColor = 'white',
}: CircleOrderNumberProps) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="rounded-full relative inline-block h-[2.5em] w-[2.5em] mb-[1em]">
      <h2
        style={{color: textColor}}
        className={`w-full h-full flex items-center justify-center`}>
        {children}
      </h2>
    </div>
  );
}
