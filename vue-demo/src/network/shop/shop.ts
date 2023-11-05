//import service from "@/network/request";
import {
  ApiCartGoodsList,
  ApiGetCartListParams,
  ApiGood,
  ApiGoodListParams,
  ApiGoodList,
  ApiGoodListData,
} from "@/network/shop/typing";
import service from "../request";
import { e } from "vitest/dist/reporters-2ff87305.js";
//import { MallOrderStatus } from "@/views/user/orderManagement/constants";

export function getGoodsList(data: ApiGoodListParams): Promise<ApiGoodList | null> {
  return service
    .request<ApiGoodList>({
      url: "/backend/mall/item/list",
      method: "post",
      data,
    })
    .catch((e) => {
      console.log(`e`, e);
      return null;
    });
}

export interface ApiResult<T> {
  valid: boolean;
  data?: T;
}

export function getShopDetail(id: number | string = 1): Promise<ApiResult<ApiGood>> {
  return service
    .request({
      url: "/backend/mall/item/details",
      method: "post",
      data: {
        id: id,
      },
    })
    .then((res: { data: ApiGood }) => {
      return { valid: true, data: res.data };
    })
    .catch((e) => {
      console.log(`e`, e);
      return { valid: false };
    });
}