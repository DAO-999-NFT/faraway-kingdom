import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import {WelcomeSection} from 'src/components/sections/Welcome';

// import {AboutSection} from '../components/sections/About';
import {EmailFormSection} from '../components/sections/EmailForm';
import {EventsSection} from '../components/sections/Events';
import {ExploreSection} from '../components/sections/Explore';
import {FooterSection} from '../components/sections/Footer';
import {GallerySection} from '../components/sections/Gallery';
import {PosterSection} from '../components/sections/Poster';
import {imagesData} from '../constants/sliderImagesData';
import {EmailApiProvider} from '../utils/emailApi';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The governance ring at DAO is a great opportunity to become part of a decentralized community, make important decisions and contribute to the development of DAO.">
      <script
        defer
        async
        src="https://megatix.in.th/js/widgets/megatix.js"></script>
      <EmailApiProvider>
        <main>
          <WelcomeSection sliderImages={imagesData} />
          {/* <AboutSection /> */}
          <ExploreSection />
          <PosterSection />
          <EventsSection />
          <GallerySection />
          <FooterSection />
          <EmailFormSection />
        </main>
      </EmailApiProvider>
    </Layout>
  );
}
