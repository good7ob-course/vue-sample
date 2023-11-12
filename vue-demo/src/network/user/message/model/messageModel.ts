export interface MessageParams {
  end: string;
  id: number;
  idsList: number[];
  isRead: number;
  keyword: string;
  mainType: string;
  pageNum: number;
  pageSize: number;
  sortType: number;
  start: string;
  status: number;
  subType: string;
  type: number;
  userId: number;
}
export interface MessageReadParams {
  batchIdsStr: string;
  id: number;
  userId: number;
}

export interface SendMessageParams {
  createdDate: number;
  createdId: number;
  icon: string;
  id: number;
  isRead: number;
  mainType: string;
  messageContent: string;
  messageTitle: string;
  messageType: number;
  ownerAccount: string;
  sendLoop: number;
  sendResult: string;
  sendStatus: number;
  sendTime: number;
  sortId: number;
  startSendTime: number;
  state: number;
  subType: string;
  updatedDate: number;
  updatedId: number;
  userId: number;
}
