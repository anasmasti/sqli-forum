import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      dataSource: {
        categories: [],
        forums: [],
        threads: [],
        posts: [],
        users: [],
      },
      isLoggedIn: false,
      authUser: {},
    };
  },
  actions,
  mutations,
  getters,
});

export default store;
