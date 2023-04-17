import React, {useState} from 'react';

import {translate} from '@docusaurus/Translate';

import {ExploreCard} from 'src/components/ui/ExploreCard';
import {roadmapData} from 'src/constants/roadmapData';
import {
  exploreContents,
  exploreContentsItemNames,
} from 'src/constants/сontentForExploreCards';

export function EventsSection() {
  const [active, setActive] = useState<exploreContentsItemNames>('content-1');
  return (
    <div className="content-container">
      <div className="text-content">
        <h2 className="text-[#FF82B2] b-[0.5em] pt-[0.8em]">
          {translate({id: 'events'})}
        </h2>
        {/* <h3 className="text-[#FF82B2] mt-[1em]">
          {translate({id: 'phangan'})}
        </h3> */}
        <p className="text-[#53676C] pt-[0.4em] pb-[1em]">
          {translate({id: 'phangan 8 march'})}
        </p>
        <div className="flex flex-row basis-[33%] gap-y-[1em] mb-[4em] justify-between flex-wrap">
          {roadmapData.map(({name, img}) => {
            return (
              <div className="text-center flex flex-col max-w-[33%] min-w-[100px]">
                <img
                  src={img}
                  className="rounded-full z-10 mb-[0.5em] h-[90%] w-[90%] self-center"
                />
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'ProximaNovaBold',
                  }}
                  className="text-[#FF82B2] text-[1.5em]">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex px-[3em] lg:flex-row min-h-[70vh] mb-[4em] lg:min-h-0 flex-col gap-[0.6em]">
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
