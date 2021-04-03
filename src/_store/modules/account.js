import { userService } from "../../_services";
import router from "../../router";

const user = JSON.parse(localStorage.getItem("user"));
const state = user
  ? {
      status: { loggedIn: true },
      userType: false,
      user,
      userData: null,
      firstName: "",
      lastName: "",
      loading: false,
      error: false,
      success: false,
      message: "",
      bvnLoading: false,
      txnRef: "",
      bvnStep: 1
    }
  : {
      status: {},
      user: null,
      loading: false,
      error: false,
      success: false,
      message: ""
    };

const actions = {
  login({ dispatch, commit }, { email, password }) {
    commit("loginRequest", { email });

    userService.login(email, password).then(
      user => {
        if (user.status) {
          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(user));
          commit("loginSuccess", user);
        } else {
          dispatch("alert/error", user.message, { root: true });
          commit("setLoading");
        }
      },
      error => {
        // commit("loginFailure", error);
        commit("setLoading");
        dispatch("alert/error", error, { root: true });
      }
    );
  },
  getUserDetails({ commit, dispatch }) {
    userService
      .getUserDetails()
      .then(data => {
        if (data.status) {
          commit("getUserDetailsSuccess", data.data);
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  reset({ dispatch, commit }, { email }) {
    commit("setLoading");

    userService.reset(email).then(data => {
      if (data.status) {
        dispatch("alert/success", data.message, { root: true });
        commit("setLoading");
      } else {
        dispatch("alert/error", data.message, { root: true });
        commit("setLoading");
      }
      error => {
        // commit("registerFailure", error);
        dispatch("alert/error", error, { root: true });
        commit("setLoading");
      };
    });
  },
  changeUserType({ commit }) {
    commit("changeUserType");
    router.push("/");
    // dispatch(userType);
  },
  logout({ commit }) {
    userService.logout();
    commit("logout");
    window.location.href = "/login";
  },
  register({ dispatch, commit }, user) {
    commit("registerRequest", user);

    userService.register(user).then(
      user => {
        commit("registerSuccess", user);
        window.location.href = "/login";
        setTimeout(() => {
          // display success message after route change completes
          dispatch("alert/success", "Registration successful", { root: true });
        });
      },
      error => {
        commit("registerFailure", error);
        dispatch("alert/error", error, { root: true });
      }
    );
  },
  changePassword({ commit, dispatch }, { password, confirmPassword }) {
    commit("setLoading");
    userService.changePassword(password, confirmPassword).then(data => {
      commit("setLoading");
      if (data.status) {
        dispatch("alert/success", data.message, { root: true });
      } else {
        dispatch("alert/error", "Passwords do not match. Try again!", {
          root: true
        });
      }
      error => {
        dispatch("alert/error", error, { root: true });
      };
    });
  },
  verifyBvn({ commit, dispatch }, { bvn: bvn }) {
    commit("setbvnLoading");
    userService
      .verifyBvn(bvn)
      .then(data => {
        commit("setbvnLoading");
        if (data.status) {
          dispatch("alert/success", data.data.message, { root: true });
          commit("setTxnRef", data.data.TXN_REF);
        } else {
          dispatch("alert/error", data.data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  validateBvn({ commit, dispatch }, { otp: otp, txnRef: txnRef }) {
    commit("setbvnLoading");
    userService
      .validateBvn(otp, txnRef)
      .then(data => {
        commit("setbvnLoading");
        if (data.status) {
          dispatch("alert/success", data.message, { root: true });
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  updateProfile(
    { commit, dispatch },
    {
      legalName,
      dob,
      gender,
      maritalStatus,
      homeAddress,
      homeState,
      homeLga,
      noOfYears,
      occupation,
      workSector,
      monthlyIncome,
      companyName,
      workAddress,
      startYear,
      designation,
      officialEmail,
      nokName,
      nokEmail,
      nokPhone,
      nokAddress,
      nokRelationship,
      profilePic
    }
  ) {
    commit("setLoading");
    userService
      .updateProfile(
        legalName,
        dob,
        gender,
        maritalStatus,
        homeAddress,
        homeState,
        homeLga,
        noOfYears,
        occupation,
        workSector,
        monthlyIncome,
        companyName,
        workAddress,
        startYear,
        designation,
        officialEmail,
        nokName,
        nokEmail,
        nokPhone,
        nokAddress,
        nokRelationship,
        profilePic
      )
      .then(data => {
        commit("setLoading");
        if (data.status) {
          dispatch("alert/success", "Profile updated successfully", {
            root: true
          });
          dispatch("getUserDetails");
        } else {
          dispatch("alert/error", data.message, { root: true });
        }
      })
      .catch(error => dispatch("alert/error", error, { root: true }));
  }
};

const mutations = {
  setLoading(state) {
    state.loading = !state.loading;
  },

  setbvnLoading(state) {
    state.bvnLoading = !state.bvnLoading;
  },
  setTxnRef(state, data) {
    state.txnRef = data;
    state.bvnStep++;
  },
  setError(state, message) {
    state.loading = false;
    state.error = true;
    state.message = message;
    setTimeout(() => {
      state.error = false;
      state.message = null;
    }, 10000);
  },
  setSuccessMessage(state, message) {
    state.loading = false;
    state.success = true;
    state.message = message;
    setTimeout(() => {
      state.message = null;
      state.success = false;
    }, 10000);
  },
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
    state.loading = true;
  },
  loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
    state.loading = false;
    window.location.href = "/";
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
    state.loading = false;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  registerRequest(state) {
    state.status = { registering: true };
    state.loading = true;
  },
  registerSuccess(state) {
    state.status = {};
    state.loading = false;
  },
  registerFailure(state) {
    state.status = {};
    state.loading = false;
  },
  changeUserType: state => {
    state.userType = !state.userType;
  },
  getUserDetailsSuccess: (state, data) => {
    state.userData = data;
  }
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
};
