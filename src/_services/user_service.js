/* eslint-disable @typescript-eslint/camelcase */
import { authHeader } from "../_helpers/auth-header";
import axios from "axios";

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}
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

async function login(email, password) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/login",
    {
      email: email,
      password: password
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

async function getUserDetails() {
  const res = axios.post(
    "https://mobile.creditclan.com/api/v3/user/details",
    { token: authHeader() },
    {
      headers: {
        "x-api-key":
          "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
      }
    }
  );
  return handleResponse(res);
}
async function reset(email) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/reset/password",
    {
      EMAIL: email
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

async function changePassword(password, confirmpassword) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/user/change_password",
    {
      token: authHeader(),
      password: password,
      // eslint-disable-next-line @typescript-eslint/camelcase
      confirm_password: confirmpassword
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

async function verifyBvn(bvn) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/validate_customer_bvn",
    {
      bvn: bvn
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

async function validateBvn(otp, txnref) {
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/validate_customer_bvn_otp",
    {
      txn: txnref,
      otp: otp
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

async function updateProfile(
  legalName,
  dob,
  gender,
  maritalStatus,
  homeAddress,
  homeState,
  homeLga,
  NoOfYears,
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
) {
  console.log(officialEmail);
  const response = axios.post(
    "https://mobile.creditclan.com/api/v3/customer/save_data",
    {
      token: authHeader(),
      profile: {
        legal_name: legalName,
        date_of_birth: dob,
        birth_year: dob,
        birth_month: dob,
        birth_day: dob,
        gender: gender,
        marital_status: maritalStatus,
        file_name: profilePic
      },

      next_of_kin: {
        nok_name: nokName,
        nok_email: nokEmail,
        nok_address: nokAddress,
        nok_phone: nokPhone,
        nok_relationship: nokRelationship
      },
      home_address: {
        home_address: homeAddress,
        home_state: homeState,
        home_lga: homeLga,
        number_of_years: NoOfYears
      },
      work: {
        occupation_id: occupation,
        work_sector: workSector,
        net_monthly_income: monthlyIncome,
        gross_annual: null,
        company_name: companyName,
        work_address: workAddress,
        start_month: startYear,
        start_year: startYear,
        designation_id: designation,
        official_email: officialEmail
      }
      // eslint-disable-next-line @typescript-eslint/camelcase
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

export const userService = {
  getUserDetails,
  login,
  logout,
  reset,
  changePassword,
  updateProfile,
  verifyBvn,
  validateBvn
};
