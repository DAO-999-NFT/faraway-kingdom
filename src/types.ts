import { DropEvent, FileRejection } from "react-dropzone";

export type onDragType = <T extends File>(
  acceptedFiles: T[],
  fileRejections: FileRejection[],
  event: DropEvent
) => void;

export type FileWithPreview = File & { preview: string };
