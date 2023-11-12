export interface TProjectArbitration {
  amount: number;
  applyUser?: string;
  content: any;
  createDate?: string;
  editContent?: string;
  fromId?: number;
  fromMoney?: number;
  fromName?: string;
  fromPayAmount?: number;
  fromRate?: number;
  id?: number | string;
  itemCode: string;
  itemId: number;
  itemName: string;
  projectId: number;
  projectName: string;
  reply?: string;
  result?: string;
  /** 状态:1=已申请，2=已撤销，3=已仲裁 */
  state?: 1 | 2 | 3;
  toId?: number;
  toMoney?: number;
  toName?: string;
  toPayAmount?: number;
  toRate?: number;
  /** 类型:1=协议分歧，2=订单分歧 */
  type: 1 | 2;
  updateDate?: string;
}
export interface editContentParams {
  content?: string;
  editContent?: string;
}
export interface ArbitrationListRequest {
  pageNum: number;
  pageSize: number;
  fromName: string;
  isAdmin: boolean;
  itemCode: any;
  /** 类型:1=协议分歧，2=订单分歧 */
  type: 1 | 2;
}
