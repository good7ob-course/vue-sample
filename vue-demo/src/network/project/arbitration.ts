import service from "@/network/request";
import { BasePageResp, BaseResp } from "../model/baseModel";
import { ArbitrationListRequest, TProjectArbitration } from "./model/arbitrationModel";

/**
 * 申请仲裁
 * @param data TProjectArbitration
 * @returns BaseResp
 */
export function requestProjectArbitrationSubmit(data: TProjectArbitration) {
  return service.request<BaseResp>({
    url: "market/project/arbitration/submit",
    data,
    method: "post",
  });
}

/**
 * 仲裁列表
 * @param data ArbitrationListRequest
 * @returns <BasePageResp<TProjectArbitration>>
 */
export function requestProjectArbitrationList(data: ArbitrationListRequest) {
  return service.request<BasePageResp<TProjectArbitration>>({
    url: "market/project/arbitration/list",
    data,
    method: "post",
  });
}

/**
 * 撤回仲裁
 * @param id 仲裁记录ID
 * @returns BaseResp
 */
export function requestProjectArbitrationCancel(id: number) {
  return service.request<BaseResp>({
    url: "market/project/arbitration/cancel",
    params: { id },
    method: "get",
  });
}

/**
 * 修改仲裁
 * @param data TProjectArbitration
 * @returns BaseResp
 */
export function requestProjectArbitrationUpd(data: TProjectArbitration) {
  return service.request<BaseResp>({
    url: "market/project/arbitration/updateContent",
    data,
    method: "post",
  });
}

/**
 * 提交回复
 * @param id 仲裁ID
 * @param reply 回复内容
 * @returns BaseResp
 */
export function requestProjectArbitrationReply(id: number, reply: string) {
  return service.request<BaseResp>({
    url: "market/project/arbitration/reply",
    data: { id, reply },
    method: "post",
  });
}
