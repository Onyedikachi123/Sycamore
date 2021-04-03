<template>
  <v-container class="loan_details pl-7 pr-7" fluid>
    <div class="text-center ">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
        v-if="loading"
        class="ma-10"
      ></v-progress-circular>
    </div>
    <v-row v-if="loansDetails != null && !loading">
      <v-col cols="12" sm="12" md="7">
        <v-card>
          <v-img
            contain
            :src="
              $store.state.account.userData &&
                $store.state.account.userData.userData.data.profile.file_name
            "
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <v-card-title
              ><p class="current-loan">
                Current loan <br />
                <span class="price-block-inside" style="line-height: 0px">
                  <span class="price-currency">₦</span>
                  <span class="bold-txt price-value">{{
                    loansDetails.data.loandetails.HMR
                  }}</span>
                  <span class="price-right-block">
                    <span class="price-month font-weight-bold">.00</span>
                  </span>
                </span>
              </p>
            </v-card-title>
          </v-img>

          <v-card-actions class="progress-bar">
            <p style="margin-bottom: 0px">Progress</p>

            <v-card-text class="text--primary">
              <div>
                {{ loansDetails.data.loandetails.PERCENTAGE_FUNDED }}% Achieved
              </div>

              <div>
                <input
                  type="range"
                  :value="loansDetails.data.loandetails.PERCENTAGE_FUNDED"
                />
              </div>
            </v-card-text>
            <!-- <v-spacer></v-spacer> -->
            <router-link
              v-if="loansDetails.data.loandetails.IS_ACCEPTED == 1"
              to="/loans/payment"
            >
              <button class="make-payment">
                Make Payment
                <span><i class="fas fa-chevron-right"></i></span>
              </button>
            </router-link>
            <button @click="alertDisplay" v-else class="loan-apply">
              Cancel Loan
              <span><i class="fas fa-chevron-right"></i></span>
            </button>
          </v-card-actions>
          <v-divider></v-divider>
          <!-- <v-card-title class="font-weight-bold">
            Loan details
          </v-card-title>
          <div class="box bg-light">
            <div
              class="d-flex justify-content-around align-items-center text-center"
            >
              // <div class="item flex-fill border-right">
                <p class="current-loan">
                  Request amount<br />
                  <span class="price-block-inside" style="line-height: 0px">
                    <span class="price-currency">₦</span>
                    <span class="bold-txt price-value">{{
                      loansDetails.data.loandetails.REQUEST_PRINCIPAL
                    }}</span>
                    <span class="price-right-block">
                      <span class="price-month font-weight-bold">.00</span>
                    </span>
                  </span>
                </p>
              </div> // 
              <div class="item flex-fill border-right">
                <p class="current-loan">
                  Amount Funded <br />
                  <span class="price-block-inside" style="line-height: 0px">
                    <span class="price-currency">₦</span>
                    <span class="bold-txt price-value">{{
                      loansDetails.data.loandetails.AMOUNT_FUNDED
                    }}</span>
                    <span class="price-right-block">
                      <span class="price-month font-weight-bold">.00</span>
                    </span>
                  </span>
                </p>
              </div>
              <div class="item flex-fill">
                <p class="current-loan">
                  Amount left <br />
                  <span class="price-block-inside" style="line-height: 0px">
                    <span class="price-currency">₦</span>
                    <span class="bold-txt price-value">{{
                      loansDetails.data.loandetails.AMOUNT_LEFT
                    }}</span>
                    <span class="price-right-block">
                      <span class="price-month font-weight-bold">.00</span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <v-divider></v-divider> -->
          <v-card-title class="font-weight-bold">
            Repayment
          </v-card-title>
          <div class="box bg-light ">
            <div
              class="d-flex justify-content-around align-items-center text-center"
            >
              <!-- <div class="item flex-fill border-right">
                <p class="current-loan">
                  Balance<br />
                  <span class="price-block-inside" style="line-height: 0px">
                    <span class="price-currency">₦</span>
                    <span class="bold-txt price-value">{{
                      loansDetails.data.loandetails.repayment.balance
                    }}</span>
                    <span class="price-right-block">
                      <span class="price-month font-weight-bold">.00</span>
                    </span>
                  </span>
                </p>
              </div> -->
              <div class="item flex-fill border-right">
                <p class="current-loan">
                  Amount Paid <br />
                  <span class="price-block-inside" style="line-height: 0px">
                    <span class="price-currency">₦</span>
                    <span class="bold-txt price-value">{{
                      loansDetails.data.loandetails.HMP
                    }}</span>
                    <span class="price-right-block">
                      <span class="price-month font-weight-bold">.00</span>
                    </span>
                  </span>
                </p>
              </div>
              <div class="item flex-fill">
                <p class="current-loan">
                  Amount left <br />
                  <span class="price-block-inside" style="line-height: 0px">
                    <span class="price-currency">₦</span>
                    <span class="bold-txt price-value">{{
                      loansDetails.data.loandetails.HMR
                    }}</span>
                    <span class="price-right-block">
                      <span class="price-month font-weight-bold">.00</span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </v-card>
        <v-card class="mx-auto mt-5">
          <div v-if="loanSchedule.length > 0">
            <v-card-title class="font-weight-bold">
              Loan Schedule
            </v-card-title>
            <!-- <h5 class="text-subtitle-1 font-weight-bold">Timeline</h5> -->
            <v-divider></v-divider>
            <v-list two-line>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title></v-list-item-title>
                  <v-card-title class="font-weight-bold">
                    Repayment Date
                  </v-card-title>
                </v-list-item-content>
                <v-list-item-content class="text-center">
                  <v-list-item-title>
                    <v-card-title class="font-weight-bold">
                      Amount
                    </v-card-title>
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-subtitle>
                    <v-card-title class="font-weight-bold">
                      How much paid
                    </v-card-title>
                  </v-list-item-subtitle>
                </v-list-item-action>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item v-for="item in loanSchedule" :key="item.id">
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.repayment_date"
                  ></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title
                    >&#8358;{{ item.term_repayment }}</v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-subtitle class="font-weight-bold">
                    &#8358;{{ item.how_much_paid }}
                  </v-list-item-subtitle>
                </v-list-item-action>
              </v-list-item>
              <v-divider></v-divider>
            </v-list>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="5">
        <v-card class="mx-auto">
          <div v-if="loansDetails.data.timeline.length == 0">
            <div class="text-center">
              <h3>No Data</h3>
            </div>
          </div>
          <div v-else-if="loansDetails.data.timeline.length > 0">
            <v-card-title class="font-weight-bold">
              Timeline
            </v-card-title>
            <!-- <h5 class="text-subtitle-1 font-weight-bold">Timeline</h5> -->
            <v-divider></v-divider>
            <v-list two-line>
              <v-list-item
                v-for="item in loansDetails.data.timeline"
                :key="item.id"
              >
                <v-list-item-avatar>
                  <v-icon class="lighten-1 white--text primary "
                    >fas fa-bolt</v-icon
                  >
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.TIMELINE_ACTIVITY"
                  ></v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-subtitle>
                    <timeago
                      :datetime="item.DATE_ADDED"
                      :auto-update="60"
                    ></timeago>
                  </v-list-item-subtitle>
                </v-list-item-action>
              </v-list-item>
              <v-divider></v-divider>
            </v-list>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import VueTimeago from "vue-timeago";
import router from "@/router";

Vue.use(VueTimeago, {
  name: "Timeago", // Component name, `Timeago` by default
  locale: "en", // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    "zh-CN": require("date-fns/locale/zh_cn"),
    ja: require("date-fns/locale/ja")
  }
});

export default Vue.extend({
  name: "loanDetails",

  data: () => ({
    paystackkey: "pk_test_564016ad5c85950dbb2af2e6a14957faa89adb28", //paystack public key
    snackbar: true,
    timeout: 2000,
    portfolio: null,
    state: null,
    rolloverDialog: false,
    terminateDialog: false,
    topupDialog: false,
    liquidateDialog: false,
    paymentMethod: "",
    productId: "",
    planDuration: "",
    amount: "",
    bankId: "",
    durations: [
      { text: "1 Month", value: 1 },
      { text: "3 months", value: 3 },
      { text: "6 months", value: 6 }
    ],
    select: [{ text: "Paystack" }, { text: "Paypal" }]
  }),
  watch: {
    loanCancelled: function() {
      router.push("/loans");
    }
  },
  computed: {
    ...mapState("loans", [
      "loading",
      "message",
      "loansDetails",
      "loanSchedule",
      "loanCancelled"
    ]),
    reference() {
      let text = "";
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
    // getInvestments: function() {
    //   return this.getInvestments();
    // }
  },
  mounted() {
    // this.getInvestments();
    // console.log(this.state.loansDetails);
    // this.getloansDetails(this.$route.params.id);
  },

  created() {
    this.state = this.$store.state.loans;
    this.getLoanDetails({ id: this.$route.params.id });
    this.getLoanSchedule({ id: this.$route.params.id });
  },
  methods: {
    ...mapActions("banks", [
      "getBanks",
      "resolveBankAccount",
      "saveBankAccount",
      "saveCard",
      "getBankAccounts",
      "getCards",
      "getWallet",
      "withdrawFunds"
    ]),
    ...mapActions("loans", [
      "getLoans",
      "getLoanDetails",
      "getLoanSchedule",
      "cancelLoanRequest"
    ]),
    callback: function(response) {
      if (response.status == "success") {
        this.topupDialog = false;
        this.topupInvest(response.trxref);
      } else {
        alert("Something went wrong! Please try again");
      }
    },
    close: function() {
      console.log("Payment closed");
    },
    alertDisplay() {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Cancel it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true
      })
        .then(result => {
          if (result) {
            this.cancelLoanRequest({ id: this.$route.params.id });
          }
        })
        .catch(error => console.log(error));
    }
  }
});
</script>
<style>
.dash-success {
  background-color: #e6f6e9 !important;
  color: var(--v-primary-base) !important;
  caret-color: #e6f6e9 !important;
}
input[type="range"] {
  margin: auto;
  -webkit-appearance: none;
  position: relative;
  overflow: hidden;
  height: 7px;
  width: 200px;
  cursor: pointer;
  border-radius: 30px; /* iOS */
  outline: none;
}

::-webkit-slider-runnable-track {
  background: #e9e9e9;
}
::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px; /* 1 */
  height: 40px;
  /* background: #fff; */
  box-shadow: -100vw 0 0 100vw #63c132;
  /* border: 2px solid #e65151; */
}

::-moz-range-track {
  height: 40px;
  background: #e9e9e9;
}

::-moz-range-thumb {
  /* background: #fff; */
  height: 40px;
  width: 20px;
  /* border: 3px solid #999; */
  border-radius: 0 !important;
  box-shadow: -100vw 0 0 100vw #63c132;
  box-sizing: border-box;
}

::-ms-fill-lower {
  background: #63c132;
}

::-ms-thumb {
  background: #fff;
  border: 2px solid #999;
  height: 40px;
  width: 20px;
  box-sizing: border-box;
}

::-ms-ticks-after {
  display: none;
}

::-ms-ticks-before {
  display: none;
}

::-ms-track {
  background: #e9e9e9;
  color: transparent;
  height: 40px;
  border: none;
}

::-ms-tooltip {
  display: none;
}

.make-payment {
  background-color: #63c132;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  min-width: 180px;
}
.make-payment span i {
  margin-left: 15px;
}
.loan-apply {
  background-color: #660303;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  min-width: 150px;
}
.loan-apply span i {
  margin-left: 23px;
}
@media (max-width: 960px) {
  .progress-bar {
    flex-direction: column;
  }
}
.apply {
  background-color: #e8f2e9;
  color: #002d04;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 10px;
}
.apply span i {
  margin-left: 30px;
}
.loan-details p,
.amount-left p,
.amount-paid p {
  font-size: 12.85px;
}

.loan-details {
  margin-top: -20px;
}
.loan-details .current-loan {
  padding-top: 30px;
}
/* .amount-left .price-block {
  padding-top: 46px;
} */
.price-block-inside .price-currency {
  font-size: 10px;
  vertical-align: text-top;
}
.price-block-inside .price-value {
  font-size: 25.7px;
  font-weight: 600;
  line-height: 1;
}
.investment h4 {
  font-weight: 600;
  margin-bottom: 0px;
  font-size: 19.28px;
}

.investment .investment-btn {
  display: flex;
}

.investment .investment-btn .see-investment {
  border: 2px solid #63c132;
  padding: 10px 20px;
  margin: 10px 20px 0 10px;
  border-radius: 5px;
  outline: none;
  color: #002d04;
  font-size: 10.28px;
}
.investment .investment-btn .new-investment {
  background-color: #63c132;
  padding: 10px 20px;
  margin: 10px 20px 0 10px;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-size: 10.28px;
}

.plan1 {
  background-color: #e8f2e9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 3px rgba(0, 48, 2, 0.08);
  min-width: 200px;
}
.plan1 .plan1-header,
.plan2 .plan2-header {
  display: flex;
  /* margin-bottom: 100px; */
}
.plan1-header .active-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #63c132;
  color: #fff;
  border-radius: 4px;
  padding: 0px 14px;
  font-size: 6.85px;
}
.plan1 .price-block p,
.plan2 .price-block p {
  margin-bottom: -12px !important;
  font-size: 7.71px;
}
.dashboard .v-card {
  box-shadow: 0px 2px 3px rgba(0, 48, 2, 0.08) !important;
}
.plan2 {
  background-color: #f0e2e2;
  padding: 20px;
  border-radius: 8px;
}
.plan2 .paused-button {
  background-color: #cc3639;
  color: #fff;
  margin-left: 80px;
  border-radius: 4px;
  padding: 0px 13px;
  font-size: 6.85px;
}
.portfolio-details .investment {
  background-color: #e8f2e9;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details .return {
  background-color: #63c132;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details .lifetime {
  background-color: #f44b4e;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details ul li {
  display: flex;
  padding-top: 18px;
}

.cards-banks .upload-card i {
  cursor: pointer;
}
.v-slide-group__content {
  margin-bottom: 20px;
}

.cards-banks .bank-card {
  height: 130px;
  width: 300px;
  background-color: var(--v-primary-lighten1) !important;
  margin: 0 auto;
  border-radius: 8px;
}
.cards-banks .upload-card {
  border: 2px solid var(--v-primary-lighten1) !important;
  margin: 20px auto;
  height: 100px;
  width: 250px;
  border-radius: 8px;
}
.cards-banks .upload-card i {
  cursor: pointer;
}
.card-title {
  display: flex;
}
.card-title a {
  color: red !important;
  text-decoration: none;
  font-size: 9px;
  position: absolute;
  right: 5%;
}
.price-block-inside .price-currency {
  font-size: 10px;
  vertical-align: text-top;
}
.price-block-inside .price-value {
  font-size: 25.7px;
  font-weight: 600;
  line-height: 1;
}

.portfolio-details .investment {
  background-color: #e8f2e9;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details .return {
  background-color: #63c132;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details .lifetime {
  background-color: #f44b4e;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details ul li {
  display: flex;
  padding-top: 18px;
}
</style>
