import { authHeader } from "../_helpers/auth-header";
import axios from "axios";
function handleResponse(response) {
  return response
    .then(res => {
      if (res.status == 200) {
        return res.data;
      } else {
        return res.data;
      }
    })
    .catch(error => {
      throw error;
    });
}
function getTransactions() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/recent_transactions",
    {
      token: authHeader()
    },

    {
      headers: {
        "x-api-key":
          "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
      }
    }
  );
  return handleResponse(response);
}

export const loansService = {
  getTransactions
};
