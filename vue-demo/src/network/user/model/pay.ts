export interface IPayListParams {
  userId?: number;
  pageSize: number;
  pageNum: number;
}

export interface IPayPasswordParams {
  password: string;
  code: string;
}
export interface accountDetailsParams {
  keyword: string;
  tradeType: string;
  fromChannel: string;
  accountType: any;
  toChannel: string;
  status?: number | string; //支付状态 0 待审核 1 待执行 2 完成 3 拒绝/失败/取消
  start: string; //example: 2023-03-12 15:36:00 开始时间
  end: string; //example: 2023-03-12 15:36:00 结束时间
  pageNum: number; //查询页
  pageSize: number; //每页数量
}
export interface reqParams {
  money: number;
  chargeWay: number;
  type: number;
}
export interface withDrawReq {
  accountMethodId: string;
  accountMethodInfo: string;
  money: number;
}
export interface payLoop {
  orderId?: number;
  outTradeNo?: string;
  type?: number;
}
