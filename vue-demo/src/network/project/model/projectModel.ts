export interface ProjectParams {
  createId: number;
  createTime: string;
  deliverCycle: number;
  describe: string;
  id: number;
  isBargain: number;
  isDel: number;
  label: number;
  name: string;
  pageNum: number;
  pageSize: number;
  referenceWeb: string;
  require: string;
  role: number;
  roleField: number;
  roleType: number;
  status: number;
  type: string;
  updateId: number;
  updateTime: string;
  userId: number;
}

export interface ProjectListParams {
  pageNum: number;
  pageSize: number;
  userId?: number;
  startTime?: string;
  endTime?: string;
  normalLabel?: string | number;
  status?: string | number;
  statusList?: number[];
  developerType?: string | number;
  keyword?: string;
  sort?: string;
  orderField?: string;
}

export interface ProjectDynParams {
  pageNum: number;
  pageSize: number;
  projectId: number;
}

export interface UserEntity {
  avatar: string;
  awsSub: string;
  birthday: string | number;
  browser: string;
  commentStatus: number;
  hasCooperation: number;
  createdDate: number;
  createdId: number;
  email: string;
  gender: number;
  id: number;
  idName?: string;
  lastLoginIp: string;
  lastLoginTime: number;
  loginCount: number;
  mobile: string;
  nickName: string;
  occupation: string;
  os: string;
  passWord: string;
  qqNumber: string;
  sortId: number;
  source: string;
  startEmailNotification: number;
  state: number;
  status: number;
  summary: string;
  updatedDate: number;
  updatedId: number;
  userName: string;
  userTag: number;
  uuid: number;
  validCode: string;
  wechatOpenId?: string;
  skill?: string;
  address?: string;
  role?: any;
  weChat: string;
}

export interface ProjectEntity {
  applyNums: number;
  budget: number;
  createDate: number;
  verifyTime: number;
  createTime?: any;
  createId: number;
  createName: string;
  duration: number;
  deliverCycle: number;
  content: string;
  describes: string;
  id: number;
  isBargain: number;
  isDel: number;
  label: number;
  title: string;
  name: string;
  referenceWeb: string;
  requires: string;
  role: number;
  roleField: number;
  roleType: number;
  status: number;
  statusName: string;
  type: string;
  views: number;
  updateDate: number;
  updateId: number;
  updateName: string;
  createUserInfo?: any;
  developerTypeList?: string[];
  normalLabelList?: string[];
  applyList?: ApplyProjectEntity[];
  lastApplyUser?: any;
  myApply?: ApplyProjectEntity;
  applyStatus?: number;
}

export interface UserWorkPrjectEntity {
  createDate: number;
  id: number;
  industry: string | string[];
  name: string;
  projectDesc: string;
  projectEndTime: number;
  projectStartTime: number;
  type: number;
  updateDate: number;
  workId: number;
}

export interface UserCommentEntity {
  createdDate: string;
  updateDate: string;
  id: number;
  userId: number;
  score: number;
  projectId: number;
  projectName: string;
  content: string;
}

export interface ApplyProjectEntity {
  id: number;
  projectId: number;
  projectInfo?: ProjectEntity;
  applyUserInfo?: UserEntity;
  applyContent?: string;
  solutionPath?: Array<string> | string | Array<{ url: string; status?: string }>[];
  workProjectIds?: string | string[];
  applyUserWorkPrjectList?: UserWorkPrjectEntity[];
  // 状态0-待审核1-已通过2-已拒绝3-已取消
  status?: number;
  createDate?: number;
  opinion?: string;
}

export interface UserWorkProjectEntity {
  id: number;
  name: string;
  projectDesc: string;
}

export interface ProjectDynEntity {
  createDate: number | string;
  createId: number;
  createName: string;
  dyn: string;
  id: number;
  projectId: number;
  sortId: number;
  updateDate: number;
  updateId: number;
}
export interface proDetials {
  applyNums: number;
  finishDate: number;
  id: number;
  recruitNums: number;
  status: number;
  statusName: string;
  title: string;
}
export interface cancalOrder {
  isLoading: boolean;
  dialogFormVisible: boolean;
  tableData: any;
  counterPay: any;
  ownerPay: any;
}
