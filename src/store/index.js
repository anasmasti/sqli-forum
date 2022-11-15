import { createStore } from "vuex";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

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
  actions: {
    async fetchCategories(context) {
      let categoriesRef = firebase.firestore().collection("/categories");
      let categories = [];

      await categoriesRef.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          categories.push({
            uid: doc.id,
            ...doc.data(),
          });
        });
        context.commit("fetchCategoriesSuccess", categories);
      });
    },

    async fetchForums(context) {
      let forumsRef = firebase.firestore().collection("/forums");
      let forums = [];

      await forumsRef.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          forums.push({
            uid: doc.id,
            ...doc.data(),
          });
        });
        context.commit("fetchForumsSuccess", forums);
      });
    },
    toggleLoggedIn(context, { isLoggedIn }) {
      context.commit("setLoggedIn", { isLoggedIn });
    },
    addAuthUser(context, { user }) {
      context.commit("setAuthUser", { user });
    },
    addPost(context, post) {
      const postId = "dhdhd" + Math.random();
      context.commit("setPost", { post });
      context.commit("appendPostToThread", {
        postId: postId,
        threadId: post.threadId,
      });
    },
  },
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
