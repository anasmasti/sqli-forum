export default {
  // Set is Logged In user
  setLoggedIn(state, { isLoggedIn }) {
    state.isLoggedIn = isLoggedIn;
  },

  // Set auth user
  setAuthUser(state, { user }) {
    state.authUser = user;
  },

  // On fetch categories from firebase done successfully
  fetchCategoriesSuccess(state, categories) {
    state.dataSource.categories.push(...categories);
  },

  // On fetch forums from firebase done successfully
  fetchForumsSuccess(state, forums) {
    state.dataSource.forums.push(...forums);
  },

  // On fetch posts from firebase done successfully
  fetchPostsSuccess(state, posts) {
    state.dataSource.posts.push(...posts);
  },
};
