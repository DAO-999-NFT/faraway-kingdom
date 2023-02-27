import React from 'react';

import {MainSlider} from '@site/src/components/ui/MainSlider';
import {motion} from 'framer-motion';

import castleL from 'img/welcome/castleL.png';
import castleR from 'img/welcome/castleR.png';
import cloudL from 'img/welcome/cloudL.png';
import cloudR from 'img/welcome/cloudR.png';
interface WelcomeSectionProps {
  sliderImages: any[];
}

export function WelcomeSection({
  sliderImages,
}: WelcomeSectionProps): JSX.Element {
  return (
    <section className="bg-gradient-1 relative overflow-hidden">
      <motion.img
        className="absolute top-[75px] aspect-[1.77] w-[40%]"
        src={cloudL}
        draggable={false}
        initial={{x: '-100%'}}
        whileInView={{x: 0}}
        transition={{ease: 'easeOut', duration: 0.8, bounce: false}}
        viewport={{once: true}}
      />
      <motion.img
        className="absolute right-0 aspect-[1.08] w-[50%]"
        src={cloudR}
        initial={{x: '100%'}}
        whileInView={{x: 0}}
        viewport={{once: true}}
        transition={{ease: 'easeOut', duration: 1, bounce: false}}
        draggable={false}
      />
      <motion.img
        className="absolute left-0 bottom-0 aspect-[1.08] w-[30%]"
        src={castleL}
        initial={{y: '80%'}}
        whileInView={{y: 0}}
        viewport={{once: true}}
        transition={{ease: 'easeOut', duration: 1.2, bounce: false}}
        draggable={false}
      />
      <motion.img
        className="absolute right-0 bottom-0 aspect-[1.08] w-[30%]"
        src={castleR}
        initial={{y: '80%'}}
        whileInView={{y: 0}}
        viewport={{once: true}}
        transition={{ease: 'easeOut', duration: 1.2, bounce: false}}
        draggable={false}
      />
      <div className="content-container pt-[30px] pb-[1.5em] px-[2em]">
        <MainSlider data={sliderImages} />
        {/* <PageTopLogo
          width="200px"
          className="self-center mb-[0.75em] aspect-square"
        /> */}

        <h1 style={{marginTop: '0.3em', fontSize: '6.8em'}} className="">
          999NFT
        </h1>
        <h1>KINGDOM</h1>
        {/* <div
          style={{
            fontFamily: 'ProximaNovaRegular',
            letterSpacing: '0.8em',
            lineHeight: '2.75em',
          }}
          className="text-center text-white text-[1.875em] mt-6">
          METAVERSE
        </div> */}

        <div
          style={{fontFamily: 'ProximaNovaRegular'}}
          className="text-center text-white text-[1.2em] mt-[0.5em] mb-[1.5em]">
          Клубная социальная NFT-платформа для покупки и<br />
          продажи NFT-билетов
        </div>
        <button className="button-outline text-white self-center mb-[100px]">
          Узнать больше
        </button>
      </div>
    </section>
  );
}
