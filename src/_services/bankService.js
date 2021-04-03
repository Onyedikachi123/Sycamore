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
function getBanks() {
  const response = axios.get("https://mobile.creditclan.com/webapi/v1/banks", {
    headers: {
      "x-api-key":
        "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
    }
  });
  return handleResponse(response);
}

function getCards() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/cards",
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

function getBankAccounts() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/accounts",
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

function getWallet() {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/wallet/snapshot",
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
function resolveBankAccount(acctNo, bankCode) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/user/account/resolve",
    {
      token: authHeader(),
      // eslint-disable-next-line @typescript-eslint/camelcase
      account_number: acctNo,
      // eslint-disable-next-line @typescript-eslint/camelcase
      bank_code: bankCode
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

function saveBankAccount(acctName, accountNo, bankId) {
  // console.log(accountNo, acctName, bankId);
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/user/account/save",
    {
      token: authHeader(),
      // eslint-disable-next-line @typescript-eslint/camelcase
      account_number: accountNo,
      // eslint-disable-next-line @typescript-eslint/camelcase
      bank_id: bankId,
      // eslint-disable-next-line @typescript-eslint/camelcase
      account_name: acctName
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

function saveCard(ref) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/add/test/card",
    {
      token: authHeader(),
      reference: ref
      // eslint-disable-next-line @typescript-eslint/camelcase
      // account_number: accountNo,
      // // eslint-disable-next-line @typescript-eslint/camelcase
      // bank_id: bankId,
      // // eslint-disable-next-line @typescript-eslint/camelcase
      // account_name: acctName
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

function initialiseCard(amount) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/gateway/initialize_transaction",
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

function fundWallet(ref) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/user/wallet/topup",
    {
      token: authHeader(),
      reference: ref
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

function withdrawWalletFunds(accountId, amount) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/user/wallet/walletwithdraw",
    {
      token: authHeader(),
      payload: {
        amount: amount,
        // eslint-disable-next-line @typescript-eslint/camelcase
        account_selected: accountId
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
export const banksService = {
  getBanks,
  resolveBankAccount,
  saveBankAccount,
  getBankAccounts,
  saveCard,
  initialiseCard,
  getCards,
  getWallet,
  fundWallet,
  withdrawWalletFunds
};
