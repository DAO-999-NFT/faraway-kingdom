import Image, { StaticImageData } from "next/image";
import styles from "src/styles/slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import leftIcon from "public/common-icons/chevron-left.svg";
import rightIcon from "public/common-icons/chevron-right.svg";

interface SliderWithRotationProps {
  data: string[] | StaticImageData[];
}

export function SliderWithRotation({ data }: SliderWithRotationProps) {
  return (
    <div className={styles["container"]}>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        }}
        className={["swiper", styles["tranding-slider"]].join(" ")}
      >
        <div className={"swiper-wrapper"}>
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} className={styles["tranding-slide"]}>
                <div className={styles["tranding-slide-img"]}>
                  <Image
                    className="w-60 h-80"
                    height={500}
                    width={400}
                    src={item}
                    alt="img"
                  />
                </div>
                <div className={styles["tranding-slide-content"]}>
                  <div
                    className={styles["tranding-slide-content-bottom"]}
                  ></div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>

        <div className={styles["tranding-slider-control"] + " bg-red-200"}>
          <div
            className={
              "swiper-button-prev rounded-full text-white font-mono border-white border-[1px] p-2 mr-6"
            }
          >
            <Image
              className="w-3 h-3"
              width={50}
              height={50}
              src={leftIcon}
              alt="next"
            />
          </div>
          <div
            className={
              "swiper-button-next rounded-full text-white font-mono border-white border-[1px] p-2"
            }
          >
            <Image
              className="w-3 h-3"
              width={50}
              height={50}
              src={rightIcon}
              alt="next"
            />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
