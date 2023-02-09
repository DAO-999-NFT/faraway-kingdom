import { motion } from "framer-motion";

import styles from "src/styles";
import { fadeIn, textFade } from "src/utils/motion";
import { SocialButton } from "src/components/SocialButton";
import farawayKingdomLogo from "public/farawayKingdomLogo.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { SliderWithRotation } from "src/components/SliderWithRotation";
import { MainSliderImages } from "public/main-slider-images";
import useWindowDimensions from "src/hooks/useWindowDimensions";
import { MAX_PX_FOR_SHOW_NAVBAR } from "src/constants/common";

type pathsType = "home" | "createNft" | "sellAssets" | "myAssets";

export function Hero() {
  const [selected, setSelected] = useState<pathsType>("home");
  const { width } = useWindowDimensions();
  const isnNavBlockVisible = width > MAX_PX_FOR_SHOW_NAVBAR;

  const textColor = (name: pathsType) => {
    return selected === name
      ? { color: "rgb(224, 92, 255)" }
      : { color: "rgb(255, 255, 255)" };
  };

  const onPressNav = (path: pathsType) => () => {
    setSelected(path);
  };

  return (
    <section>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center flex-col relative z-10">
          <motion.div
            variants={textFade(0.3)}
            className="flex flex-row justify-center"
          >
            <Image
              src={farawayKingdomLogo}
              alt="faraway_kingdom_logo"
              className="w-250 h-83 -mt-8"
              width={864}
              height={288}
            />
          </motion.div>
          {width > 935 && (
            <motion.div
              className="flex flex-col absolute align-top top-0 right-10"
              initial="hidden"
              whileInView="show"
              variants={fadeIn({
                direction: "right",
                transition: {
                  type: "tween",
                  delay: 0.2,
                },
              })}
            >
              <SocialButton className="my-2" icon="reddit" />
              <SocialButton className="my-2" icon="discord" />
              <SocialButton className="my-2" icon="twitter" />
              <SocialButton className="my-2" icon="instagram" />
            </motion.div>
          )}
        </div>
        {/* <motion.div
          variants={slideIn({
            direction: "right",
            transition: {
              type: "tween",
              delay: 0.2,
            },
          })}
          className="relative w-full mt-24 sm:pl-16 pl-6"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <Image
            src="/cover.png"
            alt="hero_cover"
            width={3915}
            height={2595}
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <Image
                src="/stamp.png"
                width={500}
                height={500}
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div> */}
      </motion.div>
      {width <= 935 && (
        <motion.div
          className="flex self-end justify-end flex-row mr-6"
          initial="hidden"
          whileInView="show"
          variants={fadeIn({
            direction: "left",
            transition: {
              type: "tween",
              delay: 0.2,
            },
          })}
        >
          <SocialButton className="mx-2" icon="reddit" />
          <SocialButton className="mx-2" icon="discord" />
          <SocialButton className="mx-2" icon="twitter" />
          <SocialButton className="mx-2" icon="instagram" />
        </motion.div>
      )}
      {isnNavBlockVisible && (
        <div className="flex justify-center flex-row text-lg md:text-2xl text-white mt-4">
          <Link href="/">
            <motion.div
              className="cursor-pointer font-tuffy"
              onClick={onPressNav("home")}
              animate={textColor("home")}
              transition={{ duration: 0.5 }}
            >
              Home
            </motion.div>
          </Link>
          &nbsp;|&nbsp;
          <motion.div
            className="cursor-pointer font-tuffy"
            onClick={onPressNav("sellAssets")}
            animate={textColor("sellAssets")}
            transition={{ duration: 0.5 }}
          >
            Sell assets
          </motion.div>
          &nbsp;|&nbsp;
          <motion.div
            className="cursor-pointer font-tuffy"
            onClick={onPressNav("myAssets")}
            animate={textColor("myAssets")}
            transition={{ duration: 0.5 }}
          >
            My Assets
          </motion.div>
          &nbsp;|&nbsp;
          <Link href="/create-nft">
            <motion.div
              className="cursor-pointer font-tuffy"
              onClick={onPressNav("createNft")}
              animate={textColor("createNft")}
              transition={{ duration: 0.5 }}
            >
              Creator Dashboard
            </motion.div>
          </Link>
        </div>
      )}
      <SliderWithRotation data={MainSliderImages} />
    </section>
  );
}
