import etheriumLogo from 'public/blockchain-images/ethereum.svg';
import polygonLogo from 'public/blockchain-images/polygon.svg';

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
