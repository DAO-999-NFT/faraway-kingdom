import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import leftIcon from "public/common-icons/chevron-left.svg";
import rightIcon from "public/common-icons/chevron-right.svg";
import useWindowDimensions from "src/hooks/useWindowDimensions";

interface SliderWithRotationProps {
  data: string[] | StaticImageData[];
}

export function SliderWithRotation({ data }: SliderWithRotationProps) {
  const { width } = useWindowDimensions();

  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      modules={[EffectCoverflow, Scrollbar]}
      loop
      slidesPerView={width > 700 ? 5 : width > 550 ? 4 : 3}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        scale: 0.95,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev",
      }}
      className="swiper mt-6 max-w-[1200px]"
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index} className="h-auto">
            <Image
              className="w-60 h-50 md:h-80 rounded-xl overflow-hidden"
              height={500}
              width={400}
              src={item}
              alt="img"
            />
          </SwiperSlide>
        );
      })}

      <div className={"flex flex-row justify-center mt-6"}>
        <NavButton isLeft />
        <NavButton />
      </div>
    </Swiper>
  );
}

interface NavButtonProps {
  isLeft?: boolean;
}

const NavButton = ({ isLeft }: NavButtonProps) => {
  const swiper = useSwiper();

  if (isLeft) {
    return (
      <div
        onClick={() => swiper.slidePrev()}
        className={
          "rounded-full text-white font-mono border-white border-[1px] p-2 mr-6 cursor-pointer"
        }
      >
        <Image
          className="w-4 h-4"
          width={50}
          height={50}
          src={leftIcon}
          alt="next"
        />
      </div>
    );
  } else {
    return (
      <div
        onClick={() => swiper.slideNext()}
        className={
          "rounded-full text-white font-mono border-white border-[1px] p-2 cursor-pointer"
        }
      >
        <Image
          className="w-4 h-4"
          width={50}
          height={50}
          src={rightIcon}
          alt="next"
        />
      </div>
    );
  }
};
