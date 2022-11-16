export default {
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
  getPosts(state) {
    return state.dataSource.posts;
  },
  authUser(state) {
    return state.authUser;
  },
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
};
