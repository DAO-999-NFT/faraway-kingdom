import Head from "next/head";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { FileWithPreview, onDragType } from "src/types";
import Image from "next/image";
import { nft } from "src/services/nft";

export default function Home() {
  const [image, setImage] = useState<FileWithPreview>();

  const onDrop = useCallback<onDragType>((acceptedFiles) => {
    if (acceptedFiles[0].type.startsWith("image/")) {
      setImage(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmitNft = () => {
    image && nft.createNft(image);
  };
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <input {...getInputProps()} style={{ height: 50, width: 400 }} />
        <div
          {...getRootProps()}
          style={{ height: 200, width: 200, backgroundColor: "red" }}
        />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
        {image && (
          <>
            <button onClick={onSubmitNft}>Create nft</button>
            <Image width={150} height={150} alt="none" src={image.preview} />
          </>
        )}
        <ul className="divide-y divide-gray-200">
          {people.map((person) => (
            <li key={person.email} className="py-4 flex">
              <Image
                height={100}
                width={100}
                className="h-10 w-10 rounded-full"
                src={person.image}
                alt=""
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {person.name}
                </p>
                <p className="text-sm text-gray-500">{person.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
