import React, {useState} from 'react';

import {ExploreCard} from 'src/components/ui/ExploreCard';
import {
  exploreContents,
  exploreContentsItemNames,
} from 'src/constants/ContentForExploreCards';

export function EventsSection() {
  const [active, setActive] = useState<exploreContentsItemNames>('content-1');
  return (
    <div className="content-container">
      <div className="text-content">
        <h2 className="text-[#FF82B2] b-[0.5em] pt-[0.8em]">Мероприятия</h2>
        <h3 className="text-[#FF82B2] mt-[1em]">Панган</h3>
        <p className="text-[#53676C] pt-[0.4em] pb-[1em]">
          8 марта открывается продажа первых 9 NFT. Лимитированная коллекция
          состоит из 999 NFT. Продажа первых 9 NFT откроет Тридевятое Царство на
          территории Бали.
        </p>
      </div>

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
    </div>
  );
}
