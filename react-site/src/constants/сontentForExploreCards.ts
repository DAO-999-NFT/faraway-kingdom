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
    content: `Коллекция стала праздником электронной музыки, и было сказано, что обладание NFT принесет коллекционеру удачу, землю в метавселенной Тридевятого Царство и управления в DAO 999 NFT  в придачу.`,
  },
  {
    id: 'content-2',
    img: contentImage2,
    content: `И вот, было объявлено, что 8 марта в волшебном королевстве, в клубе Bluerama, начнется официальный аукцион коллекции, куда мы приглашаем вас присоединиться к нам на тропическом острове Панган и погрузиться в это с головой за белым кроликом домой.`,
  },
  {
    id: 'content-3',
    img: contentImage3,
    content: `Итак, было сказано, что любой, кому посчастливится посетить это мероприятие, получит шанс стать первым обладателем произведения цифрового искусства и ощутить магию электронной музыки.`,
  },
  {
    id: 'content-4',
    img: contentImage4,
    content: `Добро пожаловать в заколдованный мир метавселенной - Тридевятое Царство, где каждой частью метавселенной правит легендарная королева, изображенная на NFT.`,
  },
  {
    id: 'content-5',
    img: contentImage5,
    content: `Присоединяйтесь к нам, пока мы воплощаем в жизнь заколдованное королевство метавселенной Тридевятого Царства и становимся частью его богатой династии клубных культурных деятелей.`,
  },
];
