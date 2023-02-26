import React from 'react';

import useWindowDimensions from '@site/src/hooks/useWindowDimensions';

import TriangularGrid from 'img/triangularGrid.svg';

export function AboutSection() {
  const {width} = useWindowDimensions();
  return (
    <>
      <section className="bg-white">
        <div className="content-container py-[1.5em] text-content">
          <h3
            style={{fontFamily: 'Montserrat Alternates'}}
            className="font-bold text-[1.7em] text-[#FF71A7] mb-[0.2em] opacity-90">
            О чем наш проект
          </h3>
          <p
            style={{fontFamily: 'ProximaNovaRegular'}}
            className="text-[#53676C] font-[1em] pb-[2.5em]">
            В далекой-предалекой стране, в Тридевятом царстве, живут принцессы,
            мечтающие о своем принце. Чтобы найти свою половинку, они должны
            принять участие в особом ритуале - союз обручальных колец в замке
            союза. Замок союза является уникальным и неповторимым, так как
            каждый его фрагмент создан с помощью невзаимозаменяемый токена NFT
            для представления каждого элемента этой лимитированной коллекции
            состоящей из 999 замка - союза 27 королевств. Там на балах золушки
            превращаются в принцесс, а принцы заключают NFT-союз с избранницей
            своего сердца. Этот проект оживляет старые легенды о принцессах и их
            искателях, используя новые технологии для создания уникальных и
            неповторимых цифровых активов. Он представляет собой удивительное
            сочетание традиционного и современного, вдохновляя участников
            мечтать и верить в чудеса.
          </p>
          <h3
            style={{fontFamily: 'Montserrat Alternates'}}
            className="font-bold text-[1.7em] mb-[0.2em] text-[#FF71A7] opacity-90">
            Что мы делаем
          </h3>
          <p className="text-[#53676C] pb-[2.5em]">
            Концепция NFT загса Тридевятого царства вдохновлена сочетанием
            современных технологий и традиционных ценностей. Она основана на
            идее создания уникальных цифровых активов, которые могут быть
            использованы для записи актов гражданского состояния, таких как
            свадьбы.
          </p>
          {width > 450 ? (
            <div className="flex flex-row">
              <h3 className="flex flex-1 mb-[0.2em] text-[#FF71A7] opacity-90">
                Зарабатывайте на нашей платформе иневестируя в нас
              </h3>
              <button className="button-solid self-center">Купить NFT</button>
            </div>
          ) : (
            <>
              <h3 className="mb-[0.2em] text-[#FF71A7] opacity-90">
                Зарабатывайте на нашей платформе иневестируя в нас
              </h3>
              <button className="button-solid mt-[0.4em]">Купить NFT</button>
            </>
          )}
        </div>
      </section>
      <section className="bg-gradient-2 relative overflow-hidden">
        <TriangularGrid
          width={width}
          height={width * 1.33}
          className="absolute top-[-160%] ms:top-[-20%] left-[15%]"
        />
        <div className="content-container py-[1.5em] px-[30px] sm:px-[90px]">
          <h2 className="text-white opacity-90 mb-[0.2em] pt-[0.8em]">
            ИНВЕСТОРАМ
          </h2>
          <h3 className="text-white opacity-90 mt-[1em]">Как мы устроены</h3>
          <p className="text-white mt-[1em] mb-[1.4em]">
            Тридевятое Царство состоит из 27 королевств, где каждое королевство
            включает в себя 37 замков союза. Всего в Царстве 27x37=999 замков
            союза.
          </p>
        </div>
      </section>
    </>
  );
}
