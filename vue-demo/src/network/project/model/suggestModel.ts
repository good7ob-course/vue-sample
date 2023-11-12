export interface SuggestParams {
  id?: number;
  name?: string;
  phone?: string;
  comment?: string;
  veriycode?: string;
  status?: number;
  finishOff?: number;
  type?: number;
  userId: number;
}

export interface SuggestListModel {
  id: number;
  createdDate: string;
  name: string;
  phone: string;
  comment: string;
  state: number;
  status: number;
  finishOff: number;
  userId: number;
}
