import axios from "axios";

function handleResponse(response) {
  return response
    .then(res => {
      if (res.status == 200) {
        return res.data;
      } else {
        return res.data;
        // console.log(res.data.message);
      }
    })
    .catch(error => {
      throw error;
    });
}

function getResidentTypes() {
  const response = axios.get(
    "https://mobile.creditclan.com/webapi/v1/residence_types",
    {
      headers: {
        "x-api-key":
          "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
      }
    }
  );

  return handleResponse(response);
}

function getStates() {
  const response = axios.get("https://mobile.creditclan.com/webapi/v1/states", {
    headers: {
      "x-api-key":
        "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
    }
  });

  return handleResponse(response);
}
function getLgas(stateId) {
  const response = axios.get(
    "https://mobile.creditclan.com/webapi/v1/states/" + stateId + "/lgas",
    {
      headers: {
        "x-api-key":
          "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
      }
    }
  );
  return handleResponse(response);
}

function getMaritalStatus() {
  const response = axios.get(
    "https://mobile.creditclan.com/webapi/v1/marital_status",
    {
      headers: {
        "x-api-key":
          "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
      }
    }
  );

  return handleResponse(response);
}
function getWorkSectors() {
  const response = axios.get(
    "https://mobile.creditclan.com/webapi/v1/work_sectors",
    {
      headers: {
        "x-api-key":
          "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
      }
    }
  );

  return handleResponse(response);
}
function getGenders() {
  const response = axios.get(
    "https://mobile.creditclan.com/webapi/v1/genders",
    {
      headers: {
        "x-api-key":
          "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
      }
    }
  );

  return handleResponse(response);
}
function getOccupations() {
  const response = axios.get(
    "https://mobile.creditclan.com/webapi/v1/occupations",
    {
      headers: {
        "x-api-key":
          "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
      }
    }
  );

  return handleResponse(response);
}
function getDesignations() {
  const response = axios.get(
    "https://mobile.creditclan.com/webapi/v1/designations",
    {
      headers: {
        "x-api-key":
          "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
      }
    }
  );

  return handleResponse(response);
}
export const genServices = {
  getResidentTypes,
  getStates,
  getLgas,
  getMaritalStatus,
  getWorkSectors,
  getGenders,
  getOccupations,
  getDesignations
};
