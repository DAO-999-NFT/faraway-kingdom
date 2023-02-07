import { FileWithPreview } from "src/types";
import { Filelike, Web3File, Web3Storage } from "web3.storage";

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

  async getListOfNfts() {
    const uploads = [];
    for await (const item of this.client.list()) {
      uploads.push(item);
    }
    return uploads;
  }
  /**
   * @return file cid, not a files catalog
   */
  async getNftByCID(cid: string) {
    const response = await this.client.get(cid);
    if (!response || !response.ok) {
      throw new Error("failed to get nft");
    }

    let result: Web3File | undefined;
    const files = await response.files();
    for (const file of files) {
      result = file;
    }

    return result;
  }
}

export const nft = new Nft();
