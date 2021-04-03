<template>
  <v-container class="investments pl-7 pr-7" fluid>
    <div class="wrapper">
      <div align="right">search filter sort</div>
      <CardTabs>
        <CardTab name="Investments" selected="true">
          <div class="text-center">
            <v-progress-circular
              :size="70"
              :width="7"
              color="primary"
              indeterminate
              v-if="
                state.loading &&
                  state.investmentPortfolio.length == 0 &&
                  state.pendingInvestments.length == 0
              "
              class="ma-10"
            ></v-progress-circular>
          </div>
          <v-row>
            <v-col cols="12" sm="12" md="4">
              <v-card class="py-2" flat>
                <div class="cards-banks">
                  <!-- <v-card class="bank-card theme--light" flat></v-card> -->

                  <v-card
                    class="upload-card pa-9 d-flex flex-column align-center v-card v-card--flat v-sheet theme--light"
                    flat
                    height="113"
                    to="/investments/apply"
                  >
                    <v-icon
                      color="primary"
                      size="40"
                      class="fas fa-plus mt-n4 mb-2"
                    ></v-icon>
                    <span>New investment</span>
                  </v-card>
                </div>
              </v-card>
            </v-col>
            <v-col
              v-model="state.investmentPortfolio"
              v-for="(item, index) in state.investmentPortfolio"
              :key="index + '1'"
              cols="12"
              sm="12"
              md="4"
            >
              <v-card
                class="pa-2 d-flex flex-column align-center justify-end v-card v-card--flat v-sheet theme--light"
                :to="`/investments/${item.INVESTMENT_ID}`"
              >
                <div class="plan1">
                  <div class="plan1-header">
                    <h6>{{ item.INVESTMENT_TITLE }}</h6>
                    <v-spacer></v-spacer>
                    <button class="active-button">ACTIVE</button>
                  </div>
                  <div class="plan1-footer">
                    <div class="plan1-footer-details">
                      <p style="">
                        {{ item.PERCENTAGE_FUNDED || "0" }}% Achieved
                      </p>
                      <input
                        type="range"
                        :value="item.PERCENTAGE_FUNDED || 0"
                      />
                    </div>
                    <v-spacer></v-spacer>
                    <div class="plan1-footer-details-2">
                      <p>Current balance</p>
                      <div
                        class="price-block"
                        data-id="1"
                        data-save_percent=""
                        data-duration="30"
                        style="display: block; padding-bottom: 30px"
                      >
                        <span
                          class="price-block-inside"
                          style="line-height: 0px"
                        >
                          <span class="price-currency">₦</span>
                          <span class="bold-txt price-value">
                            {{ item.CURRENT_BALANCE }}
                          </span>
                          <span class="price-right-block">
                            <span
                              class="price-month font-weight-bold"
                              style="font-size: 6.55px"
                              >.00</span
                            >
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </CardTab>

        <CardTab name="Pending Investments">
          <div class="text-center">
            <v-progress-circular
              :size="70"
              :width="7"
              color="primary"
              indeterminate
              v-if="state.loading && state.pendingInvestments.length == 0"
              class="ma-10"
            ></v-progress-circular>
          </div>
          <v-row>
            <v-col
              v-model="state.pendingInvestments"
              v-for="(item, index) in state.pendingInvestments"
              :key="index"
              cols="12"
              sm="12"
              md="4"
            >
              <v-card
                class="py-2 d-flex flex-column align-center v-card v-card--flat v-sheet theme--light"
                :to="`/investments/${item.INVESTMENT_ID}`"
              >
                <div class="plan2">
                  <div class="plan2-header">
                    <h6>{{ item.INVESTMENT_TITLE }}</h6>
                    <!-- <v-spacer></v-spacer> -->
                    <button class="paused-button">PENDING</button>
                  </div>
                  <div class="plan2-footer">
                    <div class="plan2-footer-details">
                      <p style="">
                        {{ item.PERCENTAGE_FUNDED || "0" }}% Achieved
                      </p>
                      <input
                        type="range"
                        :value="item.PERCENTAGE_FUNDED || 0"
                      />
                    </div>
                    <v-spacer></v-spacer>
                    <div class="plan2-footer-details-2">
                      <p>Current balance</p>
                      <div
                        class="price-block"
                        data-id="1"
                        data-save_percent=""
                        data-duration="30"
                        style="display: block; padding-bottom: 30px"
                      >
                        <span
                          class="price-block-inside"
                          style="line-height: 0px"
                        >
                          <span class="price-currency">₦</span>
                          <span class="bold-txt price-value">
                            {{ item.CURRENT_BALANCE }}
                          </span>
                          <span class="price-right-block">
                            <span
                              class="price-month font-weight-bold"
                              style="font-size: 6.55px"
                              >.00</span
                            >
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col></v-row
          >
        </CardTab>

        <CardTab name="Marketplace">
          <div class="text-center">
            <v-progress-circular
              :size="70"
              :width="7"
              color="primary"
              indeterminate
              v-if="state.loading && investments.length == 0"
              class="ma-10"
            ></v-progress-circular>
          </div>
          <v-row gutters>
            <v-col
              v-model="investments"
              v-for="item in investments"
              :key="item.INVESTMENT_PRODUCT_ID"
              cols="12"
              sm="12"
              md="4"
            >
              <v-card
                class="py-2 d-flex flex-column align-center justify-end v-card v-card--flat v-sheet theme--light"
                :to="`/investment/${item.INVESTMENT_PRODUCT_ID}`"
              >
                <div class="marketplace1">
                  <div class="marketplace1-header">
                    <v-img
                      max-height="68"
                      max-width="102"
                      :src="require('@/assets/marketplace-pic.png')"
                    ></v-img>
                    <v-spacer></v-spacer>
                    <button class="active-button" style="height: 20px">
                      ACTIVE
                    </button>
                  </div>
                  <div class="marketplace1-footer">
                    <div class="marketplace1-footer-details">
                      <div
                        class="price-block"
                        data-id="1"
                        data-save_percent=""
                        data-duration="30"
                        style="display: block; padding-top: 30px"
                      >
                        <span
                          class="price-block-inside"
                          style="line-height: 0px"
                        >
                          <span class="price-currency" style="font-size: 11.1px"
                            >&#8358;
                          </span>
                          <span
                            class="bold-txt price-value"
                            style="font-size: 22.2px"
                          >
                            {{ item.INVESTMENT_AMOUNT }}
                          </span>
                          <span class="price-right-block">
                            <span
                              class="price-month font-weight-bold"
                              style="font-size: 11.1px"
                              >.00</span
                            >
                          </span>
                        </span>
                      </div>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="marketplace1-footer-details-2">
                      <p style="padding-right: 4px; color: #5d5d5d">
                        {{ item.MAX_INVESTMENT_DURATION }} months |
                      </p>
                      <p style="color: #5d5d5d">{{ item.INTEREST }}%</p>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </CardTab>
        <CardTab name="Investment History">
          <div class="text-center">
            <v-progress-circular
              :size="70"
              :width="7"
              color="primary"
              indeterminate
              v-if="state.loading && state.investmentHistory.length == 0"
              class="ma-10"
            ></v-progress-circular>
          </div>
          <v-data-table
            v-if="!state.loading && state.investmentHistory"
            :headers="headers"
            :items="state.investmentHistory"
            :items-per-page="20"
            class="elevation-1 mt-1"
          ></v-data-table>
        </CardTab>
      </CardTabs>
    </div>

    <v-dialog v-model="investmentDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span>Create Investment</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="investmentDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="amount"
            :rules="[v => !!v || 'Amount is required']"
            label="How much do you want to invest"
            required
            type="number"
          ></v-text-field>
          <v-select
            :items="durations"
            v-model="planDuration"
            name="text"
            item-text="text"
            :rules="[v => !!v || 'Duration is required']"
            label="Select Duration"
            item-value="value"
          ></v-select>
          <v-select
            :items="investments"
            v-model="productId"
            name="INVESTMENT_TITLE"
            item-text="INVESTMENT_TITLE"
            :rules="[v => !!v || 'Product is required']"
            label="Select Product"
            item-value="INVESTMENT_PRODUCT_ID"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="investmentDialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <paystack
            :amount="amount * 100"
            :email="email"
            :paystackkey="paystackkey"
            :reference="reference"
            :callback="callback"
            :close="close"
            :embed="false"
            style="background-color: #e8f2e9"
            color="#002D04"
            class="mt-2 v-btn v-btn--depressed theme--light v-size--small primary"
          >
            Create Investment
          </paystack>
          <!-- <v-btn
            :loading="state.loading"
            :disabled="state.loading"
            @click="createNewInvestment"
            color="primary"
          >
            Create Investment
            <v-icon right>
              mdi-chevron-right
            </v-icon>
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      absolute
      top
      color="secondary"
      elevation="24"
      v-model="state.error"
      :timeout="5000"
      class="snackbar"
    >
      {{ state.message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="state.error = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      absolute
      top
      color="success"
      elevation="24"
      v-model="state.success"
      :timeout="5000"
      class="snackbar"
    >
      {{ state.message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="state.success = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { authHeader } from "@/_helpers/auth-header";
import axios from "axios";
import Vue from "vue";
import paystack from "vue-paystack";
import { mapActions } from "vuex";
import CardTab from "./components/Card-Tabs/CardTab.vue";
import CardTabs from "./components/Card-Tabs/CardTabs.vue";
export default Vue.extend({
  name: "InvestmentPlans",
  components: {
    CardTab,
    CardTabs,
    paystack
  },
  data() {
    return {
      paystackkey: "pk_test_564016ad5c85950dbb2af2e6a14957faa89adb28", //paystack public key
      email: this.$store.state.account.user.data.email, // Customer email
      amount: "",
      paymentMethod: "",
      investments: [],
      investmentsHistory: [],
      state: [],
      productId: "",
      valueDeterminate: 50,
      bankdialog: false,
      carddialog: false,
      investmentDialog: false,
      planDuration: "",
      tab: null,
      tabItems: ["Investments", "Marketplace", "History"],
      select: [{ text: "Paystack" }, { text: "Paypal" }],
      durations: [
        { text: "1 Month", value: 1 },
        { text: "3 months", value: 3 },
        { text: "6 months", value: 6 }
      ],
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Status", align: "start", value: "status" },
        { text: "Amount", align: "end", value: "Amount" },
        { text: "Date Created", align: "end", value: "date_created" }
      ]
    };
  },
  computed: {
    reference() {
      let text = "";
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },
  // mounted() {},
  created() {
    this.state = this.$store.state.investments;
    console.log(this.state);
    this.getInvestmentHistory();
    this.getInvestments();
  },
  methods: {
    ...mapActions("investments", [
      "getInvestmentSuccess",
      "getPendingInvestments",
      "getInvestmentPortfolio",
      "getInvestmentHistory",
      "createInvestment"
    ]),
    callback: function(response) {
      if (response.status == "success") {
        this.investmentDialog = false;
        this.createNewInvestment(response.trxref);
      } else {
        alert("Something went wrong! Please try again");
      }
    },
    close: function() {
      console.log("Payment closed");
    },

    getInvestments() {
      this.getPendingInvestments();
      this.getInvestmentPortfolio();
      axios
        .post(
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
        )
        .then(res => {
          if (res.data.status == false) {
            console.log(res.data.message);
          } else {
            // console.log(res.data.data);
            this.getInvestmentSuccess(res.data.data);
            this.investments = res.data.data;
            return;
          }
        });
    },
    createNewInvestment(ref) {
      const duration = this.planDuration;
      const amount = this.amount;
      const productId = this.productId;
      return this.createInvestment({ duration, amount, productId, ref });
    }
  },
  mounted() {
    setInterval(this.getInvestments, 36000);
  }
});
</script>
<style scoped>
.snackbar {
  z-index: 200000;
}
.v-progress-circular {
  margin: 1rem;
}
.wrapper {
  background-color: #fff;
  margin-top: 15px;
  padding: 20px;
}
.cards-banks .bank-card {
  height: 130px;
  background-color: var(--v-primary-lighten1) !important;
  border-radius: 8px;
}
.cards-banks .upload-card {
  border: 2px solid var(--v-primary-lighten1) !important;
  height: 150px;
  margin-top: 2px;
  border-radius: 8px;
}
.cards-banks .upload-card i {
  cursor: pointer;
  margin-top: -15px;
}

.plan1 .plan1-header,
.plan2 .plan2-header,
.plan1 .plan1-footer,
.plan2 .plan2-footer,
.marketplace1 .marketplace1-header,
.marketplace1 .marketplace1-footer {
  display: flex;
}

.plan1-header .active-button,
.marketplace1 .active-button {
  background-color: #63c132;
  color: #fff;
  margin-left: 80px;
  border-radius: 4px;
  padding: 0px 14px;
  font-size: 6.85px;
}

.plan1 {
  background-color: #e8f2e9;
  padding: 20px;
  height: 113px;
  width: 100%;
  box-shadow: 0px 2px 3px rgba(0, 48, 2, 0.08);
}

/* .plan1 .price-block p,
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
} */
input[type="range"] {
  margin: auto;
  -webkit-appearance: none;
  position: relative;
  overflow: hidden;
  height: 2px;
  width: 150px;
  cursor: pointer;
  border-radius: 30px; /* iOS */
  outline: none;
}

::-webkit-slider-runnable-track {
  background: #fff;
}

/*
 * 1. Set to 0 width and remove border for a slider without a thumb
 */
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

/* .plan2 .plan2-footer-details::-ms-fill-lower {
  background: #cc3639 !important;
}

.plan2-footer-details::-moz-range-thumb {
  box-shadow: -100vw 0 0 100vw #cc3639 !important;
}
.plan2-footer-details::-webkit-slider-thumb {
  box-shadow: -100vw 0 0 100vw #cc3639 !important;
} */

/* ::-ms-thumb {
  background: #fff;
  border: 2px solid #999;
  height: 40px;
  width: 20px;
  box-sizing: border-box;
} */

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

.price-block-inside .price-currency {
  font-size: 5.61px;
  vertical-align: 5px;
}
.price-block-inside .price-value {
  font-size: 11.22px;
  font-weight: 600;
  line-height: 1;
}

.plan1-footer-details-2 p,
.plan2-footer-details-2 p,
.marketplace1-footer-details-2 p {
  margin-bottom: -6px;
  font-size: 8px;
}

.plan1-footer-details-2,
.plan2-footer-details-2,
.marketplace1-footer-details-2 {
  margin-top: 16px;
}

.marketplace1-footer-details-2 {
  display: flex;
  margin-top: 32px;
}

.marketplace1-footer-details-2 p {
  font-size: 10px;
}

.plan1-footer-details p,
.plan2-footer-details p,
.marketplace1-footer-details p {
  margin: 31px 0 -13px 0;
  font-size: 8px;
}

.plan2 {
  position: relative;
  background-color: #f0e2e2;
  padding: 20px;
  height: 113px;
  width: 100%;
  box-shadow: 0px 2px 3px rgba(0, 48, 2, 0.08);
}
.plan2-header .paused-button,
.marketplace1 .paused-button {
  background-color: #cc3639;
  color: #fff;
  margin-left: 60px;
  border-radius: 4px;
  padding: 0px 14px;
  font-size: 6.85px;
  position: absolute;
  top: 20px;
  right: 20px;
}

.marketplace1 {
  border: 1px solid #63c132;
  box-shadow: 0px 5px 5px rgba(0, 48, 2, 0.08);
  padding: 20px;
  height: 155px;
  width: 100%;
  cursor: pointer;
  transition: transform 0.8s;
}

.marketplace1:hover {
  transform: scale(1.1);
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
}
</style>
