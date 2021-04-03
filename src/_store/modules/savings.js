import { savingsService } from "../../_services/savingsService";
// import router from "../../router/index";

const state = {
  type: null,
  savings: null,
  savingsDetails: null,
  loading: false,
  message: "",
  error: false,
  success: false
};

const actions = {
  getSavings({ commit }) {
    commit("setLoading");

    savingsService.getSavings().then(data => {
      commit("getSavingsSuccess", data);
    });
  },
  getSavingsHistory({ commit }) {
    commit("setLoading");

    savingsService.getSavingsHistory().then(data => {
      if (data.status) {
        commit("getSavingsSuccess", data);
        // commit("setSuccessMessage", data.message);
        //
      } else {
        commit("setError", data.message);
      }
    });
  },
  createNewSavings(
    { commit },
    {
      title,
      amount,
      target,
      frequency,
      duration,
      startDate,
      fundingSource,
      category,
      automated,
      connectCardId
    }
  ) {
    commit("setLoading");

    savingsService
      .createNewSavings(
        title,
        amount,
        target,
        frequency,
        duration,
        startDate,
        fundingSource,
        category,
        automated,
        connectCardId
      )
      .then(data => {
        if (data.status) {
          commit("createSavingsSuccess", data);
          commit("setSuccessMessage", data.message);
          console.log(data);
        } else {
          console.log(data);
          commit("setError", data.message);
        }
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
  gettingSavings(state) {
    state.loading = true;
  },

  getSavingsSuccess(state, data) {
    state.status = true;
    state.loading = false;
    state.savings = data.loans;
  },
  createSavingsSuccess(state, data) {
    state.loading = false;
    state.message = data.message;
    state.success = true;

    setTimeout(() => {
      state.success = false;
      state.message = "";
    }, 5000);
  }
};
export const savings = {
  namespaced: true,
  state,
  actions,
  mutations
};
