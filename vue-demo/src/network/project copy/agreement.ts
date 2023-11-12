import service from "@/network/request";
import { BaseTResp } from "../model/baseModel";
import {
  AgreementChangeConfirmForm,
  AgreementChangeForm,
  AgreementSignatureForm,
  ProjectAgreementDto,
  TProjectAgreementHistoryDto,
} from "./model/agreementModel";

/**
 * 获取项目协议详情
 * @param id 项目协议ID
 * @returns Promise<BaseTResp<ProjectAgreementDto>>
 */
export function requestProjectAgreeDetail(id: number) {
  return service.request<BaseTResp<ProjectAgreementDto>>({
    url: "market/project/agree/detail",
    params: { id },
    method: "get",
  });
}

/**
 * 乙方签章
 * @param data AgreementSignatureForm
 * @returns
 */
export function requestProjectAgreeApplySignature(data: AgreementSignatureForm) {
  return service.request({
    url: "market/project/agree/apply_signature",
    data,
    method: "put",
  });
}

/**
 * 甲方签章
 * @param data AgreementSignatureForm
 * @returns
 */
export function requestProjectAgreeOwnerSignature(data: AgreementSignatureForm) {
  return service.request({
    url: "market/project/agree/owner_signature",
    data,
    method: "put",
  });
}

/**
 * 甲方变更协议后提交
 * @param data Partial<ProjectAgreementDto>
 * @returns
 */
export function requestProjectUpdateAgree(data: Partial<ProjectAgreementDto>) {
  return service.request({
    url: "market/project/agree/update_agree",
    data,
    method: "put",
  });
}

/**
 * 发起变更
 * @param data AgreementChangeForm
 * @returns
 */
export function requestProjectAgreeStartChange(data: AgreementChangeForm) {
  return service.request({
    url: "market/project/agree/startChange",
    data,
    method: "post",
  });
}

/**
 * 发起变更
 * @param data AgreementChangeConfirmForm
 * @returns
 */
export function requestProjectAgreeChangeConfirm(data: AgreementChangeConfirmForm) {
  return service.request({
    url: "market/project/agree/changeConfirm",
    data,
    method: "post",
  });
}

/**
 * 查询变更历史
 * @param projectOrderId 订单ID
 * @returns
 */
export function requestProjectAgreeChangeHistory(projectOrderId: number) {
  return service.request<BaseTResp<TProjectAgreementHistoryDto[]>>({
    url: "market/project/agree/getChangeHistory",
    params: { projectOrderId },
    method: "get",
  });
}
