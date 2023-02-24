import React from 'react';

import {EffectCoverflow, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

import LeftIcon from 'static/img/common-icons/chevron-left.svg';
import RightIcon from 'static/img/common-icons/chevron-right.svg';

import {NftCard} from './NftCard';

interface MainSliderProps {
  data: string[];
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
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index} className="h-auto">
            <div className="w-full flex flex-col items-center">
              <NftCard
                width={width > 990 ? 230 : width > 630 ? width / 4 : 190}
                name="Vadim"
                chain="polygon"
                highestBid={200}
                ownerAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfygMkcjv9HqIJrAhrd4Xke0YxQRO16je2Q&usqp=CAU"
                owner="Minion band"
                img={item}
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
