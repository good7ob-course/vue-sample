export interface CreateFeedbackParams {
  comment: string;
  createdDate: number;
  createdId: number;
  finishOff: number;
  id: number;
  name: string;
  phone: string;
  sortId: number;
  state: number;
  status: number;
  updatedDate: number;
  updatedId: number;
  userId: number;
}
export interface FinishFeedbackParams {
  finishOff: number;
  id: number;
}

export interface FeedbackListParams {
  end: number;
  id: number;
  idsList: number[];
  keyword: string;
  pageNum: number;
  pageSize: number;
  sortType: number;
  start: number;
  status: number;
  type: number;
}
