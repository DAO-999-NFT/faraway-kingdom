export enum PATHS_NAMES {
  home = '',
  sellAsset = 'sell-asset',
  digitalAssets = 'digital-assets',
  'create-nft' = 'create-nft',
}

export const MAIN_NAV_PATHS = [
  {
    text: 'Home',
    name: PATHS_NAMES.home,
  },
  {
    text: 'Sell Digital Asset',
    name: PATHS_NAMES.sellAsset,
  },
  {
    text: 'My Digital Assets',
    name: PATHS_NAMES.digitalAssets,
  },
  {
    text: 'Creator Dashboard',
    name: PATHS_NAMES['create-nft'],
  },
];
