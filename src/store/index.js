import { createStore } from "vuex";
import data from "../assets/data.json";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      dataSource: data,
      isLoggedIn: false,
      authUser: {},
    };
  },
  actions: {
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
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.dataSource.threads.find(
        (thread) => thread.id === threadId
      );
      thread.posts.push(postId);
    },
  },
  getters: {
    getData(state) {
      return state.dataSource;
    },
    authUser(state) {
      return state.authUser
    },
    isLoggedIn(state) {
      return state.isLoggedIn
    },
  },
});

export default store;
