import { defineStore } from "pinia";
import store from "../index";
import { LoginParams } from "@/network/user/model/loginModel";
import { CartInfo, UserInfo } from "../../../types/store";
import { LocalStorage } from "@/utils/storage";
import { AVATAR_KEY, TOKEN_KEY, USER_INFO_KEY } from "@/enums/cacheEnum";
import { getMaintainceInfo, getUserInfo, login, logout } from "@/network/user/user";
// import { getCart } from "@/network/cart/cart";
// import { Aws } from "@/network/aws/aws";
interface UserState {
  userInfo: Nullable<UserInfo>;
  isLogin: boolean;
  token: string;
  cartList: CartInfo[];
  avatar: string;
  maintainceInfo: {
    status: boolean | string;
    content: string;
  };
}

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    isLogin: false,
    userInfo: LocalStorage.get<UserInfo>(USER_INFO_KEY) || null,
    token: LocalStorage.get<string>(TOKEN_KEY) || "",
    cartList: [],
    avatar: LocalStorage.get(AVATAR_KEY) || "",
    maintainceInfo: {
      status: "", //设为空字符串是为了初始化是请求一次接口
      content: "当前系统正在维护中...",
    },
  }),
  getters: {
    getUserInfo(): Nullable<UserInfo> {
      return this.userInfo || LocalStorage.get<UserInfo>(USER_INFO_KEY);
    },
    getToken(): string {
      return this.token || LocalStorage.get<string>(TOKEN_KEY) || "";
    },
    getCartCount(): number {
      return this.cartList.length;
    },
    getMaintainceStatus(): boolean | string {
      return this.maintainceInfo.status;
    },
    getMaintainceContent(): string {
      return this.maintainceInfo.content;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      LocalStorage.set(TOKEN_KEY, token);
      useUserStoreWithOut().token = token;
    },
    setAvatar(url: string) {
      this.avatar = url;
      LocalStorage.set(AVATAR_KEY, url);
    },
    removeAvatar() {
      this.avatar = "";
      LocalStorage.remove(AVATAR_KEY);
    },
    removeToken() {
      LocalStorage.remove(TOKEN_KEY);
      useUserStoreWithOut().token = "";
    },
    setHasGetInfo(hasGetInfo: boolean) {
      this.isLogin = hasGetInfo;
    },

    setUserInfo(user: UserInfo) {
      this.userInfo = user;
      LocalStorage.set(USER_INFO_KEY, user);
    },

    removeUserInfo() {
      this.userInfo = null;
      LocalStorage.remove(USER_INFO_KEY);
    },
    async setCartCount() {
      //const data = await getCart();
      //this.cartList = data.data ?? [];
    },
    setMaintainceStatus(obj: { status: boolean; content: string }) {
      this.maintainceInfo = obj;
    },
    /**
     * @description: login
     */
    async loginByName(form: LoginParams): Promise<string | null> {
      try {
        console.log("======form===", form);
        const data = await login();
        console.log("======data===", data);
        this.setToken(data.data);
        this.getUserInfoAction();
        return data.data;
      } catch (err) {
        return null;
      }
    },
    getUserInfoAction() {
      return new Promise((resolve) => {
        getUserInfo().then((data) => {
          this.setUserInfo(data?.data.length !== 0 ? data.data[0] : {});
          resolve(true);
        });
      });
    },
    /**
     * @description: logout
     */
    async logout(): Promise<boolean> {
      try {
        await logout();
        this.setToken("");
        return true;
      } catch (err) {
        return false;
      }
    },
    async getMaintainceStatusFromAPI(): Promise<string | null> {
      try {
        const data = await getMaintainceInfo();
        if (data.data && data.code === 503) {
          this.setMaintainceStatus({
            status: true,
            content: data.data.content,
          });
        } else {
          this.setMaintainceStatus({
            status: false,
            content: "",
          });
        }
        console.log("======data===", data);

        return data.code;
      } catch (err) {
        return null;
      }
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
