"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| О нас" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white pb-5"
      >
        <span className="font-extrabold text-white">В Тридевятом Царстве</span>{" "}
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
        .{" "}
      </motion.p>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white pb-5"
      >
        Коллекция стала праздником электронной музыки, и было сказано, что
        обладание NFT принесет коллекционеру{" "}
        <span className="font-extrabold text-white">удачу</span>,{" "}
        <span className="font-extrabold text-white">землю</span> в метавселенной
        999 и <span className="font-extrabold text-white">токен</span>{" "}
        управления в Царстве Тридевятом DAO в придачу.
      </motion.p>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white pb-5"
      >
        И вот, было объявлено, что{" "}
        <span className="font-extrabold text-white">8 марта</span> в волшебном
        королевстве, в{" "}
        <span className="font-extrabold text-white">клубе Культ</span>, начнется{" "}
        <span className="font-extrabold text-white">официальный аукцион</span>{" "}
        коллекции, куда мы приглашаем вас присоединиться к нам на тропическом
        острове <span className="font-extrabold text-white">Панган</span> и
        погрузиться в это с головой за белым кроликом домой.
      </motion.p>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white pb-5"
      >
        Итак, было сказано, что любой, кому посчастливится посетить это
        мероприятие, получит{" "}
        <span className="font-extrabold text-white">
          шанс стать первым обладателем произведения цифрового искусства
        </span>{" "}
        и ощутить магию электронной музыки.
      </motion.p>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white pb-5"
      >
        Добро пожаловать в заколдованный мир метавселенной -{" "}
        <span className="font-extrabold text-white">Тридевятое Царство</span>,
        где каждой частью метавселенной правит{" "}
        <span className="font-extrabold text-white">
          легендарная королева, изображенная на NFT.
        </span>
      </motion.p>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Присоединяйтесь к нам, пока мы воплощаем в жизнь заколдованное
        <span className="font-extrabold text-white">
          королевство метавселенной Тридевятого Царства
        </span>{" "}
        и становимся частью его богатой династии клубных культурных деятелей.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
