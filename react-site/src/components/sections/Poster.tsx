import React from 'react';

import largePoster from 'img/largePoster.jpg';

export function PosterSection() {
  return (
    <section className="bg-white overflow-hidden">
      <img src={largePoster} className="w-full" />
    </section>
  );
}
