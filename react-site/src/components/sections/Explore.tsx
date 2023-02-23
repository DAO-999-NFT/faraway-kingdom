import React, {useState} from 'react';

import {ExploreCard} from 'src/components/ui/ExploreCard';
import {
  exploreContents,
  exploreContentsItemNames,
} from 'src/constants/ContentForExploreCards';

export function ExploreSection() {
  const [active, setActive] = useState<exploreContentsItemNames>('content-1');

  return (
    <section className="bg-white pt-[3em]">
      <div className="content-container">
        <div className="flex px-[3em] sm:px-[7em] md:px-[5em] lg:flex-row min-h-[70vh] lg:min-h-0 flex-col gap-[0.6em]">
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
          <h2 className="text-[#FF82B2] pb-[0.3em]">Промоутерам</h2>
          <h3 className="text-[#FF82B2]">Подключайтесь к нам</h3>
          <p className="text-[#53676C] pt-[0.4em] pb-[3em]">
            Создавайте свои ивенты на нашей платформе и продавайте на них билеты
            нашей активной аудитории клаберов со всего мира. Получайте
            информационную поддержку от Тридевятого царства и прибыль с продажи
            каждого билета.
          </p>
        </div>
      </div>
    </section>
  );
}
