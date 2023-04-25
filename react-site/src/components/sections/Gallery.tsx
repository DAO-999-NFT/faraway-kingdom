import React from 'react';

import {imagesData} from '@site/src/constants/sliderData';
import SimpleImageSlider from 'react-simple-image-slider';

export function GallerySection() {
  return (
    <>
      <section className="bg-white">
        <div className="content-container py-[1.5em] self-center">
          <SimpleImageSlider
            width={950}
            height={600}
            showBullets={false}
            showNavs={true}
            images={imagesData}
            style={{alignSelf: 'center', maxWidth: '90%'}}
          />
        </div>
      </section>
    </>
  );
}
