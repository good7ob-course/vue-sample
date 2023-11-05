import service from "@/network/request";
import { SuggestParams } from "@/network/project/model/suggestModel";

export function getSuggest(data: SuggestParams) {
  return service.request({
    url: "backend/fb/list",
    data: data,
    method: "post",
  });
}

export function doSuggest(data: SuggestParams) {
  return service.request({
    url: "backend/fb/add",
    data: data,
    method: "post",
  });
}

export function finishSuggest(data: SuggestParams) {
  return service.request({
    url: "backend/fb/finish",
    data: data,
    method: "post",
  });
}
