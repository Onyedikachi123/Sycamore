import Vue from "vue";
import Vuex from "vuex";
import VueSweetAlert from "vue-sweetalert";

import { users } from "./modules/users";
import { account } from "./modules/account";
import { alert } from "./modules/alert";
import { loanMenu } from "./modules/loanMenu";
import { investments } from "./modules/investments";
import { savings } from "./modules/savings";
import { banks } from "./modules/banks";
import { loans } from "./modules/loans";
import { transactions } from "./modules/transactions";
import { general } from "./modules/general";

Vue.use(Vuex);

Vue.use(VueSweetAlert);

const store: any = new Vuex.Store({
  modules: {
    loanMenu,
    alert,
    account,
    users,
    investments,
    savings,
    banks,
    loans,
    transactions,
    general
  }
});

export default store;
