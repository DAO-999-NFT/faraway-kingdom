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
            Тридевятое царство – это социальная NFT-платформа для клаберов,
            позволяющая покупать и продавать NFT-билеты на лучшие вечеринки
            планеты и обеспечить справедливую модель ценообразования при
            распределении дохода от продажи NFT билетов.
          </p>
          <h3
            style={{fontFamily: 'Montserrat Alternates'}}
            className="font-bold text-[1.7em] mb-[0.2em] text-[#FF71A7] opacity-90">
            Что мы делаем
          </h3>
          <p className="text-[#53676C] pb-[2.5em]">
            Мы создаем способ для любого создать билеты на мероприятия и
            загрузить их на рынок, где их могут купить наша активная аудитория.
            Мы обеспечиваем простой и удобный пользовательский интерфейс в
            мобильном приложении и на сайте.
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
          width={width * 1.1}
          height={width * 1.1 * 1.33}
          className="absolute top-[-105%] left-[15%]"
        />
        <div className="content-container py-[1.5em] px-[30px] sm:px-[90px]">
          <h2 className="text-white opacity-90 mb-[0.2em] pt-[0.8em]">
            ИНВЕСТОРАМ
          </h2>
          <h3 className="text-white opacity-90 mt-[1em]">Как мы устроены</h3>
          <p className="text-white mt-[1em] mb-[1.4em]">
            Тридевятое Царство состоит из 27 пулов ликвидности, где каждый пул
            ликвидности включает в себя 37 фондов. Всего в Царство может войти
            27x37=999 фондов.
          </p>
        </div>
      </section>
    </>
  );
}
