import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default {
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
}