import service from "@/network/request";
import {
  IPayListParams,
  IPayPasswordParams,
  accountDetailsParams,
  reqParams,
  withDrawReq,
  payLoop,
} from "@/network/user/model/pay";
/**
 * 查询账户信息
 */
export function getPayAccount() {
  return service.request({
    url: "/pay/account/info",
    method: "post",
  });
}

/**
 * 获取交易记录
 */
export function getPayList(params: IPayListParams) {
  return service.request({
    url: "/pay/account/details",
    method: "post",
    data: params,
  });
}

/**
 * 获取支付列表
 * /pay/list 支付列表接口
/deposit/list 充值列表接口
/withdrad/list 提现列表接口
 */
export function queryPayList(params: IPayListParams) {
  return service.request({
    url: "/pay/pay/list",
    method: "post",
    data: params,
  });
}

export function queryDepositList(params: IPayListParams) {
  return service.request({
    url: "/pay/deposit/list",
    method: "post",
    data: params,
  });
}

export function queryWithdrawList(params: IPayListParams) {
  return service.request({
    url: "/pay/withdraw/list",
    method: "post",
    data: params,
  });
}

/**
 * 设置支付密码
 */
export function setPayPassword(params: IPayPasswordParams) {
  return service.request({
    url: "/backend/user/resetPayPassword",
    method: "post",
    data: params,
  });
}
/**
 * 用户端 交易记录 接口 新
 * 后台 南山  前端CC
 */
export function getTableDataList(params: accountDetailsParams) {
  return service.request({
    url: "/pay/pay/list",
    method: "post",
    data: params,
  });
}
/*
 * 充值
 * */
export function postReqMoney(params: reqParams) {
  return service.request({
    url: "/pay/deposit/req",
    method: "post",
    data: params,
  });
}
/*
 * 提现
 * */
export function postWithdrawReq(params: withDrawReq) {
  return service.request({
    url: "/pay/withdraw/req",
    method: "post",
    data: params,
  });
}

export function postPayLoop(params: payLoop) {
  return service.request({
    url: "/pay/pay/query",
    method: "post",
    data: params,
  });
}
export function postPayLoopMall(params: payLoop) {
  return service.request({
    url: "/backend/mall/order/payStatus",
    method: "post",
    data: params,
  });
}
