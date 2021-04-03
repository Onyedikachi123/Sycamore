import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "../_store";
import axios from "axios";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/password",
    name: "Password",
    component: () =>
      import(/* webpackChunkName: "password" */ "../views/Password.vue")
  },
  {
    path: "/reset",
    name: "Reset",
    component: () =>
      import(/* webpackChunkName: "password" */ "../views/Reset.vue")
  },
  {
    path: "/",
    name: "Account Overview",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: "/user_details",
  //   name: "Users",
  //   component: () =>
  //     import(/* webpackChunkName: "users" */ "../views/Users.vue")
  // },
  // {
  //   path: "/bank_accounts",
  //   name: "Bank Accounts",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "bank_accounts" */ "../views/BankAccounts.vue"
  //     )
  // },
  {
    path: "/transaction_history",
    name: "Transaction History",
    component: () =>
      import(
        /* webpackChunkName: "transaction_history" */ "../views/TransactionHistory.vue"
      ),
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: "/investment_request",
  //   name: "Investment Request",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "investment_request" */ "../views/InvestmentRequest.vue"
  //     )
  // },
  {
    path: "/investments",
    name: "Investments Plans",
    component: () =>
      import(/* webpackChunkName: "investments" */ "../views/Investments.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/investments/apply",
    name: "Investment Application",
    component: () =>
      import(
        /* webpackChunkName: "investments/apply" */ "../views/NewInvestment.vue"
      ),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/loans",
    name: "Loans",
    component: () =>
      import(/* webpackChunkName: "loans" */ "../views/Loans.vue"),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/loans/apply",
    name: "Loans Application",
    component: () =>
      import(/* webpackChunkName: "loans" */ "../views/NewLoan.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/loans/payment",
    name: "Loan Payment",
    component: () =>
      import(/* webpackChunkName: "loans" */ "../views/LoanPayment.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/loans/:id",
    name: "Loan Details",
    component: () =>
      import(/* webpackChunkName: "loan_details" */ "../views/LoanDetails.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/savings",
    name: "Savings",
    component: () =>
      import(/* webpackChunkName: "savings" */ "../views/Savings.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/paystack",
    name: "Paystack",
    component: () =>
      import(/* webpackChunkName: "paystack" */ "../views/Paystack.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/cards_and_banks",
    name: "Cards And Banks",
    component: () =>
      import(
        /* webpackChunkName: "cards_and_banks" */ "../views/CardsAndBanks.vue"
      ),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/pending_savings",
    name: "Pending Savings",
    component: () =>
      import(
        /* webpackChunkName: "pending_savings" */ "../views/PendingSavings.vue"
      ),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import(/* webpackChunkName: "faq" */ "../views/Faq.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/investments/:id",
    name: "Investment Details",
    component: () =>
      import(
        /* webpackChunkName: "investment_details" */ "../views/InvestmentDetails.vue"
      ),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/investment/:id",
    name: "About Investment",
    component: () =>
      import(
        /* webpackChunkName: "investment_details" */ "../views/GenInvestmentDetails.vue"
      ),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  // const publicPages = ["/login", "/register"];
  // const authRequired = !publicPages.includes(to.path);
  // const loggedIn = localStorage.getItem("user");
  const loggedIn = store.state.account.user;
  // const isactive = store.state
  // console.log(loggedIn);
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem("token");
    if (loggedIn) {
      return next();
    } else if (token) {
      try {
        //network request
        const res = await axios.post(
          "https://mobile.creditclan.com/api/v3/user/details",
          { token },
          {
            headers: {
              "x-api-key":
                "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
            }
          }
        );
        store.commit("account/loginSuccess", res.data.data);
        next();
      } catch (error) {
        next("/login");
      }
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
