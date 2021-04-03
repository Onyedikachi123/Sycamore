import { investmentsService } from "../../_services/investmentsService";
import router from "../../router/index";

const state = {
  type: null,
  investments: [],
  pendingInvestments: [],
  investmentPortfolio: [],
  investmentDetails: null,
  loading: false,
  loadingBtn: false,
  invLoading: false,
  status: false,
  messageType: true,
  message: "",
  showAlert: false,
  error: null,
  success: null,
  investmentHistory: [],
  authorizationUrl: "",
  showIframe: false,
  paystackData: {},
  InvestmentSuccess: false
};

const getters = {
  getState: state => {
    return state;
  }
};

const actions = {
  getInvestments({ commit, dispatch }) {
    commit("gettingInvestments");
    investmentsService
      .getInvestments()
      .then(data => {
        commit("getInvestmentSuccess", data);
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  getInvestmentSuccess: ({ commit }, data) => {
    commit("getInvestmentSuccess", data.data);
  },
  getPendingInvestments: ({ commit, dispatch }) => {
    commit("gettingPendingInvestments");
    investmentsService
      .getPendingInvestments()
      .then(data => {
        commit("getPendingInvestmentSuccess", data);
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  getInvestmentPortfolio: ({ commit, dispatch }) => {
    investmentsService
      .myInvestments()
      .then(data => {
        commit("getPortfolioInvestmentSuccess", data);
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  getInvestmentHistory: ({ commit, dispatch }) => {
    investmentsService
      .getInvestmentHistory()
      .then(data => {
        commit("getInvestmentHistorySuccess", data);
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  createNewInvestmentWithDetails: ({ commit, dispatch }, { data }) => {
    commit("setLoading");
    investmentsService
      .createInvestmentWithDetails(data)
      .then(data => {
        commit("setLoading");
        if (data.status) {
          dispatch("alert/success", data.message, { root: true });
          commit("InvestmentSuccess");
        } else {
          dispatch("alert/success", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  createInvestment: (
    { commit, dispatch },
    { duration, amount, productId, ref }
  ) => {
    commit("setLoading");
    investmentsService
      .createNewInvestment(duration, amount, productId, ref)
      .then(data => {
        commit("setLoading");
        if (data.status) {
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/success", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  getInvestmentDetails: ({ commit, dispatch }, requestId) => {
    commit("setLoading");
    investmentsService
      .investmentDetails(requestId)
      .then(data => {
        commit("getInvestmentDetailsSuccess", data.data);
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  liquidateInvestment: (
    { commit, dispatch },
    { requestId, bankId, amount }
  ) => {
    commit("setLoading");
    investmentsService
      .liquidateInvestment(requestId, bankId, amount)
      .then(data => {
        commit("setLoading");
        if (data.status) {
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/success", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  terminateInvestment: ({ commit, dispatch }, { requestId, bankId }) => {
    commit("setLoading");
    investmentsService
      .terminateInvestment(requestId, bankId)
      .then(data => {
        commit("setLoading");
        if (data.status) {
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/success", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  topupInvestment: ({ commit, dispatch }, { requestId, amount, ref }) => {
    commit("setLoading");
    investmentsService
      .topupInvestment(requestId, amount, ref)
      .then(data => {
        commit("setLoading");
        if (data.status) {
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/success", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  rolloverInvestment: ({ commit, dispatch }, { requestId, duration }) => {
    commit("setLoading");
    investmentsService
      .rollOverInvestment(requestId, duration)
      .then(data => {
        commit("setLoading");
        if (data.status) {
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/success", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  }
};

const mutations = {
  setLoading(state) {
    state.loading = !state.loading;
    state.invLoading = !state.invLoading;
    state.showIframe = false;
    if (state.InvestmentSuccess != false) {
      state.InvestmentSuccess = false;
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
  InvestmentSuccess(state) {
    state.InvestmentSuccess = true;
  },
  gettingInvestments(state) {
    state.loading = true;
    state.investments = [];
  },
  gettingPendingInvestments(state) {
    state.loading = true;
  },
  getInvestmentSuccess(state, data) {
    state.status = { investments: true };
    state.investments = data;
    state.loading = false;
  },
  getInvestmentDetailsSuccess(state, data) {
    state.investmentDetails = data.loan;
    state.loading = false;
  },
  getPendingInvestmentSuccess(state, data) {
    state.pendingInvestments = data.loans;
    state.loading = false;
  },
  getPortfolioInvestmentSuccess(state, data) {
    state.investmentPortfolio = data.loans;
    state.loading = false;
  },
  getInvestmentHistorySuccess(state, data) {
    state.loading = false;
    state.investmentHistory = data.loans;
  },
  creatingInvestment(state) {
    state.loading = true;
  },
  investmentCreated(state, data) {
    state.loading = false;
    state.message = data.message;
    state.showAlert = data.status;
  },
  setAuthorizationUrl(state, data) {
    state.loading = false;
    state.authorizationUrl = data;
    state.showIframe = true;
  },
  setPaystackData(state, duration, amount, productId) {
    state.loading = false;
    state.paystackData = {
      duration: duration,
      amount: amount,
      productId: productId
    };
    router.push("/paystack");
  }
};
export const investments = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
