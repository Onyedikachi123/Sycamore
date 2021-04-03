<template>
  <v-container class="profile" fluid>
    <v-snackbar
      fixed
      top
      color="secondary"
      elevation="24"
      v-model="thisError"
      :timeout="3000"
      class="snackbar"
    >
      {{ thisMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="thisError = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      fixed
      top
      color="success"
      elevation="24"
      v-model="thisSuccess"
      :timeout="3000"
      class="snackbar"
    >
      {{ thisMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="thisSuccess = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-row justify="center">
      <v-col cols="12" md="6" sm="12">
        <v-card class="py-5 px-10" v-if="step === 0">
          <v-list-item-content class="mb-5">
            <v-list-item-title class="title">
              Provide your personal information
            </v-list-item-title>
            <v-list-item-subtitle>All fields are required</v-list-item-subtitle>
          </v-list-item-content>
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submitFirst">
              <validation-provider
                v-slot="{ errors }"
                name="First Name"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="profileData.firstName"
                  :error-messages="errors"
                  label="First Name"
                  required
                  disabled
                  outlined
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="Last Name"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="profileData.lastName"
                  :error-messages="errors"
                  label="Last Name"
                  required
                  disabled
                  outlined
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="profileData.email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                  disabled
                  outlined
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="phoneNumber"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="profileData.phone"
                  :error-messages="errors"
                  label="Phone Number"
                  required
                  disabled
                  outlined
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="Date of birth"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="profileData.dob"
                  :error-messages="errors"
                  required
                  label="Date of Birth"
                  disabled
                  outlined
                  type="date"
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="Address"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="profileData.homeAddress"
                  :error-messages="errors"
                  required
                  label="Address"
                  outlined
                ></v-text-field>
              </validation-provider>

              <div class="btn-block">
                <v-btn
                  :loading="loading"
                  :disabled="invalid || loading"
                  type="submit"
                  style="font-size: 14.26px; outline: none"
                  color="primary"
                >
                  NEXT
                  <span>
                    <v-icon icon="chevron-right" class="card-icons"></v-icon>
                  </span>
                </v-btn>
              </div>
            </form>
          </validation-observer>
        </v-card>
        <v-card class="py-5 px-10" v-if="step === 1">
          <v-list-item-content class="mb-5">
            <v-list-item-title class="title">
              Upload your profile picture
            </v-list-item-title>
            <v-list-item-subtitle
              >Please upload a picture or <strong>skip</strong> this
              step</v-list-item-subtitle
            >
          </v-list-item-content>
          <validation-observer ref="observer">
            <form @submit.prevent="submitSecond">
              <v-row justify="center" class=" ma-14">
                <div style="width:150px;" @click="$refs.file.click()">
                  <v-badge icon="mdi-pencil" bottom overlap>
                    <v-avatar size="150">
                      <img
                        id="avatar"
                        :src="profileData.profilePic"
                        :alt="user.full_name"
                      /> </v-avatar
                  ></v-badge>
                </div>
                <!-- image input: style is set to hidden and assigned a ref so that it can be triggered -->
                <input
                  type="file"
                  ref="file"
                  :name="uploadFieldName"
                  @change="
                    onFileChange($event.target.name, $event.target.files)
                  "
                  style="display:none"
                />
              </v-row>

              <div style="display: flex; margin-top: 50px">
                <v-btn
                  color="primary"
                  @click="step--"
                  class="back"
                  type="button"
                >
                  <span>
                    <v-icon dark>
                      mdi-chevron-left
                    </v-icon>
                  </span>
                  BACK
                </v-btn>

                <v-spacer></v-spacer>
                <v-btn
                  :loading="loading"
                  :disabled="loading"
                  type="submit"
                  style="font-size: 14.26px; outline: none"
                  color="primary"
                >
                  NEXT
                  <span>
                    <v-icon icon="chevron-right" class="card-icons"></v-icon>
                  </span>
                </v-btn>
              </div>
            </form>
          </validation-observer>
        </v-card>
        <v-card class="py-5 px-10" v-if="step === 2">
          <v-list-item-content class="mb-5">
            <v-list-item-title class="title">
              Provide your next of kin information
            </v-list-item-title>
            <v-list-item-subtitle>All fields are required</v-list-item-subtitle>
          </v-list-item-content>
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submitThird">
              <validation-provider
                v-slot="{ errors }"
                name="First Name"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="profileData.kinFirstName"
                  :error-messages="errors"
                  label="First Name"
                  required
                  disabled
                  outlined
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="Last Name"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="profileData.kinLastName"
                  :error-messages="errors"
                  label="Last Name"
                  required
                  disabled
                  outlined
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="profileData.kinEmail"
                  :error-messages="errors"
                  label="E-mail"
                  required
                  disabled
                  outlined
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="phoneNumber"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="profileData.kinPhone"
                  :error-messages="errors"
                  label="Phone Number"
                  required
                  disabled
                  outlined
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="Address"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="profileData.kinAddress"
                  :error-messages="errors"
                  required
                  label="Address"
                  outlined
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="Relationship"
                :rules="{
                  required: true
                }"
              >
                <v-select
                  v-model="profileData.relationship"
                  :items="relationships"
                  :error-messages="errors"
                  label="Select"
                  data-vv-name="select"
                  required
                  outlined
                ></v-select>
              </validation-provider>
              <div style="display: flex; margin-top: 50px">
                <v-btn
                  color="primary"
                  @click="step--"
                  class="back"
                  type="button"
                >
                  <span>
                    <v-icon dark>
                      mdi-chevron-left
                    </v-icon>
                  </span>
                  BACK
                </v-btn>

                <v-spacer></v-spacer>
                <v-btn
                  :loading="thisLoading"
                  :disabled="invalid || thisLoading"
                  type="submit"
                  style="font-size: 14.26px; outline: none"
                  color="primary"
                >
                  NEXT
                  <span>
                    <v-icon icon="chevron-right" class="card-icons"></v-icon>
                  </span>
                </v-btn>
              </div>
            </form>
          </validation-observer>
        </v-card>
        <v-card class="py-5 px-10" v-if="step === 3">
          <v-list-item-content class="mb-5">
            <v-list-item-title class="title">
              Provide your account information
            </v-list-item-title>
            <v-list-item-subtitle>All fields are required</v-list-item-subtitle>
          </v-list-item-content>
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submitFourth">
              <validation-provider
                v-slot="{ errors }"
                name="BVN"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="profileData.bvn"
                  :error-messages="errors"
                  label="BVN"
                  required
                  outlined
                  type="number"
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="select"
                :rules="{
                  required: true
                }"
              >
                <v-select
                  v-model="profileData.bankCode"
                  :items="banks"
                  :error-messages="errors"
                  label="Bank"
                  name="bank_name"
                  item-text="bank_name"
                  item-value="bank_code"
                  data-vv-name="banks"
                  required
                  outlined
                  @change="getBank"
                ></v-select>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="Account Number"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="profileData.accountNo"
                  :error-messages="errors"
                  label="Account Number"
                  required
                  outlined
                  type="number"
                ></v-text-field>
              </validation-provider>

              <div style="display: flex; margin-top: 50px">
                <v-btn
                  color="primary"
                  @click="step--"
                  class="back"
                  type="button"
                >
                  <span>
                    <v-icon dark>
                      mdi-chevron-left
                    </v-icon>
                  </span>
                  BACK
                </v-btn>

                <v-spacer></v-spacer>
                <v-btn
                  :loading="thisLoading"
                  :disabled="invalid || thisLoading"
                  type="submit"
                  style="font-size: 14.26px; outline: none"
                  color="primary"
                >
                  NEXT
                  <span>
                    <v-icon icon="chevron-right" class="card-icons"></v-icon>
                  </span>
                </v-btn>
              </div>
            </form>
          </validation-observer>
        </v-card>
        <v-card class="py-5 px-10" v-if="step === 4">
          <v-list-item-content class="mb-5">
            <v-list-item-title class="title">
              Provide your lending information
            </v-list-item-title>
            <v-list-item-subtitle>All fields are required</v-list-item-subtitle>
          </v-list-item-content>
          <v-radio-group v-model="manageType" class="mb-5">
            <v-radio
              label="Let Sycamore manage all my investments"
              :value="1"
            ></v-radio>
            <v-radio
              label="I will manage all my investments myself"
              :value="2"
            ></v-radio>
          </v-radio-group>
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submitFifth">
              <validation-provider
                v-slot="{ errors }"
                name="Amount"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="amount"
                  :error-messages="errors"
                  label="How much are you looking to lend?"
                  required
                  outlined
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-if="manageType == 1"
                v-slot="{ errors }"
                name="duration"
                :rules="{
                  required: true
                }"
              >
                <v-select
                  v-model="duration"
                  :items="durations"
                  :error-messages="errors"
                  label="For how long"
                  name="duration"
                  item-text="text"
                  item-value="value"
                  data-vv-name="duration"
                  required
                  outlined
                ></v-select>
              </validation-provider>
              <validation-provider
                v-if="manageType == 1"
                v-slot="{ errors }"
                name="interest"
                :rules="{
                  required: true
                }"
              >
                <v-select
                  v-model="interestType"
                  :items="interestTypes"
                  :error-messages="errors"
                  label="How would you like your interest payment"
                  name="duration"
                  item-text="text"
                  item-value="value"
                  data-vv-name="duration"
                  required
                  outlined
                ></v-select>
              </validation-provider>
              <div style="display: flex; margin-top: 50px">
                <v-btn
                  color="primary"
                  @click="step--"
                  class="back"
                  type="button"
                >
                  <span>
                    <v-icon dark>
                      mdi-chevron-left
                    </v-icon>
                  </span>
                  BACK
                </v-btn>

                <v-spacer></v-spacer>
                <v-btn
                  :loading="thisLoading"
                  :disabled="invalid || thisLoading"
                  type="submit"
                  style="font-size: 14.26px; outline: none"
                  color="primary"
                >
                  NEXT
                  <span>
                    <v-icon icon="chevron-right" class="card-icons"></v-icon>
                  </span>
                </v-btn>
              </div>
            </form>
          </validation-observer>
        </v-card>
        <v-card class="py-5 px-10" v-if="step === 5">
          <v-list-item-content class="mb-5">
            <v-list-item-title class="title">
              Fund your wallet
            </v-list-item-title>
            <v-list-item-subtitle
              >This is required to process this
              application</v-list-item-subtitle
            >
          </v-list-item-content>
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="">
              <div class="text-center p-5">
                <div class="mt-5" v-if="walletFundType">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <v-card class="pa-2" outlined tile>
                        GT Bank - SIS Ltd/Partners Wallet - 0488435962
                      </v-card>
                    </v-col>
                    <v-col cols="12">
                      <v-card class="pa-2" outlined tile>
                        Zenith Bank - Sycamore Int. Sol. Ltd - Partners Wallet -
                        1016987105
                      </v-card>
                    </v-col>
                    <v-col cols="12">
                      <v-card class="pa-2" outlined tile>
                        Access Bank - Sycamore Int. Sol. Ltd - Partners Wallet -
                        1237855667
                      </v-card>
                    </v-col>
                  </v-row>
                  <p class="mt-5">
                    To fund your wallet manually, make a deposit of the
                    specified amount to any of the banks above. Contact us
                    through email to confirm your deposit
                  </p>
                </div>
                <div class="" v-else>
                  <v-avatar color="grey" size="62">
                    <v-icon dark>
                      mdi-wallet
                    </v-icon>
                  </v-avatar>
                  <div class="py-5">
                    <h3>&#8358; {{ amount }}</h3>
                  </div>
                  <div class="py-5">
                    <p>
                      Go back to the previous page if you wish to change the
                      amount
                    </p>
                  </div>
                  <div class="my-5">
                    <paystack
                      :amount="Number(amount) * 100"
                      :email="$store.state.account.user.data.email"
                      :paystackkey="paystackkey"
                      :reference="reference"
                      :callback="callback"
                      :close="close"
                      :embed="false"
                      class="ma-2 white--text"
                      style="background-color: purple"
                    >
                      Fund Wallet
                      <v-icon right dark>
                        mdi-cash
                      </v-icon>
                    </paystack>
                  </div>
                </div>
                <div class="py-5 mt-5">
                  <v-checkbox
                    v-model="walletFundType"
                    label="I will fund my wallet manually"
                  ></v-checkbox>
                </div>
              </div>

              <div style="display: flex; margin-top: 50px">
                <v-btn
                  color="primary"
                  @click="step--"
                  class="back"
                  type="button"
                >
                  <span>
                    <v-icon dark>
                      mdi-chevron-left
                    </v-icon>
                  </span>
                  BACK
                </v-btn>

                <v-spacer></v-spacer>
                <v-btn
                  :loading="invLoading"
                  :disabled="invalid || invLoading"
                  @click="applyNow"
                  style="font-size: 14.26px; outline: none"
                  color="primary"
                >
                  NEXT
                  <span>
                    <v-icon icon="chevron-right" class="card-icons"></v-icon>
                  </span>
                </v-btn>
              </div>
            </form>
          </validation-observer>
        </v-card>
        <v-card class="py-5 px-10" v-if="step === 6">
          <div class="text-center p-5">
            <div class="success-image">
              <v-img
                alt="SUCCESS"
                contain
                height="300"
                :src="require('../assets/successscreen.png')"
                transition="scale-transition"
                width="auto"
              />
            </div>
            <v-list-item-content class="mb-5">
              <v-list-item-title class="title">
                Application successful
              </v-list-item-title>
              <v-list-item-subtitle
                >Your application is currently under review, you will likely be
                funded in the next hour!</v-list-item-subtitle
              >
            </v-list-item-content>
          </div>

          <div style="display: flex; margin-top: 50px" justify="center">
            <v-spacer></v-spacer>
            <v-btn
              to="/"
              style="font-size: 14.26px; outline: none"
              color="primary"
            >
              Back to dashboard
              <span>
                <v-icon icon="chevron-right" class="card-icons"></v-icon>
              </span>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { authHeader } from "@/_helpers/auth-header";
import { mapState, mapActions, mapGetters } from "vuex";
import Vue from "vue";
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";
import paystack from "vue-paystack";
import axios from "axios";
setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})"
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}"
});

extend("email", {
  ...email,
  message: "Email must be valid"
});
export default Vue.extend({
  name: "Profile",
  components: {
    ValidationProvider,
    ValidationObserver,
    paystack
  },
  data: () => ({
    relationships: [
      "Brother",
      "Sister",
      "Spouse",
      "Sibling",
      "Child",
      "Relative",
      "Friend"
    ],
    durations: [
      { text: "1 Month", value: 1 },
      { text: "2 Months", vaue: 2 },
      { text: "3 Months", vaue: 3 },
      { text: "4 Months", vaue: 4 },
      { text: "5 Months", vaue: 5 },
      { text: "6 Months", vaue: 6 },
      { text: "7 Months", vaue: 7 },
      { text: "8 Months", vaue: 8 },
      { text: "9 Months", vaue: 9 },
      { text: "10 Months", vaue: 10 },
      { text: "11 Months", vaue: 11 },
      { text: "12 Months", vaue: 12 }
    ],
    interestTypes: [
      { text: "As an upfront bulk payment, subject to a discount", value: 1 },
      { text: "In equal monthly instalments spread over the tenor", vaue: 2 },
      { text: "In bulk, along with the principal at maturity", vaue: 3 }
    ],
    paystackkey: "pk_test_564016ad5c85950dbb2af2e6a14957faa89adb28", //paystack public key
    thisLoading: false,
    manageType: 1,
    interestType: 1,
    duration: 0,
    walletFundType: false,
    amount: "",
    errorDialog: false,
    errorText: "",
    uploadFieldName: "file",
    maxSize: 1024,
    saveBtn: false,
    avatar: "",
    saving: false,
    saved: false,
    files: [],
    thisError: false,
    thisSuccess: false,
    thisMessage: "",
    step: 0,
    profileData: {
      fullName: "",
      firstName: "",
      lastName: "",
      email: "",
      profilePic: "",
      phone: "",
      dob: "",
      age: "",
      gender: "",
      residentType: "",
      homeAddress: "",
      state: "",
      lga: "",
      maritalStatus: "",
      employmenyStatus: "",
      jobSector: "",
      companyName: "",
      monthlyIncome: "",
      workAddress: "",
      bvn: "",
      kinName: "",
      kinFirstName: "",
      kinLastName: "",
      kinEmail: "",
      kinPhone: "",
      kinAddress: "",
      relationship: "",
      password: "",
      confirmPassword: "",
      noOfYears: "",
      designation: "",
      designationText: "",
      workSector: "",
      workSectorText: "",
      occupation: "",
      startYear: "",
      officialEmail: "",
      bankCode: "",
      bankId: "",
      accountNo: "",
      userId: ""
    }
  }),
  props: {
    // Use "value" here to enable compatibility with v-model
    value: Object
  },
  watch: {
    name() {
      this.errorMessages = "";
    },
    InvestmentSuccess: function(newItem) {
      // this.doSomethingWith(newItem); // this never runs
      // console.log(newItem);
      this.step++;
    }
  },
  mounted() {
    //mouned event
    console.log(this.banks);
  },
  created() {
    //comment
    this.getUserDetail();
    this.getBankAccounts();
    this.getWallet();
  },

  computed: {
    ...mapState("account", [
      "status",
      "user",
      "loading",
      "error",
      "success",
      "message",
      "bvnLoading",
      "txnRef",
      "bvnStep",
      "userData"
    ]),
    ...mapState("banks", [
      "userDetails",
      "loading",
      "banks",
      "cards",
      "wallet",
      "bankAccounts",
      "error",
      "success",
      "message"
    ]),
    ...mapState("general", [
      "residentTypes",
      "states",
      "lgas",
      "maritalStatuses",
      "workSectors",
      "genders",
      "occupations",
      "designations"
    ]),
    ...mapState("investments", ["invLoading", "InvestmentSuccess"]),
    reference() {
      let text = "";
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },

  methods: {
    ...mapActions("account", [
      "login",
      "logout",
      "changePassword",
      "updateProfile",
      "verifyBvn",
      "validateBvn",
      "getUserDetails"
    ]),
    ...mapActions("general", [
      "getResidentTypes",
      "getStates",
      "getLgas",
      "getMaritalStatus",
      "getWorkSectors",
      "getGenders",
      "getOccupations",
      "getDesignations"
    ]),
    ...mapActions("banks", [
      "resolveBankAccount",
      "saveBankAccount",
      "saveCard",
      "getBankAccounts",
      "getCards",
      "getWallet",
      "withdrawFunds",
      "fundWallet"
    ]),
    ...mapActions("investments", ["createNewInvestmentWithDetails"]),

    callback: function(response) {
      if (response.status == "success") {
        // this.profileData.amount = this.amount;
        // this.profileData.manageType = this.manageType;
        // this.profileData.duration = this.duration;
        // this.profileData.paystack = response.trxref;
        // this.createNewInvestmentWithDetails({ data: this.profileData });
        const ref = response.trxref;
        this.fundWallet({ ref });
      } else {
        alert("Something went wrong! Please try again");
      }
    },
    close: function() {
      console.log("Payment closed");
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
    getBank() {
      const bank = this.$store.state.banks.banks.find(bank => {
        return bank.bank_code == this.profileData.bankCode;
      });
      this.bankId = bank.bank_id;
      console.log(this.bankId);
    },
    getUserDetail() {
      this.overlay = true;
      axios
        .post(
          "https://mobile.creditclan.com/api/v3/user/details",
          { token: authHeader() },
          {
            headers: {
              "x-api-key":
                "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
            }
          }
        )
        .then(response => {
          if (response.data.status) {
            const userData = response.data.data.userData.data;
            const userName = userData.profile.legal_name.split(" ");
            const userProfile = userData.profile;
            const kinProfile = userData.next_of_kin;
            const kinName = kinProfile.nok_name
              ? kinProfile.nok_name.split(" ")
              : ["", ""];
            this.profileData.fullName = userData.profile.legal_name;
            this.profileData.firstName = userName[0];
            this.profileData.lastName = userName[1];
            this.profileData.email = userProfile.email;
            this.profileData.profilePic = userProfile.file_name;
            this.profileData.phone = userProfile.phone;
            this.profileData.dob = userProfile.date_of_birth;
            this.profileData.age = userProfile.age;
            this.profileData.gender = userProfile.gender;
            this.profileData.residentType =
              userData.home_address.nature_of_accomodation;
            this.profileData.homeAddress = userData.home_address.home_address;
            this.profileData.state = userData.home_address.home_state;
            this.profileData.lga = userData.home_address.home_lga;
            this.profileData.maritalStatus = userProfile.marital_status;
            this.profileData.jobSector = userData.work.work_sector;
            this.profileData.companyName = userData.work.company_name;
            this.profileData.monthlyIncome = userData.work.net_monthly_income;
            this.profileData.workAddress = userData.work.work_address;
            this.profileData.bvn = userProfile.bvn;
            this.profileData.kinName = kinProfile.nok_name;
            this.profileData.kinFirstName = kinName[0];
            this.profileData.kinLastName = kinName[1];
            this.profileData.kinEmail = kinProfile.nok_email;
            this.profileData.kinPhone = kinProfile.nok_phone;
            this.profileData.kinAddress = kinProfile.nok_address;
            this.profileData.relationship = kinProfile.nok_relationship;
            this.profileData.noOfYears = userData.home_address.resident_years;
            this.profileData.designation = userData.work.designation_id;
            this.profileData.designationText = userData.work.designation_text;
            this.profileData.workSector = userData.work.work_sector;
            this.profileData.workSectorText = userData.work.work_sector_text;
            this.profileData.occupation = userData.work.occupation_id;
            this.profileData.startYear = userData.work.start_year;
            this.profileData.officialEmail = userData.work.official_email;
            this.profileData.userId = response.data.data.people_id;
            this.getLga(userData.home_address.home_state);
            this.overlay = false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getLga(stateId) {
      return this.getLgas({ stateId });
    },
    verifyBvnNo() {
      const bvn = this.profileData.bvn;
      // console.log(bvn);
      return this.verifyBvn(bvn);
    },

    async submitFirst() {
      const valid = this.$refs.observer.validate();
      if (this.profileData.firstName) {
        if (!valid) return;
        // this.loading = true;
        this.step++;
      }
    },

    async submitSecond() {
      const validate = this.$refs.observer.validate();
      validate.then(valid => {
        if (valid) {
          this.step++;
        } else {
          this.thisMessage = "Please fill in all fields";
          this.thisError = true;
        }
      });
    },
    async submitThird() {
      const validate = this.$refs.observer.validate();
      validate.then(valid => {
        if (valid) {
          this.step++;
        } else {
          this.thisMessage = "Please fill in all fields";
          this.thisError = true;
        }
      });
    },
    async submitFourth() {
      const validate = this.$refs.observer.validate();
      const accountNo = this.profileData.accountNo;
      const bankCode = this.profileData.bankCode;
      validate.then(valid => {
        if (valid) {
          this.thisLoading = true;
          axios
            .post(
              "https://mobile.creditclan.com/api/v3/user/account/resolve",
              {
                token: authHeader(),
                // eslint-disable-next-line @typescript-eslint/camelcase
                account_number: accountNo,
                // eslint-disable-next-line @typescript-eslint/camelcase
                bank_code: bankCode
              },
              {
                headers: {
                  "x-api-key":
                    "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
                }
              }
            )
            .then(res => {
              this.thisLoading = false;
              if (res.data.status) {
                this.thisSuccess = true;
                this.thisMessage = res.data.message;
                this.profileData.fullName = res.data.data.account_name;
                this.step++;
              } else {
                this.thisMessage = res.data.message;
                this.thisError = true;
              }
            })
            .catch(error => {
              this.thisLoading = false;
              this.thisMessage = error;
              this.thisError = true;
            });
        }
      });
    },
    async submitFifth() {
      const validate = this.$refs.observer.validate();
      validate.then(valid => {
        if (valid) {
          this.step++;
        } else {
          this.thisMessage = "Please fill in all fields";
          this.thisError = true;
        }
      });
    },
    async applyNow() {
      const validate = this.$refs.observer.validate();
      validate.then(valid => {
        if (valid) {
          if (
            (this.wallet.wallet_balance == null ||
              this.wallet.wallet_balance < this.amount) &&
            !this.walletFundType
          ) {
            this.thisMessage = "Please fund your wallet to proceed ";
            this.thisError = true;
          } else {
            this.profileData.amount = this.amount;
            this.profileData.manageType = this.manageType;
            this.profileData.duration = this.duration;
            const investment = this.createNewInvestmentWithDetails({
              data: this.profileData
            });
            console.log(investment);
          }
        } else {
          this.thisMessage = "Please fill in all fields";
          this.thisError = true;
        }
      });
    },

    async onFileChange(fieldName, file) {
      const { maxSize } = this;
      const imageFile = file[0];

      //check if user actually selected a file
      if (file.length > 0) {
        const size = imageFile.size / maxSize / maxSize;
        if (!imageFile.type.match("image.*")) {
          // check whether the upload is an image
          this.errorDialog = true;
          this.errorText = "Please choose an image file";
        } else if (size > 1) {
          // check whether the size is greater than the size limit
          this.errorDialog = true;
          this.errorText =
            "Your file is too big! Please select an image under 1MB";
        } else {
          // Append file into FormData & turn file into image URL
          const formData = new FormData();
          this.profileData.profilePic = URL.createObjectURL(imageFile);
          this.saveBtn = true;
          // console.log(imageFile);
          formData.append("file", imageFile);
          formData.append("token", authHeader());
          // const imageURL = URL.createObjectURL(imageFile);
          // this.$emit("input", { formData, imageURL });
          // Emit FormData & image URL to the parent component
          // this.$emit("input", { formData, this.avatar.imageURL });
          const requestOptions = {
            method: "POST",
            headers: {
              // "Content-Type": "multipart/form-data",
              "x-api-key":
                "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
            },
            body: formData
          };
          const response = await fetch(
            "https://mobile.creditclan.com/api/v3/customer/upload/picture",
            requestOptions
          );
          const data = await response.json();
          this.getUserDetails();
          // this.postId = data.id;
          console.log(data);
        }
      }
    },
    async uploadImage() {
      this.saving = true;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-keys":
            "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
        },
        body: JSON.stringify({
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJQRU9QTEVfSUQiOiIxMDQxMjMiLCJFTUFJTCI6Im9rdW51Z2Eub3JpeW9taUBnbWFpbC5jb20iLCJMRU5ERVJfSUQiOiI0MDAyMiJ9.W4ZT76eq1TFrJ7J-GnZHEkmioKnsL9OH95Gurrb6CU"
          // file: this.$refs.file.files
        })
      };
      const response = await fetch(
        "https://mobile.creditclan.com/api/v3/customer/upload/picture",
        requestOptions
      );
      const data = await response.json();
      // this.postId = data.id;
      console.log(data);
      this.savedAvatar();
    },
    savedAvatar() {
      this.saving = false;
      this.saved = true;
    }
  }
});
</script>
<style scoped>
.wrapper {
  background-color: #fff;
  margin-top: 0;
  padding: 12px;
}
/* form */
.text-danger {
  color: #cc3639;
}
.testbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 20px;
}
form {
  width: 100%;
  /* padding: 20px; */
  border-radius: 6px;
  background: #fff;
  /* box-shadow: 0 0 30px 0#63c132; */
}
p.top-info {
  margin: 10px 0;
}
input,
select,
textarea {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
input {
  width: calc(100% - 10px);
  padding: 10px;
}
select {
  width: 100%;
  padding: 10px;
  background: transparent;
}
textarea {
  width: calc(100% - 12px);
  padding: 5px;
}
.item:hover p,
.item:hover label,
.item:hover i,
.question:hover p,
.question label:hover,
input:hover::placeholder {
  color: #63c132;
}
.item input:hover,
.item select:hover,
.item textarea:hover {
  border: 1px solid transparent;
  box-shadow: 0 0 8px 0 #8ebf42;
  color: #8ebf42;
}
.item {
  position: relative;
  margin: 10px 0;
}
input[type="date"]::-webkit-inner-spin-button {
  display: none;
}
.item i,
input[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  font-size: 20px;
  color: #a9a9a9;
}
.item i {
  right: 8%;
  top: 33px;
  z-index: 1;
}
[type="date"]::-webkit-calendar-picker-indicator {
  right: 1%;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
}
input[type="radio"] {
  width: 0;
  visibility: hidden;
}
label.radio {
  position: relative;
  display: inline-block;
  margin: 5px 20px 25px 0;
  cursor: pointer;
}
.question {
  width: 50%;
}
.question span {
  margin-left: 30px;
}
label.radio:before {
  content: "";
  position: absolute;
  left: 0;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #8ebf42;
}
label.radio:after {
  content: "";
  position: absolute;
  width: 8px;
  height: 4px;
  top: 6px;
  left: 5px;
  background: transparent;
  border: 3px solid #8ebf42;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  opacity: 0;
}
input[type="radio"]:checked + label:after {
  opacity: 1;
}
.btn-block {
  margin-top: 10px;
  text-align: left;
}
form button {
  text-align: left;
  width: 169px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #63c132;
  font-size: 16px;
  color: #fff !important;
  cursor: pointer;
}
form button span {
  padding-left: 15px;
}
form button:hover {
  background: #63c132;
}
form h4 {
  color: #6d6d6d;
  font-weight: 500;
  margin: 0 0 20px;
  font-size: 15px;
}
form p {
  font-size: 10px;
  margin-top: -24px;
}

form .upload-image {
  height: 100px;
  width: 100px;
  border: 2px solid #63c132;
  border-radius: 50%;
  margin: 30px 0;
  color: #63c132;
}

form .upload-image span i {
  margin: 72% 0 0 78%;
  font-size: 20px;
  transform: rotate(15deg);
}
@media (min-width: 568px) {
  .name-item,
  .contact-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .name-item input {
    width: calc(50% - 20px);
  }
  /* .city-item select {
    width: calc(50% - 8px);
  } */
  .contact-item .item {
    width: calc(50% - 8px);
  }
  .contact-item input {
    width: calc(100% - 12px);
  }
}

@media (max-width: 960px) {
  .wrapper {
    padding: 0;
  }
}
</style>
