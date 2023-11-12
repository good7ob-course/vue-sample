import service from "@/network/request";
import {
  IDevelopParams,
  IBirefParams,
  ISkillParams,
  IRoleParams,
  IRoleType,
} from "@/network/user/model/user";

/**
 * 添加开发者角色
 */
export function addDeveloperRole(params: IRoleParams) {
  return service.request({
    url: "/backend/develop/role/add",
    method: "post",
    data: params,
  });
}

/**
 * 删除开发者角色
 */
export function deleteDeveloperRole(params: { id: number }) {
  return service.request({
    url: "/backend/develop/role/del",
    method: "post",
    data: params,
  });
}

/**
 * 获取开发者角色列表
 */
export function getDeveloperRoleList() {
  return service.request({
    url: "/backend/develop/role/list",
    method: "post",
  });
}

/**
 * 添加开发者技能
 */
export function addDeveloperSkill(params: ISkillParams) {
  return service.request({
    url: "/backend/develop/skill/add",
    method: "post",
    data: params,
  });
}

/**
 * 删除开发者角色
 */
export function deleteDeveloperSkill(params: { id: number }) {
  return service.request({
    url: "/backend/develop/skill/del",
    method: "post",
    data: params,
  });
}

/**
 * 获取字典类型为用户角色的数据
 */
// export function roleDictType() {
//   return service.request({
//     url: "/backend/develop/skill/list",
//     method: "post",
//   });
// }

/**
 * 根据字典值得获取标签数据
 */
export function roleLabelList(params: IRoleType) {
  return service.request({
    url: "/backend/sysLabel/selectSysLabelList",
    method: "post",
    data: params,
  });
}

export function getDictList() {
  return service.request({
    url: "/backend/sysLabelDict/getAll",
    method: "post",
    data: {},
  });
}

/**
 * 获取开发者技能列表
 */
export function getDeveloperSkillList() {
  return service.request({
    url: "/backend/develop/skill/list",
    method: "post",
  });
}

/**
 * 已认证标签列表
 */
export function getDeveloperAuthList() {
  return service.request({
    url: "/backend/develop/auth/ok/list",
    method: "post",
  });
}

/**
 * 认证列表
 */
export function getDeveloperList(params: IDevelopParams) {
  return service.request({
    url: "/backend/develop/auth/list",
    method: "post",
    data: params,
  });
}

/**
 * 获取开发者简介
 */
export function getDeveloperBirefList() {
  return service.request({
    url: "/backend/develop/brief/info",
    method: "post",
  });
}

/**
 * 新增开发者简历
 */
export function addDeveloperBiref(params: IBirefParams) {
  return service.request({
    url: "/backend/develop/brief/add",
    method: "post",
    data: params,
  });
}

/**
 * 编辑开发者简历
 */
export function editDeveloperBiref(params: IBirefParams) {
  return service.request({
    url: "/backend/develop/brief/edit",
    method: "post",
    data: params,
  });
}
/**
 * 查询认证列表
 */
// export function getDevelopList(params: IDevelopParams) {
//   return service.request({
//     url: "/api/develop/list",
//     method: "post",
//     data: params,
//   });
// }
