import React, {useState} from 'react';

import {motion} from 'framer-motion';

import {ExploreCard} from 'src/components/ui/ExploreCard';
import {
  exploreContents,
  exploreContentsItemNames,
} from 'src/constants/ContentForExploreCards';

import castleOnCloud from 'img/castleOnCloud.png';
import ApolloLogo from 'img/technology-icons/apolloLogo.svg';
import GitHubLogo from 'img/technology-icons/gitHubLogo.svg';
import GraphLogo from 'img/technology-icons/graphLogo.svg';
import PolygonLogo from 'img/technology-icons/polygonLogo.svg';
import ReactLogo from 'img/technology-icons/reactLogo.svg';
import TypescriptLogo from 'img/technology-icons/typescriptLogo.svg';
import TriangularGridLeftPart from 'img/triangularGridLeftPart.svg';

export function ExploreSection() {
  const [active, setActive] = useState<exploreContentsItemNames>('content-1');

  return (
    <section className="bg-white pt-[3em] overflow-hidden">
      <div className="content-container">
        <div className="flex px-[3em] lg:flex-row min-h-[70vh] lg:min-h-0 flex-col gap-[0.6em]">
          {exploreContents.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
        <div className="text-content">
          <h2 className="text-[#FF82B2] b-[0.5em] pt-[0.8em]">Промоутерам</h2>
          <h3 className="text-[#FF82B2]">Подключайтесь к нам</h3>
          <p className="text-[#53676C] pt-[0.4em] pb-[3em]">
            Создавайте свои ивенты на нашей платформе и продавайте на них билеты
            нашей активной аудитории клаберов со всего мира. Получайте
            информационную поддержку от Тридевятого царства и прибыль с продажи
            каждого билета.
          </p>
        </div>
      </div>
      <div className="relative">
        {
          <motion.img
            initial={{y: '50%', x: '50%'}}
            whileInView={{y: 0, x: '40%'}}
            viewport={{once: true}}
            transition={{ease: 'easeOut', duration: 1.2, bounce: false}}
            className="w-[30%] max-w-[500px] hidden castle:block absolute z-10 right-0 top-[-90%]"
            src={castleOnCloud}
          />
        }
        <div className="bg-gradient-3 relative overflow-hidden">
          <TriangularGridLeftPart height="100%" className="absolute left-0" />
          <div className="content-container py-[1.5em] pb-[2em] text-content">
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
      <div className="content-container py-[1.5em] text-content">
        <h3 className="text-[#C8BAF9] pb-[1em]">Technology Stack</h3>
        <div className="flex flex-row flex-wrap gap-[1.25em] justify-between gap-y-[1.25em] text-white">
          <ApolloLogo className="w-[4em]" />
          <GitHubLogo className="w-[4em]" />
          <GraphLogo className="w-[4em]" />
          <PolygonLogo className="w-[4em]" />
          <ReactLogo className="w-[4em]" />
          <TypescriptLogo className="w-[4em]" />
        </div>
      </div>
    </section>
  );
}

interface CircleOrderNumberProps {
  children: string | JSX.Element;
  textColor: string;
}

function CircleOrderNumber({children, textColor}: CircleOrderNumberProps) {
  return (
    <div className="rounded-full relative inline-block h-[2.5em] w-[2.5em] bg-white mb-[1em]">
      <h2
        style={{color: textColor}}
        className={`w-full h-full flex items-center justify-center`}>
        {children}
      </h2>
    </div>
  );
}
