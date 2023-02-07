"use client";

import { motion } from "framer-motion";

import styles from "src/styles";
import { fadeIn, slideIn, textFade } from "src/utils/motion";
import { SocialButton } from "src/components/SocialButton";
import farawayKingdomLogo from "public/farawayKingdomLogo.svg";
import Image from "next/image";

export function Hero() {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center flex-col relative z-10">
          <motion.div
            variants={textFade(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <Image
              src={farawayKingdomLogo}
              alt="faraway_kingdom_logo"
              className="w-196 h-56"
              width={844}
              height={232}
            />
          </motion.div>
          <motion.div
            className="flex flex-col absolute right-10"
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
            <SocialButton className="my-4" icon="reddit" />
            <SocialButton className="my-4" icon="discord" />
            <SocialButton className="my-4" icon="twitter" />
            <SocialButton className="my-4" icon="instagram" />
          </motion.div>
        </div>

        <motion.div
          variants={slideIn({
            direction: "right",
            transition: {
              type: "tween",
              delay: 0.2,
            },
          })}
          className="relative w-full mt-24"
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
        </motion.div>
      </motion.div>
    </section>
  );
}
