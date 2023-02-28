import React from 'react';

import ApolloLogo from 'img/technology-icons/apolloLogo.svg';
import GitHubLogo from 'img/technology-icons/gitHubLogo.svg';
import GraphLogo from 'img/technology-icons/graphLogo.svg';
import PolygonLogo from 'img/technology-icons/polygonLogo.svg';
import ReactLogo from 'img/technology-icons/reactLogo.svg';
import TypescriptLogo from 'img/technology-icons/typescriptLogo.svg';

export function FooterSection() {
  return (
    <div className="bg-gradient-4">
      <div className="content-container py-[1.5em] text-content">
        <h3 className="text-white pb-[1em]">Technology Stack</h3>
        <div className="flex flex-row flex-wrap gap-[1.25em] justify-between gap-y-[1.25em] text-white">
          <ApolloLogo className="w-[4em]" />
          <GitHubLogo className="w-[4em]" />
          <GraphLogo className="w-[4em]" />
          <PolygonLogo className="w-[4em]" />
          <ReactLogo className="w-[4em]" />
          <TypescriptLogo className="w-[4em]" />
        </div>
        <h3 className="text-white mt-[1.7em]">Контакты</h3>
      </div>
    </div>
  );
}
