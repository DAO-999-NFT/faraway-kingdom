import React from 'react';

import {motion} from 'framer-motion';

import castleOnCloud from 'img/castleOnCloud.png';
import TriangularGridLeftPart from 'img/triangularGridLeftPart.svg';

export function ExploreSection() {
  return (
    <section className="bg-white pt-[3em] overflow-hidden">
      <div className="content-container text-content">
        <h3 className="text-[#FF82B2]">Тридевятое царство DAO</h3>
        <p className="text-[#53676C] pt-[0.4em] pb-[1em]">
          Тридевятое царство DAO – децентрализованная автономная организация,
          которая принимает решения на основе голосования среди держателей
          токенов управления (Goverments token) с миссией создать метавселенную
          Тридевятое Царство.
        </p>
        <h3 className="text-[#FF82B2] mt-[1em]">
          Как зарабатывать в тридевятом
        </h3>
        <div className="flex flex-row flex-wrap gap-y-[1.25em] text-white">
          <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mr-[0.5em]">
            <CircleOrderNumber bgColor="#FF82B2" textColor="white">
              1
            </CircleOrderNumber>
            <p className="text-[#FF82B2]">
              Бесплатно зарегистри-руйтесь через meta-mask
            </p>
          </div>
          <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mx-[0.5em]">
            <CircleOrderNumber bgColor="#FF82B2" textColor="white">
              2
            </CircleOrderNumber>
            <p className="text-[#FF82B2]">Получите доступ к приложению</p>
          </div>
          <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mx-[0.5em]">
            <CircleOrderNumber bgColor="#FF82B2" textColor="white">
              3
            </CircleOrderNumber>
            <p className="text-[#FF82B2]">
              Создавайте ивенты и загру-жайте их на платформу
            </p>
          </div>
          <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 ml-[0.5em]">
            <CircleOrderNumber bgColor="#FF82B2" textColor="white">
              4
            </CircleOrderNumber>
            <p className="text-[#FF82B2]">
              Получайте прибыль с продажи каждого билета
            </p>
          </div>
        </div>
        <button className="button-solid self-end mt-[1em] mb-[3em]">
          Купить NFT
        </button>
      </div>
      <div className="relative">
        <motion.img
          initial={{y: '50%', x: '50%'}}
          whileInView={{y: 0, x: '40%'}}
          viewport={{once: true}}
          transition={{ease: 'easeOut', duration: 1.2, bounce: false}}
          className="w-[30%] max-w-[500px] hidden castle:block absolute z-10 right-0 top-[-20%]"
          src={castleOnCloud}
        />

        <div className="bg-gradient-3 relative overflow-hidden">
          <TriangularGridLeftPart height="100%" className="absolute" />
          <div className="content-container py-[1.5em] pb-[2em] text-content">
            <h2 className="text-white b-[0.5em] pt-[0.8em]">Промоутерам</h2>
            <h3 className="text-white mt-[1em]">Подключайтесь к нам</h3>
            <p className="text-white pt-[0.4em] pb-[2em]">
              Создавайте свои ивенты на нашей платформе и продавайте на них
              билеты нашей активной аудитории клаберов со всего мира. Получайте
              информационную поддержку от Тридевятого царства и прибыль с
              продажи каждого билета.
            </p>

            <h3 className="text-white pb-[1em]">Как зарабатывать с нами:</h3>
            <div className="flex flex-row flex-wrap gap-y-[1.25em] text-white">
              <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mr-[0.5em]">
                <CircleOrderNumber textColor="#DAB7FB">1</CircleOrderNumber>
                <p>Бесплатно зарегистри-руйтесь через meta-mask</p>
              </div>
              <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mx-[0.5em]">
                <CircleOrderNumber textColor="#EEA3FE">2</CircleOrderNumber>
                <p>Получите доступ к приложению</p>
              </div>
              <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 mx-[0.5em]">
                <CircleOrderNumber textColor="#FB97FF">3</CircleOrderNumber>
                <p>Создавайте ивенты и загру-жайте их на платформу</p>
              </div>
              <div className="flex flex-col min-w-[100px] max-w-[50%] flex-1 ml-[0.5em]">
                <CircleOrderNumber textColor="#FD8BE8">4</CircleOrderNumber>
                <p>Получайте прибыль с продажи каждого билета</p>
              </div>
            </div>
            <button className="button-outline self-end mt-[1em]">
              Запросить доступ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CircleOrderNumberProps {
  children: string | JSX.Element;
  textColor: string;
  bgColor?: string;
}

function CircleOrderNumber({
  children,
  textColor,
  bgColor = 'white',
}: CircleOrderNumberProps) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="rounded-full relative inline-block h-[2.5em] w-[2.5em] mb-[1em]">
      <h2
        style={{color: textColor}}
        className={`w-full h-full flex items-center justify-center`}>
        {children}
      </h2>
    </div>
  );
}
