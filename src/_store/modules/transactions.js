import { loansService } from "../../_services/transactionsService";
// import router from "../../router/index";

const state = {
  transactions: [],
  loading: false,
  message: "",
  error: false,
  success: false
};

const actions = {
  getTransactions({ commit }) {
    commit("setLoading");

    loansService.getTransactions().then(data => {
      commit("getTransactionsSuccess", data);
    });
  }
};

const mutations = {
  setLoading(state) {
    state.loading = true;
  },
  setError(state, message) {
    state.loading = false;
    state.error = true;
    state.message = message;
    setTimeout(() => {
      state.error = false;
      state.message = null;
    }, 4000);
  },
  setSuccessMessage(state, message) {
    state.loading = false;
    state.success = true;
    state.message = message;
    setTimeout(() => {
      state.message = null;
      state.success = false;
    }, 4000);
  },

  getTransactionsSuccess(state, data) {
    state.status = true;
    state.loading = false;
    state.transactions = data.recent_transactions;
  }
};
export const transactions = {
  namespaced: true,
  state,
  actions,
  mutations
};
