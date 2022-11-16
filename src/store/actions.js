import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default {
  // Fetch Categories from firebase
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

  // Fetch Forums from firebase
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

  // Fetch Posts from firebase
  async fetchPosts(context) {
    let postsRef = firebase.firestore().collection("/posts");
    let posts = [];

    await postsRef.onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        posts.push({
          uid: doc.id,
          ...doc.data(),
        });
      });
      context.commit("fetchPostsSuccess", posts);
    });
  },

   // Fetch Threads from firebase
   async fetchThreads(context) {
    let threadsRef = firebase.firestore().collection("/threads");
    let threads = [];

    await threadsRef.onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        threads.push({
          uid: doc.id,
          ...doc.data(),
        });
      });
      context.commit("fetchThreadsSuccess", threads);
    });
  },

  // Fetch Users from firebase
  async fetchUsers(context) {
    let usersRef = firebase.firestore().collection("/users");
    let users = [];

    await usersRef.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
            users.push({
              uid: doc.id,
              ...doc.data(),
            });
          });
      context.commit("fetchUsersSuccess", users);
    });
  },

  // Toggle logged in user
  toggleLoggedIn(context, { isLoggedIn }) {
    context.commit("setLoggedIn", { isLoggedIn });
  },

  // Add auth user
  addAuthUser(context, { user }) {
    context.commit("setAuthUser", { user });
  },

  // Add post to firebase
  addPost(_, post) {
    let postsRef = firebase.firestore().collection("/posts");
    let threadsRef = firebase.firestore().collection("/threads");

    postsRef.add(post).then((sendedPost) => {
      threadsRef.doc(post.threadId).update({
        threads: [sendedPost.uid],
      });
    });
  },
};
