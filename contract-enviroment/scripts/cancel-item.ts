import {ethers} from 'hardhat';

const TOKEN_ID = 0;

async function mintAndList() {
  const nftMarketplace = await ethers.getContract('NftMarketplace');
  const basicNft = await ethers.getContract('BasicNft');
  const tx = await nftMarketplace.cancelListing(basicNft.address, TOKEN_ID);
  await tx.wait(1);
  console.log('NFT Canceled!');
}

mintAndList()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
