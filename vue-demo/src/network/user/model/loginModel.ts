//TODO 待删除
export interface LoginParams {
  loginName: string;
  passwordMd5: string;
}
export interface LoginNoTokenParams {
  uuid: string;
}
export interface RegisterParams {
  loginName: string;
  password: string;
}

export interface EditUserParams {
  introduceSign: string;
  nickName: string;
  passwordMd5?: string;
}

export interface AddressParams {
  userName: string;
  userPhone: string;
  provinceName: string;
  cityName: string;
  regionName: string;
  detailAddress: string;
  defaultFlag: number;
  addressId?: number;
}
