import React, {useState} from 'react';

import {motion} from 'framer-motion';
import Image from 'next/image';

import {MainSlider} from 'src/components/ui/MainSlider';
import {SocialButton} from 'src/components/ui/SocialButton';
import {MAX_PX_FOR_SHOW_NAVBAR} from 'src/constants/common';
import {MAIN_NAV_PATHS, PATHS_NAMES} from 'src/constants/Paths';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
import styles from 'src/styles';
import {fadeIn, textFade} from 'src/utils/motion';

import farawayKingdomLogo from 'public/farawayKingdomLogo.svg';
import {MainSliderImages} from 'public/main-slider-images';

import {LinkButton} from '../ui';

export function Hero() {
  const [selected, setSelected] = useState<PATHS_NAMES>(PATHS_NAMES.home);
  const {width} = useWindowDimensions();
  const isnNavBlockVisible = width > MAX_PX_FOR_SHOW_NAVBAR;

  const onPressNav = (path: PATHS_NAMES) => {
    setSelected(path);
  };

  return (
    <section>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="flex justify-center flex-col relative z-10">
          <motion.div
            variants={textFade(0.3)}
            className="flex flex-row justify-center">
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
                direction: 'right',
                transition: {
                  type: 'tween',
                  delay: 0.2,
                },
              })}>
              <SocialButton className="my-2" icon="reddit" />
              <SocialButton className="my-2" icon="discord" />
              <SocialButton className="my-2" icon="twitter" />
              <SocialButton className="my-2" icon="instagram" />
            </motion.div>
          )}
        </div>
      </motion.div>
      {width <= 935 && (
        <motion.div
          className="flex self-end justify-end flex-row mr-6"
          initial="hidden"
          whileInView="show"
          variants={fadeIn({
            direction: 'left',
            transition: {
              type: 'tween',
              delay: 0.2,
            },
          })}>
          <SocialButton className="mx-2" icon="reddit" />
          <SocialButton className="mx-2" icon="discord" />
          <SocialButton className="mx-2" icon="twitter" />
          <SocialButton className="mx-2" icon="instagram" />
        </motion.div>
      )}
      {isnNavBlockVisible && (
        <div className="flex justify-center flex-row text-lg md:text-2xl text-white mt-4">
          {MAIN_NAV_PATHS.map(({text, name}, id) => (
            <React.Fragment key={name}>
              <LinkButton
                onPress={onPressNav}
                selected={selected}
                text={text}
                name={name}
              />
              {id !== MAIN_NAV_PATHS.length - 1 && (
                <div className="h-8 w-[2px] bg-white mx-2 rounded-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      <MainSlider data={MainSliderImages} />
    </section>
  );
}
