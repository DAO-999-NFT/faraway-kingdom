import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import {WelcomeSection} from 'src/components/sections/Welcome';

import {AboutSection} from '../components/sections/About';
import {EmailFormSection} from '../components/sections/EmailForm';
import {EventsSection} from '../components/sections/Events';
import {ExploreSection} from '../components/sections/Explore';
import {FooterSection} from '../components/sections/Footer';
import {PosterSection} from '../components/sections/Poster';
import {imagesData} from '../constants/sliderImagesData';
import {EmailApiProvider} from '../utils/emailApi';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <EmailApiProvider>
        <main>
          <WelcomeSection sliderImages={imagesData} />
          <AboutSection />
          <PosterSection />
          <ExploreSection />
          <EventsSection />
          <FooterSection />
          <EmailFormSection />
        </main>
      </EmailApiProvider>
    </Layout>
  );
}
