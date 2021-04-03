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
function getSavings() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/savings/portfolio",
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

function getSavingsHistory() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/savings/history",
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

function createNewSavings(
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
) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/apply_for_savings",
    {
      token: authHeader(),
      plan: {
        title: title,
        amount: amount,
        target: target,
        frequency: frequency,
        duration: duration,
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_date: startDate,
        // eslint-disable-next-line @typescript-eslint/camelcase
        funding_source: fundingSource,
        category: category,
        automated: automated
      },
      card: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        connected_card_id: connectCardId
      }
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

export const savingsService = {
  getSavings,
  createNewSavings,
  getSavingsHistory
};
