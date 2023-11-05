import service from "@/network/request";
import {
  AddressParams,
  EditUserParams,
  // LoginParams,
  LoginNoTokenParams,
  // RegisterParams,
} from "@/network/user/model/loginModel";
import { BasicPageParams } from "@/network/model/baseModel";
import {
  IProjectsParams,
  IMallOrderDetail,
  IUpdateOrderParams,
  ICancelOrderParams,
  IUserProjectParams,
  IUserBaseParams,
  IProjectOrderParams,
  UserResponse,
  ICodeParams,
  IBindMobileParams,
  IDemandDeliverableApproveParams,
  IConfirmOrderParams,
  createUser,
} from "@/network/user/model/user";
//import { ProjectOrderSearchParams } from "../order/model/orderModel";
//import { MallResponse, SupplementApproveParam } from "@/network/shop/shop";

export function getUserInfo() {
  return service.request({
    url: "/backend/user/getInfo",
    method: "get",
  });
}

export function editUserInfo(data: EditUserParams) {
  return service.request({
    url: "/user/info",
    method: "put",
    data: data,
  });
}

export function login() {
  return service.request({
    url: "/users/userLogin",
    method: "get",
  });
}

export function loginNoToken(data: LoginNoTokenParams) {
  console.log(`loginNoToken api` + JSON.stringify(data));
  return service.request({
    url: "/users/userLoginNoToken",
    params: data,
    method: "get",
  });
}

export function logout() {
  return service.request({
    url: "/user/logout",
    method: "post",
  });
}

export function getMaintainceInfo() {
  return service.request({
    url: "/backend/sys/maintain/realTimeShow",
    method: "get",
  });
}

//TODO 删除
export function getAddressList(data: BasicPageParams) {
  return service.request({
    url: "/address",
    params: data,
    method: "get",
  });
}

//TODO 删除
export function addAddress(data: AddressParams) {
  return service.request({
    url: "/address",
    data: data,
    method: "post",
  });
}

//TODO 删除
export function editAddress(params: AddressParams) {
  return service.put("/address", params);
}

//TODO 删除
export function deleteAddress(id: string) {
  return service.delete(`/address/${id}`);
}

//TODO 删除
export function getAddressDetail(id: string) {
  return service.get(`/address/${id}`);
}

//TODO 删除
export function getDefaultAddress() {
  return service.get("/address/default");
}

export function getUserWorkList() {
  return service.request({
    url: "/backend/user/getUserWorkList",
    method: "get",
  });
}

/**
 * 对应 user id 的个人介绍项目
 */
export function getUserWorkListByUserId(params: { userId: number }) {
  return service.request({
    url: "/backend/user/getUserWorkListByUserId",
    method: "get",
    params: params,
  });
}

/**
 * 对应 user id 的项目评价
 */
export function getUserCommentList(data: { userId: number; pageNum: number; pageSize: number }) {
  return service.request({
    url: "/backend/user/getUserCommentList",
    method: "post",
    data: data,
  });
}
/**
 * 甲方拒绝报名
 */
export function applyReject(data: {
  applyUserId: number;
  projectId: number;
  rejectReason: string;
}) {
  return service.request({
    url: "/market/project/apply/reject",
    method: "post",
    data: data,
  });
}
/**
 * 个人中心获取商城订单列表
 */
export function getMallOrdersList(params: IProjectsParams) {
  return service.request({
    url: "/backend/mall/order/list",
    method: "post",
    data: params,
  });
}

// 获取商城需求列表
export const getDemandList = (data: IProjectsParams) => {
  return service
    .request({
      url: "/backend/mall/demand/listByUser",
      method: "post",
      data,
    })
    .then((value) => value.data);
};

// 获取商城需求详情
export const getDemandDetail = (id: number) => {
  return service
    .request({
      url: "/backend/mall/demand/detail",
      method: "post",
      data: {
        id,
      },
    })
    .then((value) => value.data);
};

/**
 * 个人中心获取商城订单详情
 */
export function getMallOrderDetail(params: IMallOrderDetail) {
  return service.request({
    url: "/backend/mall/order/details",
    method: "post",
    data: params,
  });
}

/**
 * 订单处理
`*/
export function updateOrderStatus(params: IUpdateOrderParams) {
  return service.request({
    url: "/backend/mall/order/change",
    method: "post",
    data: params,
  });
}

/**
 * 个人中心获取个人详细信息
 */
export function getUserDetailInfo(params: { id: number }): Promise<Partial<UserResponse>> {
  return service.request({
    url: "/backend/user/getUserInfo",
    method: "get",
    params,
  });
}

/**
 * 保存用户信息
`*/
export function saveUserInfo(data: Record<string, string | number>) {
  return service.request({
    url: "/backend/user/saveUser",
    method: "post",
    data,
  });
}
export function editUserAttrInfo(data: Record<string, string | number>) {
  return service.request({
    url: "/backend/user/editUser",
    method: "post",
    data,
  });
}
export function saveUserAvatar(avatar: string) {
  return service.request({
    url: "/backend/user/saveUserAvatar",
    method: "post",
    data: {},
    params: { avatar },
  });
}

/**
 * 获取用户项目经验详细信息
 */
export function getUserWorkInfo(params: { id: number }) {
  return service.request({
    url: "/backend/user/getUserWorkProjectInfo",
    method: "get",
    params,
  });
}

/**
 * 保存用户案例作品
 */
export function saveUserProject(params: IUserProjectParams) {
  return service.request({
    url: "/backend/user/saveUserWork",
    method: "post",
    data: params,
  });
}

/**
 * 删除案例作品
 */
export function deleteUserProject(params: { id: number }) {
  return service.request({
    url: "/backend/user/delUserWorkProject",
    method: "get",
    params,
  });
}

export function checkNickName(params: { nickName: string }) {
  return service.request({
    url: "/backend/user/checkNickName?nickName=" + params.nickName,
    method: "get",
  });
}
/**
 * 用户信息保存
 */
export function saveUserBaseInfo(params: IUserBaseParams) {
  return service.request({
    url: "/backend/user/editUser",
    method: "post",
    data: params,
  });
}

/**
 * 订单删除
 */
export function delProjectOrder(params: { idList: number[] }) {
  return service.request({
    url: "/backend/order/batchDel",
    method: "post",
    data: params,
  });
}

/**
 * 保存订单信息
 */
export function saveProjectOrder(params: IProjectOrderParams) {
  return service.request({
    url: "/backend/order/saveOrUpdate",
    method: "post",
    data: params,
  });
}

/**
 * 获取验证码
 */
export function getCode(params: ICodeParams) {
  return service.request({
    url: "/backend/code/get",
    method: "post",
    data: params,
  });
}

/**
 * 获取验证码
 */
export function bindMobile(params: IBindMobileParams) {
  return service.request({
    url: "/backend/user/bindMobile",
    method: "post",
    data: params,
  });
}