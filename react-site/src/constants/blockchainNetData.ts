import etheriumLogo from 'img/blockchain-images/ethereum.svg';
import polygonLogo from 'img/blockchain-images/polygon.svg';

export const BlockchainNetData = {
  polygon: {
    logo: polygonLogo,
    shortCoinName: 'MATIC',
  },
  mumbai: {
    logo: polygonLogo,
    shortCoinName: 'MATIC',
  },
  etherium: {
    logo: etheriumLogo,
    shortCoinName: 'ETH',
  },
};

export type BlockchainNetworks = keyof typeof BlockchainNetData;
