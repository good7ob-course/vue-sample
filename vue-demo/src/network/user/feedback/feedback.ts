import service from "@/network/request";
import {
  CreateFeedbackParams,
  FinishFeedbackParams,
  FeedbackListParams,
} from "@/network/user/feedback/model/feedbackModel";

export function createFeedback(data: CreateFeedbackParams) {
  return service.request({
    url: "/backend/fb/add",
    method: "post",
    data: data,
  });
}

export function finishFeedback(data: FinishFeedbackParams) {
  return service.request({
    url: "/backend/fb/finish",
    method: "post",
    data: data,
  });
}

export function getFeedbackList(data: FeedbackListParams) {
  return service.request({
    url: "/backend/fb/list",
    method: "post",
    data: data,
  });
}
