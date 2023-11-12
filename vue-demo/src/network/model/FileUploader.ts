import { BaseResp } from "@/network/model/baseModel";
import service from "@/network/request";

interface FileUploaderResponseData {
  id: number;
  state: number;
  createdDate: null;
  updatedDate: null;
  createdId: number;
  updatedId: null;
  sortId: null;
  fileSize: number;
  fileType: string;
  fileCode: string;
  fileName: string;
  uploadClient: string;
  fileUrl: null;
  fileCloud: string;
  thumbnailUrl: null;
  thumbnailCloud: string;
}

export type FileUploaderResponse = { data: FileUploaderResponseData } & BaseResp;

export async function requestFileUpload(file: File) {
  const params = new FormData();
  params.append("file", file);
  return await service
    .request({
      url: "/base/file/upload",
      method: "post",
      headers: { client: "web", "Content-Type": "multipart/form-data" },
      data: params,
    })
    .then((resp: FileUploaderResponse) => {
      return resp.data.fileCloud;
    })
    .catch((e) => {
      console.log(`e`, e);
      return "";
    });
}
