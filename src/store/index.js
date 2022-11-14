import { createStore } from "vuex";
import data from "../assets/data.json";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      dataSource: data,
      authId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
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
      const user = state.dataSource.users.find((u) => u.id === state.authId);
      if (!user) {
        return {};
      } else {
        return {
          ...user,
          get posts() {
            return state.dataSource.posts.find((p) => p.userId === user.id);
          },
          get threads() {
            return state.dataSource.threads.find((th) => th.userId === user.id);
          },
        };
      }
    },
  },
});

export default store;