import { genServices } from "../../_services/genServices";

const state = {
  residentTypes: [],
  states: [],
  lgas: [],
  maritalStatuses: [],
  workSectors: [],
  genders: [],
  occupations: [],
  designations: []
};

const actions = {
  getResidentTypes: ({ commit, dispatch }) => {
    genServices
      .getResidentTypes()
      .then(data => {
        if (data.status) {
          commit("residentTypeSuccess", data.data);
        } else {
          dispatch("alert/error", "Error fetching resident types", {
            root: true
          });
        }
        error => {
          dispatch("alert/error", error, { root: true });
        };
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  getStates({ commit, dispatch }) {
    genServices
      .getStates()
      .then(data => {
        if (data.status) {
          commit("getStatesSuccess", data.data);
        } else {
          dispatch("alert/error", "Error fetching states", { root: true });
        }

        error => {
          dispatch("alert/error", error, { root: true });
        };
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  getLgas({ commit, dispatch }, { stateId }) {
    genServices
      .getLgas(stateId)
      .then(data => {
        if (data.status) {
          commit("getLgasSuccess", data.data);
        } else {
          dispatch("alert/error", "Error fetching states", { root: true });
        }

        error => {
          dispatch("alert/error", error, { root: true });
        };
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },

  getMaritalStatus({ commit, dispatch }) {
    genServices.getMaritalStatus().then(data => {
      if (data.status) {
        commit("getMaritalStatusSuccess", data.data);
      } else {
        dispatch("alert/error", "Error fetching states", { root: true });
      }

      error => {
        dispatch("alert/error", error, { root: true });
      };
    });
  },
  getWorkSectors({ commit, dispatch }) {
    genServices
      .getWorkSectors()
      .then(data => {
        if (data.status) {
          commit("getWorkSectorsSuccess", data.data);
        } else {
          dispatch("alert/error", "Error fetching states", { root: true });
        }

        error => {
          dispatch("alert/error", error, { root: true });
        };
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  getGenders({ commit, dispatch }) {
    genServices
      .getGenders()
      .then(data => {
        if (data.status) {
          commit("getGendersSuccess", data.data);
        } else {
          dispatch("alert/error", "Error fetching states", { root: true });
        }

        error => {
          dispatch("alert/error", error, { root: true });
        };
      })
      .catch(error => {
        dispatch("alert/error", error, { root: true });
      });
  },
  getOccupations({ commit, dispatch }) {
    genServices.getOccupations().then(data => {
      if (data.status) {
        commit("getOccupationsSuccess", data.data);
      } else {
        dispatch("alert/error", "Error fetching states", { root: true });
      }

      error => {
        dispatch("alert/error", error, { root: true });
      };
    });
  },
  getDesignations({ commit, dispatch }) {
    genServices.getDesignations().then(data => {
      if (data.status) {
        commit("getDesignationsSuccess", data.data);
      } else {
        dispatch("alert/error", "Error fetching states", { root: true });
      }

      error => {
        dispatch("alert/error", error, { root: true });
      };
    });
  }
};

const mutations = {
  setLoading(state) {
    state.loading = !state.loading;
  },
  residentTypeSuccess(state, data) {
    state.residentTypes = data;
  },
  getStatesSuccess(state, data) {
    state.states = data;
  },
  getLgasSuccess(state, data) {
    state.lgas = data;
  },
  getMaritalStatusSuccess(state, data) {
    state.maritalStatuses = data;
  },
  getWorkSectorsSuccess(state, data) {
    state.workSectors = data;
  },
  getGendersSuccess(state, data) {
    state.genders = data;
  },
  getOccupationsSuccess(state, data) {
    state.occupations = data;
  },
  getDesignationsSuccess(state, data) {
    state.designations = data;
  }
};

export const general = {
  namespaced: true,
  state,
  actions,
  mutations
};
