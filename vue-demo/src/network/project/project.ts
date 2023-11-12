import service from "@/network/request";
import {
  ProjectParams,
  ProjectListParams,
  ProjectDynParams,
  ProjectEntity,
  ApplyProjectEntity,
} from "@/network/project/model/projectModel";
// import { BasicPageParams } from "@/network/model/baseModel";

export function createProject(data: ProjectParams) {
  return service.request({
    url: "market/project/saveOrUpdate",
    data: data,
    method: "post",
  });
}

export function getProjectList(data: ProjectListParams) {
  return service.request({
    url: "market/project/getProjectList",
    data: data,
    method: "post",
  });
}

export function getMyProjectList(data: ProjectListParams) {
  return service.request({
    url: "market/project/getMyProjectList",
    data: data,
    method: "post",
  });
}

export function getMyApplyProjectList(data: ProjectListParams) {
  return service.request({
    url: "market/project/apply/getMyProjectApplyList",
    data: data,
    method: "post",
  });
}

export function getProjectDynList(data: ProjectDynParams) {
  return service.request({
    url: "market/project/getProjectDynList",
    data: data,
    method: "post",
  });
}

export function getProjectDetail(id: string) {
  return service.request({
    url: `market/project/openDetail?projectId=${id}`,
    method: "get",
  });
}
export function getAgreeDetials(id: string) {
  return service.request({
    url: `market/project/agree/detail?id=${id}`,
    method: "get",
  });
}

export function applyProject(data: ApplyProjectEntity) {
  return service.request({
    url: `market/project/apply/join`,
    data: data,
    method: "post",
  });
}
export function applyNewProject(projectId: string) {
  return service.request({
    url: `market/project/apply/join`,
    data: projectId + "",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function updateApplyProject(data: ApplyProjectEntity) {
  return service.request({
    url: `market/project/apply/update`,
    data: data,
    method: "post",
  });
}

export function cancelApplyProject(id: number) {
  return service.request({
    url: `market/project/apply/cancel`,
    data: { id },
    method: "post",
  });
}

export function saveProject(data: ProjectEntity) {
  return service.request({
    url: `market/project/saveOrUpdate`,
    data: data,
    method: "post",
  });
}

export function getApplyProjectDetail(id: string) {
  return service.request({
    url: `market/project/apply/detail?id=${id}`,
    method: "get",
  });
}

export function updProjectView(id: string) {
  return service.request({
    url: `market/project/view?projectId=${id}`,
    method: "get",
  });
}

export function getUserApply() {
  return service.request({
    url: `market/project/getUserApply`,
    data: {},
    method: "post",
  });
}
export function getRecruitInfo(id: string) {
  return service.request({
    url: `market/project/recruitInfo?projectId=${id}`,
    method: "get",
  });
}
