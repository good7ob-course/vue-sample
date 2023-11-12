import service from "@/network/request";
import {
  ProjectOrderDeitalForm,
  ProjectOrderAddForm,
  ConfirmOrderPart,
  ProjectOrderPayForm,
  ProjectOrderApproveForm,
  ProjectOrderApproveDetailDTO,
  ProjectOrderApprovePartyForm,
  ProjectOrderProgressDTO,
  ProjectOrderStartChangeForm,
  ProjectOrderChangeHistoryDTO,
  ProjectOrderChangeConfirmForm,
  createOrder,
} from "./model/orderModel";
import { BaseTResp } from "../model/baseModel";

export function requestProjectOrderSave(data: ProjectOrderAddForm) {
  return service.request({
    url: "market/project/order/save",
    data: data,
    method: "post",
  });
}

export function requestProjectOrderSubmit(data: ProjectOrderAddForm) {
  return service.request({
    url: "market/project/order/submit",
    data: data,
    method: "post",
  });
}

export function requestProjectOrderSign(id: number, partType: 1 | 2) {
  return service.request({
    url: "market/project/order/sign",
    data: { id, partType, signUrl: "" },
    method: "post",
  });
}

export function requestProjectOrderRejectSign(id: number, rejectReason: string) {
  return service.request({
    url: "market/project/order/rejectSign",
    data: { id, rejectReason },
    method: "post",
  });
}

export function requestProjectOrderPay(data: ProjectOrderPayForm) {
  return service.request({
    url: "market/project/order/goPay",
    data,
    method: "post",
  });
}

export function requestProjectOrderPayInfoA(projectOrderId: number) {
  return service.request<BaseTResp<ConfirmOrderPart>>({
    url: "market/project/order/getConfirmOrderPartA",
    params: { projectOrderId },
    method: "get",
  });
}

export function requestProjectOrderPayInfoB(projectOrderId: number) {
  return service.request<BaseTResp<ConfirmOrderPart>>({
    url: "market/project/order/getConfirmOrderPartB",
    params: { projectOrderId },
    method: "get",
  });
}

export function requestProjectOrderApproveDetail(orderId: number) {
  return service.request<BaseTResp<ProjectOrderApproveDetailDTO[]>>({
    url: "market/project/approve/detail",
    params: { orderId },
    method: "get",
  });
}

export function requestProjectOrderApproveSubmit(data: ProjectOrderApproveForm) {
  return service.request({
    url: "market/project/approve/submit",
    data,
    method: "post",
  });
}

export function requestProjectOrderApprovePartyA(data: ProjectOrderApprovePartyForm) {
  return service.request({
    url: "market/project/approve/firstPartyHandle",
    data,
    method: "post",
  });
}

export function requestProjectOrderApprovePartyB(data: ProjectOrderApprovePartyForm) {
  return service.request({
    url: "market/project/approve/secondPartyHandle",
    data,
    method: "post",
  });
}

export function requestProjectOrderProgressList(orderId: number) {
  return service.request<BaseTResp<ProjectOrderProgressDTO[]>>({
    url: "market/project/progress/list",
    params: { orderId },
    method: "get",
  });
}

export function requestProjectOrderProgressSubmit(data: ProjectOrderProgressDTO) {
  return service.request({
    url: "market/project/progress/submit",
    data,
    method: "post",
  });
}

export function requestProjectOrderConfirmPay(projectOrderId: number) {
  return service.request({
    url: "pay/project/order/confirmPay",
    params: { projectOrderId },
    method: "post",
  });
}

export function requestProjectOrderStartChange(data: ProjectOrderStartChangeForm) {
  return service.request({
    url: "market/project/order/startChange",
    data,
    method: "post",
  });
}
export function requestProjectOrderChangeConfirm(data: ProjectOrderChangeConfirmForm) {
  return service.request({
    url: "market/project/order/changeConfirm",
    data,
    method: "post",
  });
}

export function requestProjectOrderChangeHistory(projectOrderId: number) {
  return service.request<BaseTResp<ProjectOrderChangeHistoryDTO[]>>({
    url: "market/project/order/getChangeHistory",
    params: { projectOrderId },
    method: "get",
  });
}

/**
 * 查询详情
 * @param id ID
 * @returns Promise<>
 */
export function requestProjectOrderDetail(id: number) {
  return service.request<BaseTResp<ProjectOrderDeitalForm>>({
    url: "market/project/order/detail",
    params: { id },
    method: "get",
  });
}

export function requestCreateOrder(data: createOrder) {
  return service.request({
    url: "market/project/order/createOrder",
    data,
    method: "post",
  });
}

export function requestgoPay(data: createOrder) {
  return service.request({
    url: "market/project/order/goPay",
    data,
    method: "post",
  });
}

export function requestpayStatus(data: createOrder) {
  return service.request({
    url: "market/project/order/payStatus",
    data,
    method: "post",
  });
}
