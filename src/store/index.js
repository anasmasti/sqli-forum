import { createStore } from "vuex";
import data from "../assets/data.json";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      dataSource: data,
    };
  },
  actions: {
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
    setPost(state, { post }) {
      state.dataSource.posts.push(post);
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.dataSource.threads.find((thread) => thread.id === threadId);
      thread.posts.push(postId);
    },
  },
  getters: {
    getData(state) {
      return state.dataSource;
    },
  },
});

export default store;
