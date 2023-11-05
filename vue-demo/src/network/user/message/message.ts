import service from "@/network/request";
import {
  MessageParams,
  MessageReadParams,
  SendMessageParams,
} from "@/network/user/message/model/messageModel";

export function getMessageList(data: MessageParams) {
  return service.request({
    url: "/backend/msg/list",
    method: "post",
    data: data,
  });
}

export function markMessageRead(data: MessageReadParams) {
  return service.request({
    url: "/backend/msg/read",
    method: "post",
    data: data,
  });
}

export function markAllMessageRead() {
  return service.request({
    url: "/backend/msg/readAll",
    method: "post",
  });
}

//暂不使用 TODO 删除
export function sendMessage(data: SendMessageParams) {
  return service.request({
    url: "/backend/msg/send",
    method: "post",
    data: data,
  });
}
