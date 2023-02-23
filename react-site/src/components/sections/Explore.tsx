import React, {useState} from 'react';

import {ExploreCard} from 'src/components/ui/ExploreCard';
import {
  exploreContents,
  exploreContentsItemNames,
} from 'src/constants/ContentForExploreCards';

export function ExploreSection() {
  const [active, setActive] = useState<exploreContentsItemNames>('content-1');

  return (
    <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
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
  );
}
