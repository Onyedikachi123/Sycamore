const state = {
  alert: false,
  type: null,
  message: null,
  isLoading: true
};

const actions = {
  success({ commit }, message) {
    commit("success", message);
  },
  error({ commit }, message) {
    commit("error", message);
  },
  closeAlert({ commit }) {
    commit("clear");
  },
  setLoading({ commit }) {
    commit("setLoading");
  }
};

const mutations = {
  success(state, message) {
    state.alert = true;
    state.type = "success";
    state.message = message;
    setTimeout(() => {
      state.alert = false;
      state.message = null;
    }, 5000);
  },
  error(state, message) {
    state.alert = true;
    state.type = "secondary";
    state.message = message;
    setTimeout(() => {
      state.alert = false;
      state.message = null;
    }, 5000);
  },
  clear(state) {
    state.alert = false;
    state.type = null;
    state.message = null;
  },
  setLoading(state) {
    state.isLoading = !state.isLoading;
  }
};

export const alert = {
  namespaced: true,
  state,
  actions,
  mutations
};
