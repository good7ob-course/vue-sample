import { defineStore } from "pinia";
import store from "../index";

interface UserState {
  // 评论列表
  commentList: [];
  // 用户标签字典 列表
  userTagDictList: [];
}

export const useAppStore = defineStore({
  id: "app-tabs",
  state: (): UserState => ({
    commentList: [],
    userTagDictList: [],
  }),
  getters: {
    getCommentList(): any {
      return this.commentList;
    },
    getUserTagDictList(): any {
      return this.userTagDictList;
    },
  },
  actions: {
    setCommentList(commentList: any) {
      this.commentList = commentList;
    },
    setUserTagDictList(userTagDictList: any) {
      this.userTagDictList = userTagDictList;
    },
  },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
