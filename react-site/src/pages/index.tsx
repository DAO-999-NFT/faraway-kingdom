import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import {WelcomeSection} from 'src/components/sections/Welcome';

import {mainSliderImages} from 'img/main-slider-images';

import {AboutSection} from '../components/sections/About';
import {ExploreSection} from '../components/sections/Explore';
import {PosterSection} from '../components/sections/Poster';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <WelcomeSection sliderImages={mainSliderImages} />
        <PosterSection />
        <AboutSection />
        <ExploreSection />
      </main>
    </Layout>
  );
}
