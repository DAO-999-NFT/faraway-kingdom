import React from 'react';

import LargePoster from 'img/largePoster.svg';

export function PosterSection() {
  return (
    <section className="bg-white overflow-hidden">
      <LargePoster width="115%" height="100%" className="translate-x-[-5%]" />
    </section>
  );
}
