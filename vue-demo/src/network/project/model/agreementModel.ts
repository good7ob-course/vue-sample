//获取协议列表时的参数约束
export interface agreementParamsEntity {
  id?: number;
  idsList?: Array<number>;
  keyword?: string;
  pageSize?: number;
  pageNum?: number;
  content?: string;
  scheduleReport?: string;
  status?: number;
  title?: string;
  type?: number;
}

//增加协议仓库时需要的参数约束规范
export interface agreementEntity {
  projectName?: string;
  secondSignatureDate?: string | number;
  id?: number;
  report?: string;
  frequency?: string;
  title: string;
  content: string;
  scheduleReport?: string;
  agreementPeriodEnd?: string;
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  cycle?: string;
  agreementPeriodStartYear?: string | number;
  agreementPeriodStartMonth?: string | number;
  agreementPeriodStartDay?: string | number;
  agreementPeriodStartHour?: string | number;
  agreementPeriodYear?: string | number;
  agreementPeriodMonth?: string | number;
  agreementPeriodDay?: string | number;
  agreementPeriodHour?: string | number;
}
export interface agreeParams {
  report?: string;
  year?: number;
  id?: string;
  month?: number;
  day?: number;
  hour?: number;
  frequency?: number | undefined;
  title?: string;
  content?: string;
  scheduleReport?: string;
  cycleStart?: string;
  cycle?: string;
  agreementPeriodStart?: string;
  agreementPeriodEnd?: string;
}
export interface agreementResponse {
  id?: number;
  name?: string;
  phone?: string;
  comment?: string;
  veriycode?: string;
  status?: number;
  finishOff?: number;
  type?: number;
  userId: number;
}

export interface agreementListEnity {
  id: number;
  isSign: string;
  title: string;
  cycleStart?: string;
  scheduleReport?: string;
  cycle?: number;
  createTime: string;
  createId: number;
  content?: string;
  updateTime?: string;
  agreementPeriodStart?: string;
  agreementPeriodEnd?: string;
}

export interface aggrementSign {
  ownerSignature?: string;
  projectAgreementId: number | string;
  secondSignature?: string;
  secondSignatureResult: number;
}

export interface ProjectAgreementDto {
  /**协议状态 1.正常-(双方已签署,且当前无一方发起终止或仲裁) 2.甲方 单方面终止 3.乙方 单方面终止 4.双方 取消协议 5.待仲裁(甲方申请仲裁) 6.待仲裁(乙方申请仲裁) 7.待仲裁(双方申请仲裁) 8.仲裁结束 */
  agreementStatus: number;
  applyId: number;
  applyUserName: string;
  rejectReason: string;
  content: string;
  id: number | string;
  code: string;
  /**变更状态 0没有变更 1发起变更 2同意变更 3拒绝变更 */
  changeStatus?: number | string;
  name: string;
  ownerId: number;
  ownerSignatureDate: number | string;
  ownerUserName: string;
  projectId: number;
  projectName: string;
  secondSignatureDate: number | string;
  /** 签署结果 0乙方未签署 1.甲方编辑中 2.待乙方签署 3.待甲方签署 4.双方已签署 */
  signatureResult: number;
  /** 签署状态 1甲方编辑中 2待乙方签署 3待甲方签署 4双方已签署 */
  signatureStatus: number;
}

export interface AgreementSignatureForm {
  ownerSignature: string;
  projectAgreementId: number;
  rejectReason: string;
  secondSignature: string;
  /** 乙方协议签署结果 1-同意，2-拒绝 */
  secondSignatureResult: number;
}

export interface AgreementChangeForm {
  id: number;
  /** 变更发起方:1甲方,2乙方 */
  startPart: number;
  startReason: string;
}

export interface AgreementChangeConfirmForm {
  id: number;
  rejectReason: string;
  /**项目协议变更确认状态 变更状态:1发起,2同意,3拒绝 */
  startStatus: number;
}

export interface TProjectAgreementHistoryDto {
  id: number;
  no: number;
  projectAgreementDTO: ProjectAgreementDto;
  projectAgreementId: number;
  projectAgreementSnapshot: string;
  startPart: number;
  startReason: string;
  startRejectReason: string;
  startStatus: number;
  startTime: number | string;
}
