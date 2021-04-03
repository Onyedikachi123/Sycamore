<template>
  <v-container class="loans pl-7 pr-7" fluid>
    <div class="wrapper">
      <div align="right">search filter sort</div>
      <CardTabs>
        <CardTab name="Loans" selected="true">
          <div class="text-center">
            <v-progress-circular
              :size="70"
              :width="7"
              color="primary"
              indeterminate
              v-if="loading && currentLoan.length == 0"
              class="ma-10"
            ></v-progress-circular>
          </div>
          <v-row gutters>
            <v-col cols="12" sm="12" md="4">
              <v-card class="py-2" flat>
                <div class="cards-banks">
                  <!-- <v-card class="bank-card theme--light" flat></v-card> -->
                  <v-card
                    class="upload-card d-flex flex-column align-center justify-end v-card v-card--flat v-sheet theme--light"
                    flat
                    height="113"
                    to="/loans/apply"
                  >
                    <v-icon
                      color="primary"
                      size="40"
                      class="fas fa-plus mt-4"
                    ></v-icon>
                    <p class="pt-2">Apply Now</p>
                  </v-card>
                </div>
              </v-card>
            </v-col>

            <v-col
              v-model="currentLoan"
              v-for="(item, index) in currentLoan.filter(
                e => e.IS_ACCEPTED != 0
              )"
              :key="index"
              cols="12"
              sm="12"
              md="4"
            >
              <v-card
                class="py-2 d-flex flex-column align-center justify-end v-card v-card--flat v-sheet theme--light"
                :to="`/loans/${item.REQUEST_ID}`"
              >
                <div :class="item.IS_ACCEPTED == 0 ? 'plan2' : 'plan1'">
                  <div
                    :class="
                      item.IS_ACCEPTED == 0 ? 'plan2-header' : 'plan1-header'
                    "
                  >
                    <span>
                      Amount Paid <br />
                      <span
                        >&#8358;
                        {{
                          Number(item.AMOUNT_FUNDED)
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                        }}</span
                      >
                    </span>
                    <!-- <v-spacer></v-spacer> -->
                    <button
                      :class="
                        item.IS_ACCEPTED == 0
                          ? 'paused-button'
                          : 'active-button'
                      "
                    >
                      {{ item.IS_ACCEPTED == 0 ? "PENDING" : "ACTIVE" }}
                    </button>
                  </div>
                  <div
                    :class="
                      item.IS_ACCEPTED == 0 ? 'plan2-footer' : 'plan1-footer'
                    "
                  >
                    <div
                      :class="
                        item.IS_ACCEPTED == 0
                          ? 'plan2-footer-details'
                          : 'plan1-footer-details'
                      "
                    >
                      <p style="">
                        {{ item.PERCENTAGE_FUNDED || "0" }}% Achieved
                      </p>
                      <input
                        type="range"
                        :value="item.PERCENTAGE_FUNDED || 0"
                      />
                    </div>
                    <v-spacer></v-spacer>
                    <div
                      :class="
                        item.IS_ACCEPTED == 0
                          ? 'plan2-footer-details-2'
                          : 'plan1-footer-details-2'
                      "
                    >
                      <p>Amount Left</p>
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
                            {{
                              Number(item.AMOUNT_LEFT)
                                .toFixed(2)
                                .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                            }}
                          </span>
                          <!-- <span class="price-right-block"> 
                            <span
                              class="price-month font-weight-bold"
                              style="font-size: 6.55px"
                              >.00</span
                            >
                          </span> -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col></v-row
          >
        </CardTab>
        <CardTab name="Pending Loans">
          <div class="text-center">
            <v-progress-circular
              :size="70"
              :width="7"
              color="primary"
              indeterminate
              v-if="loading && currentLoan.length == 0"
              class="my-10"
            ></v-progress-circular>
          </div>
          <v-row gutters>
            <v-col
              v-model="currentLoan"
              v-for="(item, index) in currentLoan"
              :key="index"
              cols="12"
              sm="12"
              md="4"
            >
              <v-card
                v-if="item.IS_ACCEPTED == 0"
                class="py-2 d-flex flex-column align-center justify-end v-card v-card--flat v-sheet theme--light"
                :to="`/loans/${item.REQUEST_ID}`"
              >
                <div :class="item.IS_ACCEPTED == 0 ? 'plan2' : 'plan1'">
                  <div
                    :class="
                      item.IS_ACCEPTED == 0 ? 'plan2-header' : 'plan1-header'
                    "
                  >
                    <span>
                      Amount Paid <br />
                      <span
                        >&#8358;
                        {{
                          Number(item.AMOUNT_FUNDED)
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                        }}</span
                      >
                    </span>
                    <!-- <v-spacer></v-spacer> -->
                    <button
                      :class="
                        item.IS_ACCEPTED == 0
                          ? 'paused-button'
                          : 'active-button'
                      "
                    >
                      {{ item.IS_ACCEPTED == 0 ? "PENDING" : "ACTIVE" }}
                    </button>
                  </div>
                  <div
                    :class="
                      item.IS_ACCEPTED == 0 ? 'plan2-footer' : 'plan1-footer'
                    "
                  >
                    <div
                      :class="
                        item.IS_ACCEPTED == 0
                          ? 'plan2-footer-details'
                          : 'plan1-footer-details'
                      "
                    >
                      <p style="">
                        {{ item.PERCENTAGE_FUNDED || "0" }}% Achieved
                      </p>
                      <input
                        type="range"
                        :value="item.PERCENTAGE_FUNDED || 0"
                      />
                    </div>
                    <v-spacer></v-spacer>
                    <div
                      :class="
                        item.IS_ACCEPTED == 0
                          ? 'plan2-footer-details-2'
                          : 'plan1-footer-details-2'
                      "
                    >
                      <p>Amount Left</p>
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
                            {{
                              Number(item.AMOUNT_LEFT)
                                .toFixed(2)
                                .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                            }}
                          </span>
                          <!-- <span class="price-right-block">
                            <span
                              class="price-month font-weight-bold"
                              style="font-size: 6.55px"
                              >.00</span
                            >
                          </span> -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col></v-row
          >
        </CardTab>
        <CardTab name="Loans History">
          <div class="text-center">
            <v-progress-circular
              :size="70"
              :width="7"
              color="primary"
              indeterminate
              v-if="loading && loanHistory.length == 0"
              class="ma-10"
            ></v-progress-circular>
          </div>
          <v-data-table
            v-if="!loading && loanHistory.length > 0"
            :headers="headers"
            :items="loanHistory"
            :items-per-page="20"
            class="elevation-1 mt-1"
          ></v-data-table>
        </CardTab>
      </CardTabs>
    </div>
  </v-container>
</template>

<script>
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import CardTab from "./components/Card-Tabs/CardTab.vue";
import CardTabs from "./components/Card-Tabs/CardTabs.vue";
export default Vue.extend({
  name: "InvestmentPlans",
  components: {
    CardTab,
    CardTabs
  },
  data: function() {
    return {
      headers: [
        {
          text: "Amount given (₦)",
          align: "start",
          sortable: false,
          value: "HOW_MUCH_WAS_GIVEN"
        },
        {
          text: "Request Period(Months)",
          align: "start",
          value: "REQUEST_TENOR"
        },
        {
          text: "Amount Requested (₦)",
          align: "end",
          value: "REQUEST_PRINCIPAL"
        },
        { text: "Date Created", align: "end", value: "DATE_ADDED" }
      ]
    };
  },

  computed: {
    ...mapState("loans", [
      "currentLoan",
      "recentPayment",
      "loanHistory",
      "loansDetails",
      "loading"
    ])
  },
  mounted() {
    // console.log(this.currentLoan);
  },
  created() {
    this.state = this.$store.state.investments;
    this.getLoans();
  },
  methods: {
    ...mapActions("loans", ["getLoans", "getLoanHistory"])
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
  width: 100%;
  background-color: var(--v-primary-lighten1) !important;
  margin: 0 auto;
  border-radius: 8px;
}
.cards-banks .upload-card {
  border: 2px solid var(--v-primary-lighten1) !important;
  margin: 0px auto;
  height: 150px;
  width: 100%;
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
  margin-top: 5px;
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
  margin: 10px 0 -13px 0;
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
