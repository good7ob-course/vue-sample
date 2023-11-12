export enum GoodCategory {
  Service,
  Item,
}
export interface ApiGood {
  [key: string]: string | number | string[];
  id: string;
  state: number;
  createdDate: string;
  updatedDate: string;
  createdId: string;
  updatedId: string;
  sortId: string;
  itemName: string;
  itemPrice: number;
  itemAnnex: string;
  itemImage: string;
  itemCategory: GoodCategory;
  itemInfo: string;
}
export interface ApiGoodListParams {
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  state?: number;
}

export interface ApiGoodList {
  msg: string;
  code: number;
  data: {
    total: number;
    list: Array<ApiGood>;
    pageNum: number;
    pageSize: number;
    size: number;
    startRow: number;
    endRow: number;
    pages: number;
    prePage: number;
    nextPage: number;
    isFirstPage: boolean;
    isLastPage: boolean;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    navigatePages: number;
    navigatepageNums: [];
    navigateFirstPage: number;
    navigateLastPage: 0;
  };
}

export interface ApiGoodListData {
  total: number;
  list: Array<ApiGood>;
  pageNum: number;
  pageSize: number;
  size: number;
  startRow: number;
  endRow: number;
  pages: number;
  prePage: number;
  nextPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  navigatePages: number;
  navigatepageNums: [];
  navigateFirstPage: number;
  navigateLastPage: 0;
}

export interface ApiGetCartListParams {
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  sortType?: number;
  start?: string;
  status?: number;
  type?: number;
}

export interface ApiCartGoodsList {
  msg: string;
  code: number;
  data: {
    startRow: number;
    navigatepageNums: any[];
    prePage: number;
    hasNextPage: boolean;
    nextPage: number;
    pageSize: number;
    endRow: number;
    list: {
      mallJson: string;
      code: string;
      updatedId: string;
      fee: number;
      contract: string;
      createdId: number;
      updatedDate: string;
      createdDate: string;
      phone: string;
      mallItemId: string;
      sortId: string;
      treaty: string;
      name: string;
      contractId: number;
      id: string;
      state: number;
      email: string;
      mallItemName: string;
      status: number;
    }[];
    pageNum: number;
    navigatePages: number;
    total: number;
    navigateFirstPage: number;
    pages: number;
    size: number;
    isLastPage: boolean;
    hasPreviousPage: boolean;
    navigateLastPage: number;
    isFirstPage: boolean;
  };
}

export interface MallItemJson {
  createdDate: number;
  createdId: number;
  id: number;
  itemAnnex: string;
  itemCategory: number;
  itemImage: string;
  itemInfo: string;
  itemName: string;
  itemPrice: number;
  state: number;
  updatedDate: number;
  updatedId: number;
}

export interface MallDemand {
  id: number;
  createdDate: number;
  updatedDate: number;
  createdId: number;
  updatedId: number;
  code: string;
  totalFee: number;
  status: number;
  reqInfo: string;
  name: string;
  email: string;
  phone: string;
  mallItemId: number;
  mallItemName: string;
  mallItemJson: string;
  processorId: number;
  closeDate: any;
  closeReason: any;
}

export interface MallOrderItem {
  id: number;
  createdDate: number;
  updatedDate: number;
  createdId: number;
  updatedId: any;
  demandId: number;
  orderNo: string;
  orderName: string;
  fee: number;
  status: number;
  refund: number;
}

export interface DemandDetail {
  mallDemand: {
    mallDemand: MallDemand;
    createdName: any;
    processorName: string;
  };
  mallOrderList: MallOrderItem[];
  mallDemandSupplementList: any[];
  mallDemandDeliverableList: any[];
}

export interface DemandExtraItem {
  id: number;
  content: string;
  mallItemName: string;
  supplement: boolean;
  processorName: string;
  status: number;
  createdDate: number;
  updatedDate: number;
}
