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
function getInvestments() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/investments/products",
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

function getInvestmentHistory() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/investment/history",
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
function initializePaystack(amount) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/gateway/initialize_transaction_test",
    {
      token: authHeader(),
      amount: amount
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

function createNewInvestment(duration, amount, productId, paystack) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/investment/create",
    {
      plan: {
        duration: duration,
        amount: amount,
        // eslint-disable-next-line @typescript-eslint/camelcase
        product_id: productId
      },
      token: authHeader(),
      paystack: {
        reference: paystack
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
function createInvestmentWithDetails(data) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/lender/apply",

    {
      avatar: data.profilePic,
      profile: {
        email: data.email,
        firstname: data.firstName,
        lastname: data.lastName,
        phone: data.phone,
        state: data.state,
        address: data.homeAddress,
        // eslint-disable-next-line @typescript-eslint/camelcase
        date_of_birth: data.dob
      },
      nok: {
        fullname: data.kinName,
        email: data.kinEmail,
        phone: data.kinPhone,
        address: data.kinAddress,
        relationship: data.relationship
      },
      account: {
        name: data.fullName,
        number: data.accountNo,
        bank: data.bankId,
        bvn: data.bvn
      },
      investment: {
        amount: data.amount,
        manager: data.manageType,
        duration: data.duration,
        // eslint-disable-next-line @typescript-eslint/camelcase
        interest_mode: data.interestType
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      user_id: data.userId
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

function getPendingInvestments() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/investment/pending",
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

function myInvestments() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/investment/portfolio",
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

function terminateInvestment(planId, bankId) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/user/investments/liquidate",
    {
      token: authHeader(),
      payload: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        plan_id: planId,
        // eslint-disable-next-line @typescript-eslint/camelcase
        withdrawal_bank_id: bankId
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
function liquidateInvestment(planId, bankId, amount) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/user/investments/liquidate",
    {
      token: authHeader(),
      payload: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        plan_id: planId,
        amount: amount,
        // eslint-disable-next-line @typescript-eslint/camelcase
        withdrawal_bank_id: bankId
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

function topupInvestment(planId, amount, ref) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/user/investments/topup",
    {
      payload: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        plan_id: planId,
        amount: amount
      },
      token: authHeader(),
      paystack: {
        reference: ref
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

function rollOverInvestment(planId, duration) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/user/investments/rollover",
    {
      token: authHeader(),
      payload: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        plan_id: planId,
        // eslint-disable-next-line @typescript-eslint/camelcase
        duration: duration
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

function investmentDetails(requestId) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/investment/details",
    {
      token: authHeader(),
      // eslint-disable-next-line @typescript-eslint/camelcase
      request_id: requestId
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
export const investmentsService = {
  getInvestments,
  createNewInvestment,
  getPendingInvestments,
  myInvestments,
  terminateInvestment,
  liquidateInvestment,
  topupInvestment,
  rollOverInvestment,
  investmentDetails,
  getInvestmentHistory,
  initializePaystack,
  createInvestmentWithDetails
};
