import React from 'react';

import {EffectCoverflow, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
import {sliderImage} from 'src/types';

import LeftIcon from 'static/img/common-icons/chevron-left.svg';
import RightIcon from 'static/img/common-icons/chevron-right.svg';

import {NftCard} from './NftCard';

interface MainSliderProps {
  data: sliderImage[];
}

export function MainSlider({data}: MainSliderProps) {
  const {width} = useWindowDimensions();

  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      modules={[EffectCoverflow, Scrollbar]}
      loop
      slidesPerView={width > 990 ? 5 : width > 630 ? 5 : 3}
      coverflowEffect={{
        slideShadows: false,
        rotate: 20,
        scale: 0.95,
        depth: 100,
        modifier: 1,
      }}
      pagination={{clickable: true}}
      navigation={{
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
      }}
      className="swiper mt-6 w-full">
      {data.map(({image, name, link}, index) => {
        return (
          <SwiperSlide key={index} className="h-auto">
            <div
              onClick={link ? () => window.open(link, '_blank') : undefined}
              className="w-full flex flex-col items-center">
              <NftCard
                width={width > 990 ? 230 : width > 630 ? width / 4 : 190}
                name={name}
                chain="etherium"
                ownerAvatar="https://i.seadn.io/gae/hP4JJhiY5yXu1mCvNycTke2O_xbtgIFfkLTjfT7C9TNKinkGpP2COikt7cwn0xqzoATRNC21wsiwy_Fe-MQ3PPTgRjkbbCfJf__L?auto=format&w=512"
                owner="Worlds of Women Galaxy"
                img={image}
              />
            </div>
          </SwiperSlide>
        );
      })}

      <div className="flex flex-row justify-center mt-6">
        <NavButton isLeft />
        <div className="self-center w-9 mx-2 h-0" />
        <NavButton />
      </div>
    </Swiper>
  );
}

interface NavButtonProps {
  isLeft?: boolean;
}

function NavButton({isLeft}: NavButtonProps) {
  const swiper = useSwiper();

  if (isLeft) {
    return (
      <div
        onClick={() => swiper.slidePrev()}
        className={
          'rounded-full text-white font-mono border-solid border-white border-[1px] w-[3em] h-[3em] flex items-center justify-center cursor-pointer'
        }>
        <LeftIcon className="w-[1em] h-[1em]" />
      </div>
    );
  } else {
    return (
      <div
        onClick={() => swiper.slideNext()}
        className={
          'rounded-full text-white font-mono border-solid aspect-square border-white border-[1px] w-[3em] h-[3em] flex items-center justify-center cursor-pointer'
        }>
        <RightIcon className="w-[1em] h-[1em]" />
      </div>
    );
  }
}
