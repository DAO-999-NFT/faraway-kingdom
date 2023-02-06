import { FileWithPreview } from "src/types";
import { Filelike, Web3Storage } from "web3.storage";

class Nft {
  client: Web3Storage;

  constructor() {
    this.client = new Web3Storage({
      token: process.env.NEXT_PUBLIC_IPFS_API_KEY,
    });
  }
  async createNft(file: FileWithPreview) {
    const iterator = (
      [
        {
          name: file.name,
          stream: () => file.stream(),
        },
      ] as Filelike[]
    )[Symbol.iterator]();

    const rootCid = await this.client.put(iterator, {
      name: file.name,
    });
    return rootCid;
  }
}

export const nft = new Nft();
