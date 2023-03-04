import {translate} from '@docusaurus/Translate';

import Bali from 'img/roadmap/Bali.jpg';
import Dubai from 'img/roadmap/Dubai.jpg';
import Ibica from 'img/roadmap/Ibica.jpg';
import India from 'img/roadmap/India.jpg';
import Pangan from 'img/roadmap/Pangan.jpg';
import Tulum from 'img/roadmap/Tulum.jpg';

export const roadmapData = [
  {
    name: translate({id: 'phangan'}),
    img: Pangan,
  },
  {
    name: translate({id: 'bali'}),
    img: Bali,
  },
  {
    name: translate({id: 'india'}),
    img: India,
  },
  {
    name: translate({id: 'dubai'}),
    img: Dubai,
  },
  {
    name: translate({id: 'ibiza'}),
    img: Ibica,
  },
  {
    name: translate({id: 'tulum'}),
    img: Tulum,
  },
];
