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
        name="Black Girl"
        highestBid={10000}
        chain="polygon"
      />
      <NftCard
        width={300}
        img={exampleNft}
        ownerAvatar={minionImg}
        owner="Minion inc"
        name="Gold monkey"
        highestBid={8.989}
        chain="etherium"
      />
      <NftCard
        width={200}
        img={exampleNft}
        ownerAvatar={minionImg}
        owner="Minion Robert"
        name="Gold monkey"
        highestBid={8.989}
        chain="polygon"
      />
      <NftCard
        width={100}
        img={exampleNft}
        ownerAvatar={minionImg}
        owner="Minion John"
        name="Gold monkey"
        highestBid={8.989}
        chain="polygon"
      />
    </>
  );
}
