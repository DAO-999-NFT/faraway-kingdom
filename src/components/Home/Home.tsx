import {About, Hero} from 'src/components/sections';
import {exploreContents} from 'src/constants/ContentForExploreCards';

import exampleNft from 'public/main-slider-images/women1.png';
import minionImg from 'public/minionImg.png';

import {NftCard} from '../ui';

export function Home() {
  return (
    <>
      <Hero />
      <About exploreData={exploreContents} />
      <NftCard
        img={exampleNft}
        ownerAvatar={minionImg}
        owner="Minion rap"
        name="Gold monkey"
        highestBid={8.989}
        chain="polygon"
      />
    </>
  );
}
