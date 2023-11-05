export interface ProjectOrder {
  aapproveCount?: number | string;
  apayStatus?: number | string;
  approveEndTime?: string;
  approveNeedHours?: number | string;
  approveStartTime?: string;
  blatestReportTime?: string;
  blatestSubmitApproveTime?: string;
  bpayStatus?: number | string;
  /**变更状态 0没有变更 1发起变更 2同意变更 3拒绝变更 */
  changeStatus?: number | string;
  code?: string;
  createId?: number | string;
  createTime?: string;
  criteria?: string;
  developType?: number | string;
  developValue?: string;
  feeRate?: number | string;
  id?: number | string;
  isNeed?: number | string;
  needBond?: number | string;
  partAId?: number | string;
  partAName?: string;
  partASignTime?: number | string;
  partASignUrl?: string;
  partBId?: number | string;
  partBName?: string;
  partBSignTime?: number | string;
  partBSignUrl?: string;
  platformFee?: number | string;
  projectId?: number | string;
  projectName?: string;
  rejectReason?: string;
  remarks?: string;
  /** 签署状态 1甲方编辑中 2待乙方签署 3待甲方签署 4双方已签署 */
  signStatus?: number | string;
  signStatusStr?: string;
  /** 订单状态 1.甲方编辑中 2.待乙方签署 3.待甲方签署 4.双方已签署 5.待甲方支付 6.待乙方支付 7.待双方支付 8.乙方开发中 9.待仲裁(甲方申请仲裁) 10.待仲裁(乙方申请仲裁) 11.待仲裁(双方申请仲裁) 12.待验收 13.待结算 14.已结算 */
  status?: number | string;
  statusStr?: string;
  totalFee?: number | string;
  updateId?: number | string;
  updateTime?: string;
  workContent?: string;
}

export interface ProjectOrderAgreement {
  addAgreement: string;
  createId: number | string;
  createTime: string;
  id: number | string;
  projectOrderId: number | string;
}

export interface ProjectOrderAttachList {
  attachUrl: string;
  createId: number | string;
  createTime: string;
  id: number | string;
  projectOrderId: number | string;
}

export interface ProjectOrderAddForm {
  projectOrder: ProjectOrder;
  projectOrderAgreementList: Array<ProjectOrderAgreement>;
  projectOrderAttachList: Array<ProjectOrderAttachList>;
}

export interface ProjectOrderDeitalForm {
  projectOrderDTO: ProjectOrder;
  projectOrderAgreementList: Array<ProjectOrderAgreement>;
  projectOrderAttachList: Array<ProjectOrderAttachList>;
}

export interface ProjectOrderChangeHistoryDTO {
  id: number;
  no: number;
  projectOrderDetailDTO: ProjectOrderDeitalForm;
  projectOrderId: number;
  projectOrderSnapshot: string;
  startPart: number;
  startReason: string;
  startRejectReason: string;
  startStatus: number;
  startTime: number;
}

export interface ConfirmOrderPart {
  availableToken: number;
  budgetFee: number;
  budgetFeeRate: number;
  code: string;
  partAId: number;
  partBId: number;
  platformFee: number;
  platformFeeRate: number;
  projectOrderId: number;
  totalFee: number;
}

export interface ProjectOrderPayForm {
  partType: number;
  projectOrderId: number;
  tokenAmount: number;
  totalAmount: number;
}

export interface ProjectOrderApproveForm {
  content: string;
  docPath: string | string[];
  orderId: number;
}

export interface ProjectOrderApprovePartyForm {
  projectApproveId: number;
  proposal: string;
  rejectReason: string;
  /** 状态，1:待验收,2:通过,3:驳回,4:结束 */
  state: 1 | 2 | 3 | 4;
}

export interface ProjectOrderStartChangeForm {
  id: number;
  startPart: number;
  startReason: string;
}

export interface ProjectOrderChangeConfirmForm {
  projectOrderId: number;
  rejectReason: string;
  startStatus: number;
}
export interface createOrder {
  partType?: number;
  payType?: number;
  projectOrderId?: number;
  tokenAmount?: number;
  totalAmount?: number;
  type?: number;
}
export interface ProjectOrderProgressDTO {
  id?: number;
  orderId: number;
  state?: number;
  docPath: string;
  content: string;
  reportDate?: number;
  reportUserId?: number;
  reportUserName?: string;
  updateDate?: number;
  updateUserId?: number;
  updateUserName?: string;
}

export interface ProjectOrderApprove {
  id: number;
  state: number;
  orderId: number;
  docPath: string;
  content: string;
  firstSubmitTime: number;
  lastApproveTime: number;
  createDate: number;
  createUserId: number;
  createUserName: string;
  updateDate: number;
  updateUserId: number;
  updateUserName: string;
}

export interface ProjectOrderApproveList {
  id: number;
  state: number;
  type: number;
  projectApproveId: number;
  orderId: number;
  submitTime: number;
  approveTime: number;
  dealTime: null;
  rejectReason: null;
  proposal: null;
  createDate: number;
  createUserId: number;
  createUserName: string;
  updateDate: number;
  updateUserId: number;
  updateUserName: string;
}

export interface ProjectOrderApproveDetailDTO {
  projectApprove: ProjectOrderApprove;
  projectApproveList: Array<ProjectOrderApproveList>;
}
