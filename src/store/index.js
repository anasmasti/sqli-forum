import { createStore } from "vuex";
import actions from "./actions";


// Create a new store instance.
const store = createStore({
  state() {
    return {
      dataSource: {
        categories: [],
        forums: [],
        threads: [],
      },
      isLoggedIn: false,
      authUser: {},
    };
  },
  actions,
  mutations: {
    setLoggedIn(state, { isLoggedIn }) {
      state.isLoggedIn = isLoggedIn;
    },
    setAuthUser(state, { user }) {
      state.authUser = user;
    },
    setPost(state, { post }) {
      state.dataSource.posts.push(post);
    },
    fetchCategoriesSuccess(state, categories) {
      state.dataSource.categories.push(...categories);
    },
    fetchForumsSuccess(state, forums) {
      state.dataSource.forums.push(...forums);
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.dataSource.threads.find(
        (thread) => thread.uid === threadId
      );
      thread.posts.push(postId);
    },
  },
  getters: {
    getData(state) {
      return state.dataSource;
    },
    getCategories(state) {
      return state.dataSource.categories;
    },
    getForums(state) {
      return state.dataSource.forums;
    },
    getForumsByCategory: (state) => (categoryId) => {
      return state.dataSource.forums.filter(
        (forum) => forum.categoryId === categoryId
      );
    },
    getForumById: (state) => (id) => {
      return state.dataSource.forums.find((forum) => forum.uid === id);
    },
    authUser(state) {
      return state.authUser;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
