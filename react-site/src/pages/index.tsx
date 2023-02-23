import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Layout from "@theme/Layout";
import { mainSliderImages } from "@site/static/img/main-slider-images";
import { WelcomeSection } from "../components/sections/Welcome";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <WelcomeSection sliderImages={mainSliderImages} />
      </main>
    </Layout>
  );
}
