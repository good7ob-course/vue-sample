import { UserEntity } from "@/network/project/model/projectModel";

export interface IProjectsParams {
  id?: number;
  keyword?: string;
  sourceId?: number | string;
  sourceName?: string;
  status?: number | string;
  activeDropName?: string;
  pageNum: number;
  pageSize: number;
  start?: string;
  end?: string;
}

export interface IDevelopParams {
  pageNum?: number;
  pageSize?: number;
  skillName?: string;
  authStatus?: string;
}

export interface IMallOrderDetail {
  id: number;
  type: number;
}

export interface IUpdateOrderParams {
  id: number;
  status: number;
}

export interface ICancelOrderParams {
  id: number;
  cancelReason?: string;
}

export interface IConfirmOrderParams {
  id: string;
  rejectReason: string;
  status: number;
}

export interface IUserProjectParams {
  userId: number;
  freeTime: number;
  isWork: number;
  userWorkProjectList: Array<{
    workId?: number;
    id?: number;
    name?: string;
    type?: string;
    projectTime?: string[];
    toDate?: boolean;
    industry?: string | string[];
    projectDesc?: string;
    projectStartTime?: Date;
    projectEndTime?: Date;
    workDesc?: string;
  }>;
  weekdayEndTime: string;
  weekdayStartTime: string;
  weekendEndTime: string;
  weekendStartTime: string;
  workTime: string[];
  weekTime: string[];
  workChecked: boolean;
  weekChecked: boolean;
}

export interface IUserBaseParams {
  idName: string;
  idCard: string;
  cardType?: string;
}

export interface IProjectOrderParams {
  id?: number;
  sourceName?: string;
  projectTotalFee?: number;
  payType?: number | string;
  payFee?: number;
  payeeName?: string;
  signDate?: Date | null;
  projectFinishDate?: Date | null;
  contractTitle?: string;
  treaty?: string;
  status?: number;
}

export type UserResponse = {
  data: UserEntity;
};

export interface IBirefParams {
  id?: number;
  advantages: string;
  projectJson: string;
}

export interface ISkillParams {
  id?: number;
  skillFile?: string;
  skillLevel: number;
  skillName: string;
}

export interface IRoleParams {
  developInfoId: string;
  roleType: number | string;
}

export interface IRoleType {
  labelType?: number;
  title?: string;
  labelValue?: string;
  pageSize?: number;
  pageNum?: number;
}

export interface ICodeParams {
  countryCode: number;
  phoneNumber: string;
  type: number;
}

export interface IBindMobileParams {
  countryCode: number;
  phoneNumber: string;
  type: number;
  code: string;
}

export interface IDemandDeliverableApproveParams {
  id: number;
  demandId: number;
  status: number;
  content: string;
  rejectReason: string;
  processorId: number;
}
export interface createUser {
  awsSub: string;
  email: string;
  inviteCode: any;
  nickName: string;
}
