import {StaticImageData} from 'next/image';

import contentImage1 from 'public/explore-images/contentImage1.png';
import contentImage2 from 'public/explore-images/contentImage2.png';
import contentImage3 from 'public/explore-images/contentImage3.png';
import contentImage4 from 'public/explore-images/contentImage4.png';
import contentImage5 from 'public/explore-images/contentImage5.png';

export type exploreContentsItemNames =
  | 'content-1'
  | 'content-2'
  | 'content-3'
  | 'content-4'
  | 'content-5';

export interface exploreContentsItem {
  id: exploreContentsItemNames;
  img: string | StaticImageData;
  content: JSX.Element;
}

export const exploreContents: exploreContentsItem[] = [
  {
    id: 'content-1',
    img: contentImage1,
    content: (
      <>
        Коллекция стала праздником электронной музыки, и было сказано, что
        обладание NFT принесет коллекционеру{' '}
        <span className="font-neucha text-white">удачу</span>,{' '}
        <span className="font-neucha text-white">землю</span> в метавселенной
        999 и <span className="font-neucha text-white">токен</span> управления в
        Царстве Тридевятом DAO в придачу.
      </>
    ),
  },
  {
    id: 'content-2',
    img: contentImage2,
    content: (
      <>
        И вот, было объявлено, что{' '}
        <span className="font-neucha text-white">8 марта</span> в волшебном
        королевстве, в{' '}
        <span className="font-neucha text-white">клубе Культ</span>, начнется{' '}
        <span className="font-neucha text-white">официальный аукцион</span>{' '}
        коллекции, куда мы приглашаем вас присоединиться к нам на тропическом
        острове <span className="font-neucha text-white">Панган</span> и
        погрузиться в это с головой за белым кроликом домой.
      </>
    ),
  },
  {
    id: 'content-3',
    img: contentImage3,
    content: (
      <>
        Итак, было сказано, что любой, кому посчастливится посетить это
        мероприятие, получит{' '}
        <span className="font-neucha text-white">
          шанс стать первым обладателем произведения цифрового искусства
        </span>{' '}
        и ощутить магию электронной музыки.
      </>
    ),
  },
  {
    id: 'content-4',
    img: contentImage4,
    content: (
      <>
        Добро пожаловать в заколдованный мир метавселенной -{' '}
        <span className="font-neucha text-white">Тридевятое Царство</span>, где
        каждой частью метавселенной правит{' '}
        <span className="font-neucha text-white">
          легендарная королева, изображенная на NFT.
        </span>
      </>
    ),
  },
  {
    id: 'content-5',
    img: contentImage5,
    content: (
      <>
        Присоединяйтесь к нам, пока мы воплощаем в жизнь заколдованное
        королевство метавселенной Тридевятого Царства и становимся частью его
        богатой династии клубных культурных деятелей.
      </>
    ),
  },
];
