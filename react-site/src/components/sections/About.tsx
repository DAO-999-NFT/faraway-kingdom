import React from 'react';

import {translate} from '@docusaurus/Translate';
import useWindowDimensions from '@site/src/hooks/useWindowDimensions';

import TriangularGrid from 'img/triangularGrid.svg';

export function AboutSection() {
  const {width} = useWindowDimensions();

  return (
    <>
      <section className="bg-white">
        <div className="content-container py-[1.5em] text-content">
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
          {/* <h3
            style={{fontFamily: 'Montserrat Alternates'}}
            className="font-bold text-[1.7em] mb-[0.6em] text-[#FF71A7] opacity-90">
            {translate({id: 'what we do'})}
          </h3>
          <p className="text-[#53676C] pb-[2.5em]">
            {translate({id: 'what we do description'})}
          </p> */}
          {width > 450 ? (
            <div className="flex flex-row">
              <h3 className="flex flex-1 mb-[0.2em] text-[#FF71A7] opacity-90">
                {translate({id: 'earn money on our platform by investing'})}
              </h3>
              <a
                href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/4779901461043521251650643766164585910345101587726362605061919731785628910567"
                target="_blank">
                <button className="button-solid self-center">
                  {translate({id: 'buy nft'})}
                </button>
              </a>
            </div>
          ) : (
            <>
              <h3 className="mb-[0.2em] text-[#FF71A7] opacity-90">
                {translate({id: 'earn money on our platform by investing'})}
              </h3>
              <a
                href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/4779901461043521251650643766164585910345101587726362605061919731785628910567"
                target="_blank">
                <button className="button-solid mt-[0.4em]">
                  {translate({id: 'buy nft'})}
                </button>
              </a>
            </>
          )}
        </div>
      </section>
      <section className="bg-gradient-2 relative overflow-hidden">
        <TriangularGrid
          width={width}
          height={width * 1.33}
          className="absolute top-[-160%] ms:top-[-20%] left-[15%]"
        />
        <div className="content-container py-[1.5em] px-[30px] sm:px-[90px]">
          <h2 className="text-white opacity-90 mb-[0.2em] pt-[0.8em]">
            {translate({id: 'investors'})}
          </h2>
          <h3 className="text-white opacity-90 mt-[1em]">
            {translate({id: 'how we are arranged'})}
          </h3>
          <p className="text-white mt-[1em] mb-[1.4em]">
            {translate({id: 'how we are arranged description'})}
          </p>
        </div>
      </section>
    </>
  );
}
