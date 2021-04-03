import { banksService } from "../../_services/bankService";
// import router from "../../router/index";

const state = {
  type: null,
  banks: [],
  cards: [],
  wallet: null,
  bankAccounts: [],
  loading: false,
  userDetails: null,
  error: false,
  success: false,
  message: null,
  bankLoading: false,
  authorizationUrl: "",
  accessCode: "",
  reference: ""
};

const actions = {
  // getBanks: ({ commit }) => {
  //   commit("fetchingBanks");
  //   banksService.getBanks().then(res => {
  //     commit("getBanksSuccess", res.data);
  //   });
  // },

  getBankAccounts: ({ commit, dispatch }) => {
    commit("setLoading");
    banksService
      .getBankAccounts()
      .then(data => {
        if (data.status) {
          commit("getBankAccountsSuccess", data);
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/error", data.message, { root: true });
        }

        error => {
          dispatch("alert/error", error, { root: true });
        };
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  resolveBankAccount: ({ commit, dispatch }, { accountNo, bankCode }) => {
    commit("GetttingAccount");
    banksService
      .resolveBankAccount(accountNo, bankCode)
      .then(data => {
        if (data.status) {
          commit("resolveBankAccountSuccess", data.data);
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/error", data.message, { root: true });
          commit("resolveBankAccountFailed");
        }

        error => {
          dispatch("alert/error", error, { root: true });
        };
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },

  saveBankAccount: (
    { commit, dispatch },
    { accountName, accountNo, bankId }
  ) => {
    commit("SavingBankAccount");
    banksService
      .saveBankAccount(accountName, accountNo, bankId)
      .then(data => {
        if (data.status) {
          dispatch("getBankAccounts");
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/error", data.message, { root: true });
        }

        error => {
          dispatch("alert/error", error, { root: true });
        };
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  saveCard: ({ commit, dispatch }, { ref }) => {
    commit("savingCard");
    banksService
      .saveCard(ref)
      .then(data => {
        if (data.status) {
          dispatch("alert/success", "Card saved Successfully", { root: true });
          dispatch("getCards");
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  initialiseCard: ({ commit }) => {
    commit("savingCard");
    banksService
      .initialiseCard("1")
      .then(data => {
        console.log("initialiseCard");
        console.log(data);
        commit("getPaystackData", data);
        // if (data.status) {
        //   dispatch("alert/success", "Card saved Successfully", { root: true });
        //   dispatch("getCards");
        // } else {
        //   dispatch("alert/error", data.message, { root: true });
        // }
      })
      .catch(error => {
        console.log(error);
      });
  },
  fundWallet: ({ commit, dispatch }, { ref }) => {
    commit("setLoading");
    banksService
      .fundWallet(ref)
      .then(data => {
        commit("setLoading");
        if (data.status) {
          dispatch("alert/success", data.message, { root: true });
          dispatch("getWallet");
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },

  withdrawWalletFunds: ({ commit, dispatch }, { accountId, amount }) => {
    commit("setLoading");
    banksService
      .withdrawWalletFunds(accountId, amount)
      .then(data => {
        if (data.status) {
          dispatch("alert/success", data.message, { root: true });
          dispatch("getWallet");
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  getCards: ({ commit, dispatch }) => {
    commit("setLoading");
    banksService
      .getCards()
      .then(data => {
        if (data.status) {
          commit("getCardsSuccess", data);
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
        error => {
          dispatch("alert/error", error, { root: true });
        };
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  getWallet: ({ commit, dispatch }) => {
    commit("setLoading");
    banksService
      .getWallet()
      .then(data => {
        commit("getWalletSuccess", data);
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  }
};

const mutations = {
  setLoading(state) {
    state.loading = true;
  },

  fetchingBanks(state) {
    state.loading = true;
  },

  getBanksSuccess(state, data) {
    state.status = true;
    state.banks = data;
    state.loading = false;
  },

  getPaystackData(state, data) {
    state.authorizationUrl = data["authorization_url"];
    state.accessCode = data["access_code"];
    state.reference = data["reference"];
  },

  getCardsSuccess(state, data) {
    state.status = true;
    state.cards = data.data;
    state.loading = false;
  },

  getWalletSuccess(state, data) {
    state.status = true;
    state.wallet = data.data;
    state.loading = false;
  },
  getBankAccountsSuccess(state, data) {
    state.status = true;
    state.bankAccounts = data.data;
    state.banks = data.banks_list;
    state.loading = false;
  },

  GetttingAccount(state) {
    state.loading = true;
  },
  SavingBankAccount(state) {
    state.loading = true;
  },

  bankAccountSaved(state) {
    state.loading = false;
  },
  savingCard(state) {
    state.loading = true;
  },

  cardSaved(state) {
    state.loading = false;
  },
  resolveBankAccountSuccess(state, data) {
    state.loading = false;
    state.userDetails = data;
  },
  resolveBankAccountFailed(state) {
    state.loading = false;
    state.userDetails = null;
  }
};
export const banks = {
  namespaced: true,
  state,
  actions,
  mutations
};
