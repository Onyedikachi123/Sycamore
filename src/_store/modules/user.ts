export default {
  state: {
    isAuthenticated: false,
    user: null
  },
  mutations: {
    authenticate: (state: any, user: any) => {
      state.isAuthenticated = true;
      state.user = user;
    }
  },
  actions: {},
  getters: {},
  namespaced: true
};
