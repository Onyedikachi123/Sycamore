const state = {
  showLoanMenu: false,
  viewedLoanPages: [1, 2, 3],
  currentLoanPage: 4
};

const actions = {
  setLoanMenu({ commit }) {
    commit("updateLoanMenu", true);
  },
  setViewedLoanPages({ commit }, payload) {
    commit("updateLoanPages", payload);
  },
  setCurrentLoanPage({ commit }, payload) {
    console.log(payload);
    commit("updateCurrentLoanPage", payload);
  },
  setResetData({ commit }) {
    commit("resetData");
  }
};

const mutations = {
  updateLoanMenu(state) {
    state.showLoanMenu = !state.showLoanMenu;
  },
  updateLoanPages(state, payload) {
    if (state.viewedLoanPages.indexOf(payload.pageNumber - 1) < 0) {
      state.viewedLoanPages.push(payload.pageNumber - 1);
    } else {
      state.viewedLoanPages.splice(
        state.viewedLoanPages.indexOf(payload.pageNumber - 1),
        1
      );
    }
  },
  updateCurrentLoanPage(state, payload) {
    state.currentLoanPage = payload.pageNumber;
  },
  resetData(state) {
    state.viewedLoanPages = [1, 2, 3];
    state.currentLoanPage = 4;
  }
};

export const loanMenu = {
  namespaced: true,
  state,
  actions,
  mutations
};
