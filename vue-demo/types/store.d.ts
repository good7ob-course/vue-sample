export interface UserInfo {
  id: number;
  introduceSign?: string;
  loginName?: string;
  nickName: string;
  userName?: string;
  idName?: string;
  password?: string;
  avatar: string;
}

export interface CartInfo {
  cartItemId: number;
  goodsCount: number;
  goodsCoverImg: string;
  goodsId: number;
  goodsName: string;
  sellingPrice: number;
}
