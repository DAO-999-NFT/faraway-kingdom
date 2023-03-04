import {translate} from '@docusaurus/Translate';

import contentImage1 from 'img/explore-images/contentImage1.png';
import contentImage2 from 'img/explore-images/contentImage2.png';
import contentImage3 from 'img/explore-images/contentImage3.png';
import contentImage4 from 'img/explore-images/contentImage4.png';
import contentImage5 from 'img/explore-images/contentImage5.png';

export type exploreContentsItemNames =
  | 'content-1'
  | 'content-2'
  | 'content-3'
  | 'content-4'
  | 'content-5';

export interface exploreContentsItem {
  id: exploreContentsItemNames;
  img: any;
  content: string;
}

export const exploreContents: exploreContentsItem[] = [
  {
    id: 'content-1',
    img: contentImage1,
    content: translate({id: 'explore card 1'}),
  },
  {
    id: 'content-2',
    img: contentImage2,
    content: translate({id: 'explore card 2'}),
  },
  {
    id: 'content-3',
    img: contentImage3,
    content: translate({id: 'explore card 3'}),
  },
  {
    id: 'content-4',
    img: contentImage4,
    content: translate({id: 'explore card 4'}),
  },
  {
    id: 'content-5',
    img: contentImage5,
    content: translate({id: 'explore card 5'}),
  },
];
