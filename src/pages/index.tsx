import { Navbar } from "src/components";
import { About, Hero } from "src/sections";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
      </div>
      {/* <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer /> */}
    </div>
  );
}

// import Head from "next/head";
// import { useDropzone } from "react-dropzone";
// import { useCallback, useState } from "react";
// import { FileWithPreview, onDragType } from "src/types";
// import Image from "next/image";
// import { nft } from "src/services/nft";
// import { Upload, Web3File } from "web3.storage";

// export default function Home() {
//   const [image, setImage] = useState<FileWithPreview>();
//   const [nfts, setNfts] = useState<Upload[]>([]);
//   const [oneNft, setOneNft] = useState<Web3File>();

//   const onDrop = useCallback<onDragType>((acceptedFiles) => {
//     if (acceptedFiles[0].type.startsWith("image/")) {
//       setImage(
//         Object.assign(acceptedFiles[0], {
//           preview: URL.createObjectURL(acceptedFiles[0]),
//         })
//       );
//     }
//   }, []);
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const onSubmitNft = () => {
//     image && nft.createNft(image);
//   };
//   const fetchNfts = async () => {
//     setNfts(await nft.getListOfNfts());
//   };
//   const getOneNft = async () => {
//     const result = await nft.getNftByCID(
//       "bafybeicdpp3pnef37at456xrxlqa64whkgreipvo6cl2aoz63nolme5zji"
//     );
//     setOneNft(result);
//   };

//   return (
//     <>
//       <Head>
//         <title>Home</title>
//       </Head>
//       <main>
//         <input {...getInputProps()} style={{ height: 50, width: 400 }} />
//         <div
//           {...getRootProps()}
//           style={{ height: 200, width: 200, backgroundColor: "red" }}
//         />
//         {isDragActive ? (
//           <p>Drop the files here ...</p>
//         ) : (
//           <p>Drag n drop some files here, or click to select files</p>
//         )}
//         {image && (
//           <>
//             <button
//               type="button"
//               className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
//               onClick={onSubmitNft}
//             >
//               Create nft
//             </button>
//             <Image width={150} height={150} alt="none" src={image.preview} />
//           </>
//         )}
//         <button
//           type="button"
//           className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
//           onClick={getOneNft}
//         >
//           Fetch one nft
//         </button>
//         {oneNft && (
//           <div className="py-4 flex">
//             <Image
//               height={100}
//               width={100}
//               className="h-10 w-10 rounded"
//               src={`https://ipfs.io/ipfs/${oneNft.cid}`}
//               alt=""
//             />
//             <div className="ml-3">
//               <p className="text-sm font-medium text-gray-900">{oneNft.name}</p>
//               <p className="text-sm text-gray-500">{oneNft.cid}</p>
//             </div>
//           </div>
//         )}
//         <button
//           type="button"
//           className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
//           onClick={fetchNfts}
//         >
//           Fetch all nfts
//         </button>
//         <ul className="divide-y divide-gray-200">
//           {nfts.map((nft) => (
//             <li key={nft.cid} className="py-4 flex">
//               <Image
//                 height={100}
//                 width={100}
//                 className="h-10 w-10 rounded"
//                 src={`https://ipfs.io/ipfs/${nft.cid}/${nft.name}`}
//                 alt=""
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">{nft.name}</p>
//                 <p className="text-sm text-gray-500">{nft.cid}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// }
