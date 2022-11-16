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
    let forumsByCtagory = state.dataSource.forums.filter((forum) => {
      return forum.categoryId == categoryId;
    });
    return forumsByCtagory;
  },
  getThreadsByForum: (state) => (forumId) => {
    let threadsByForum = state.dataSource.threads.filter((thread) => {
      return thread.forumId == forumId;
    });
    return threadsByForum;
  },
  getPostsByThread: (state) => (threadId) => {
    let postsByThread = state.dataSource.posts.filter((post) => {
      return post.threadId == threadId;
    });
    return postsByThread;
  },
  getForumById: (state) => (id) => {
    return state.dataSource.forums.find((forum) => forum.uid === id);
  },
  getCategoryById: (state) => (id) => {
    return state.dataSource.categories.find((category) => category.uid === id);
  },
  getUserById: (state) => (userId) => {
    return state.dataSource.users.find((user) => user.uid === userId);
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
