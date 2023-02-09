import {About, Hero} from 'src/components/sections';
import {exploreContents} from 'src/constants/ContentForExploreCards';

export function Home() {
  return (
    <>
      <Hero />
      <About exploreData={exploreContents} />
    </>
  );
}
