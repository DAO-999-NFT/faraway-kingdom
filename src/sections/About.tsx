import {useState} from 'react';

import {motion} from 'framer-motion';
import Image from 'next/image';

import {ExploreCard, TypingText} from 'src/components';
import {exploreWorlds} from 'src/constants/ContentForExploreCards';
import styles from 'src/styles';

import mapImage from 'public/map.png';

export function About() {
  const [active, setActive] = useState('world-2');

  return (
    <section className={'pt-16 pb-6 px-8'} id="explore">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText
          className="text-3xl space-y-2 text-center"
          title="В Тридевятом Царстве существовала волшебная коллекция цифрового искусства. В этих NFT были представлены культовые клубные девушки, каждая из которых уникальна и дает обладателям часть земли в метавселенной Тридевятое Царство и вход на приватные вечеринки соединенного королевства. Эти цифровые предметы коллекционирования можно продавать и обменивать в таинственном мире блокчейна. Чья NFT дороже уйдет с молотка, та и Царица Царства Тридевятого."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                type: 'tween',
                ease: 'easeIn',
                delay: 0.5,
              },
            },
          }}>
          <Image
            alt="map"
            className="h-[20rem] w-[30rem] rounded-xl mx-auto my-8"
            height={600}
            width={900}
            src={mapImage}
          />
        </motion.div>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* <span className="font-extrabold text-white">В Тридевятом Царстве</span>{" "}
        существовала волшебная коллекция цифрового искусства. В этих NFT были
        представлены культовые клубные девушки, каждая из которых уникальна, и
        дает обладателям часть земли в метавселенной Тридевятое Царство, и вход
        на приватные вечеринки, а также другие бенефиты. Эти цифровые предметы
        коллекционирования можно{" "}
        <span className="font-extrabold text-white">
          продавать и обменивать
        </span>{" "}
        в таинственном мире{" "}
        <span className="font-extrabold text-white">блокчейна</span>. Чья NFT
        дороже уйдет с молотка, та и{" "}
        <span className="font-extrabold text-white">
          Царица Царства Тридевятого
        </span>
        . */
