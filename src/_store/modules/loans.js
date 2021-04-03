import { loansService } from "../../_services/loansService";
// import router from "../../router/index";

const state = {
  type: null,
  currentLoan: [],
  loanHistory: [],
  recentPayment: null,
  loansDetails: null,
  loading: false,
  loanSchedule: [],
  message: "",
  error: false,
  success: false,
  loanSuccess: false,
  lnLoading: false,
  loanRepaymentSuccess: false,
  loanCancelled: false
};

const actions = {
  getLoans({ commit }) {
    commit("setLoading");

    loansService.getCurrentloan().then(data => {
      commit("getLoansSuccess", data);
    });
  },
  repayLoan({ commit, dispatch }, { data }) {
    commit("setLoading");
    loansService
      .repayLoan(data)
      .then(data => {
        if (data.status) {
          dispatch("alert/success", data.message, { root: true });
          commit("loanRepaymentSuccess");
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },

  getLoanDetails({ commit, dispatch }, { id }) {
    commit("setLoading");
    loansService
      .getLoanDetails(id)
      .then(data => {
        commit("setLoading");
        if (data.status) {
          // console.log(data);
          commit("loanDetails", data);
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
      })
      .catch(error => {
        commit("setLoading");
        dispatch("alert/error", error, { root: true });
      });
  },
  getLoanSchedule({ commit, dispatch }, { id }) {
    commit("setLoading");
    loansService
      .getLoanSchedule(id)
      .then(data => {
        commit("setLoading");
        if (data.status) {
          // console.log(data);
          commit("loanSchedule", data);
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
      })
      .catch(error => {
        commit("setLoading");
        dispatch("alert/error", error, { root: true });
      });
  },
  cancelLoanRequest({ commit, dispatch }, { id }) {
    commit("setLoading");
    loansService
      .cancelLoanRequest(id)
      .then(data => {
        commit("setLoading");
        if (data.status) {
          commit("loanCancelled");
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
      })
      .catch(error => {
        commit("setLoading");
        dispatch("alert/error", error, { root: true });
      });
  },
  getSavingsHistory({ commit }) {
    commit("setLoading");

    loansService.getSavingsHistory().then(data => {
      if (data.status) {
        commit("getLoansSuccess", data);
        // commit("setSuccessMessage", data.message);
        //
      } else {
        commit("setError", data.message);
      }
    });
  },
  loanApply({ commit, dispatch }, { data }) {
    commit("setLoading");
    loansService
      .newLoan(data)
      .then(data => {
        commit("setLoading");
        if (data.status) {
          dispatch("alert/success", data.message, { root: true });
          commit("loanSuccess");
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  createNewLoan(
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

    loansService
      .createNewLoan(
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
          commit("createLoanSuccess", data);
          commit("setSuccessMessage", data.message);
        } else {
          commit("setError", data.message);
        }
      });
  }
};

const mutations = {
  setLoading(state) {
    state.loading = !state.loading;
    if (state.loanSuccess != false) {
      state.loanSuccess = false;
      state.loanCancelled = false;
    }
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
  loanSuccess(state) {
    state.loading = false;
    state.loanSuccess = true;
  },
  loanCancelled(state) {
    state.loanCancelled = true;
  },
  gettingSavings(state) {
    state.loading = true;
  },

  getLoansSuccess(state, data) {
    state.status = true;
    state.loading = false;
    state.currentLoan = data.data.currentLoan;
    state.recentPayment = data.data.recent_payment;
    state.loanHistory = data.data.loanHistory;
  },
  // setLoanHistory(state, data) {
  //   state.loanHistory = data;
  // },
  loanDetails(state, data) {
    state.loansDetails = data;
  },
  loanSchedule(state, data) {
    state.loanSchedule = data.data;
  },
  createLoanSuccess(state, data) {
    state.loading = false;
    state.message = data.message;
    state.success = true;

    setTimeout(() => {
      state.success = false;
      state.message = "";
    }, 5000);
  },
  loanRepaymentSuccess(state) {
    state.loanRepaymentSuccess = true;
  }
};
export const loans = {
  namespaced: true,
  state,
  actions,
  mutations
};
