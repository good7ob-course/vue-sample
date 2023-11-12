export type BasicPageParams = {
  pageNumber: number;
  pageSize: number;
  isLastPage?: boolean;
};

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}

export type BaseRequestParams = BasicPageParams;

export type BaseResp = {
  code: number;
  msg: string;
};

export type BaseTResp<T> = {
  code: number;
  msg: string;
  data: T;
};

export type BasePageResp<T> = {
  msg: string;
  code: number;
  data: {
    startRow: number;
    navigatepageNums: number[];
    prePage: number;
    hasNextPage: boolean;
    nextPage: number;
    pageSize: number;
    endRow: number;
    list: T[];
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
};

export type BasePageMode = "edit" | "add" | "read";
