/* eslint-disable @typescript-eslint/camelcase */
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
function getCurrentloan() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/current/loan",
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

function getLoansHistory() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/loan/history",
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

function getLoanDetails(id) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/loan/details",
    {
      token: authHeader(),
      request_id: id
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
function getLoanSchedule(id) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/loan/schedule",
    {
      token: authHeader(),
      request_id: id
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
function cancelLoanRequest(id) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/cancel/loan",
    {
      token: authHeader(),
      request_id: id
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
function createNewLoan(
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

function newLoan(data) {
  const response = axios.post(
    "https://mobile.creditclan.com/webapi/v1/loan/cashadvancereapply",
    {
      token: authHeader(),
      loan: null,
      avatar: data.profilePic,
      profile: {
        email: data.email,
        fullname: data.fullName,
        phone: data.phone,
        state: data.state,
        address: data.homeAddress,
        dob: data.dob
      },
      account: {
        name: data.fullName,
        number: data.accountNo,
        bank: data.bankId,
        bvn: data.bvn
      },
      nok: {
        fullname: data.kinName,
        email: data.kinEmail,
        phone: data.kinPhone,
        address: data.kinAddress,
        relationship: data.relationship
      },
      income: {
        occupation: data.occupation,
        net_monthly_income: data.monthlyIncome,
        sector: data.workSector,
        address: data.workAddress
      },
      card: {},
      user_id: data.userId,
      request_period_id: 2,
      attachments: [
        {
          type: "bank_statement",
          uploaded: data.bankStatement,
          file_name: data.bankStatementFile
        },
        {
          type: "valid_id",
          uploaded: data.validId,
          file_name: data.validIdFile
        },
        {
          type: "utility",
          uploaded: data.utility,
          file_name: data.utilityFile
        }
      ],
      new_card_added: false,
      amount: data.amount,
      request_tenor: data.duration
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
function repayLoan(data) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/loan/make/payment",
    {
      token: authHeader(),
      reference: data.ref,
      request_id: data.requestId
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
  getCurrentloan,
  createNewLoan,
  getLoansHistory,
  getLoanDetails,
  newLoan,
  repayLoan,
  cancelLoanRequest,
  getLoanSchedule
};
