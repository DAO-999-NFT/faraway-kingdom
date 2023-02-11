import {ethers} from 'hardhat';

async function mintAndList() {
  const basicNft = await ethers.getContract('BasicNftTwo');
  console.log('Minting NFT...');
  const mintTx = await basicNft.mintNft();
  const mintTxReceipt = await mintTx.wait(1);
  console.log(
    `Minted tokenId ${mintTxReceipt.events[0].args.tokenId.toString()} from contract: ${
      basicNft.address
    }`,
  );
}

mintAndList()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
