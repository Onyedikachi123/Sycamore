export default {
  state: {
    currentLoan: null,
    loanHistory: [],
    recentPayment: []
  },
  mutations: {
    setCurrentLoan: (state: any, value: any) => {
      state.currentLoan = value;
    },
    setLoanHistory: (state: any, value: any) => {
      state.loanHistory = value;
    },
    setRecentPayment: (state: any, value: any) => {
      state.recentPayment = value;
    }
  },
  actions: {},
  getters: {},
  namespaced: true
};
