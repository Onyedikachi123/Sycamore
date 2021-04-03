<template>
  <v-container class="investment_details pl-7 pr-7" fluid>
    <v-snackbar
      :timeout="timeout"
      :value="true"
      absolute
      top
      color="error"
      elevation="24"
      v-model="state.error"
    >
      {{ state.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="secondary"
          text
          v-bind="attrs"
          @click="state.error = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      :timeout="timeout"
      :value="true"
      absolute
      top
      color="success"
      elevation="24"
      v-model="state.success"
    >
      {{ state.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="secondary"
          text
          v-bind="attrs"
          @click="state.success = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <div class="text-center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
        v-if="state.loading"
        class="ma-10"
      ></v-progress-circular>
    </div>
    <v-row v-if="state.investmentDetails">
      <v-col cols="12" sm="12" md="6">
        <v-card flat class="mx-auto">
          <v-img
            contain
            height="250"
            :src="state.investmentDetails.FILE_NAME"
          ></v-img>
          <v-row class="pa-2">
            <v-col cols="12" sm="12" md="6">
              <v-btn
                width="100%"
                :loading="state.loading"
                :disabled="state.loading"
                @click="liquidateDialog = true"
                color="primary"
                elevation="0"
                class="mt-3"
              >
                Liquidate Investment
              </v-btn>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-btn
                width="100%"
                :loading="state.loading"
                :disabled="state.loading"
                @click="topupDialog = true"
                elevation="0"
                class="mt-3"
              >
                Topup Investment
              </v-btn>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-btn
                width="100%"
                :loading="state.loading"
                :disabled="state.loading"
                @click="rolloverDialog = true"
                color="primary"
                elevation="0"
              >
                Rollover Investment
              </v-btn>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-btn
                width="100%"
                :loading="state.loading"
                :disabled="state.loading"
                @click="terminateDialog = true"
                elevation="0"
              >
                Terminate Investment
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-card class="mx-auto" flat>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="sub-title">
                {{ state.investmentDetails.INVESTMENT_TITLE }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ state.investmentDetails.ADDED_BY }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <h2
              v-if="state.investmentDetails.status_text === 'Active'"
              style="
                color: green;
                background: #dcffd6;
                padding: 10px;
                display: inline-block;
              "
            >
              {{ state.investmentDetails.status_text }}
            </h2>
            <h2
              v-if="state.investmentDetails.status_text !== 'Active'"
              style="
                color: red;
                background: #fad9dc;
                padding: 10px;
                display: inline-block;
              "
            >
              {{ state.investmentDetails.status_text }}
            </h2>
          </v-card-text>
          <v-list class="transparent">
            <v-list-item>
              <v-list-item-title class="fontSize"
                >Current Balance</v-list-item-title
              >

              <v-list-item-subtitle class="text-right fontSize">
                &#8358; {{ state.investmentDetails.CURRENT_BALANCE }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="fontSize">Capital</v-list-item-title>

              <v-list-item-subtitle class="text-right fontSize">
                &#8358; {{ state.investmentDetails.REQUEST_PRINCIPAL }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="fontSize"
                >Total Interest</v-list-item-title
              >
              <v-list-item-subtitle class="text-right fontSize">
                &#8358; {{ state.investmentDetails.TOTAL_INTERESTS }}
              </v-list-item-subtitle>
            </v-list-item>

            <v-list-item>
              <v-list-item-title class="fontSize"
                >Maturity Date</v-list-item-title
              >

              <v-list-item-subtitle class="text-right fontSize">
                {{
                  new Date(state.investmentDetails.MATURITY_DATE).toDateString()
                }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="fontSize"
                >Maturity Value</v-list-item-title
              >

              <v-list-item-subtitle class="text-right fontSize">
                &#8358; {{ state.investmentDetails.MATURITY_VALUE }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="rolloverDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span> Roll-Over Investment</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="rolloverDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-select
            :items="durations"
            v-model="planDuration"
            name="text"
            item-text="text"
            :rules="[v => !!v || 'Duration is required']"
            label="Select Duration"
            item-value="value"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="rolloverDialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :loading="state.loading"
            :disabled="state.loading"
            @click="rolloverInvest"
            color="primary"
          >
            Roll-Over Investment
            <v-icon right> mdi-chevron-right </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="topupDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span> Top-Up Investment</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="topupDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="amount"
            :rules="[v => !!v || 'Amount is required']"
            label="How much do you want to top-up"
            required
            type="number"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="topupDialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <paystack
            :amount="amount * 100"
            :email="$store.state.account.user.data.email"
            :paystackkey="paystackkey"
            :reference="reference"
            :callback="callback"
            :close="close"
            :embed="false"
            style="background-color: #e8f2e9"
            color="#002D04"
            class="mt-2 v-btn v-btn--depressed theme--light v-size--small primary"
          >
            Top-Up Investment
          </paystack>
          <!-- <v-btn
            :loading="state.loading"
            :disabled="state.loading"
            @click="rolloverInvestment"
            color="primary"
          >
            Top-Up Investment
            <v-icon right>
              mdi-chevron-right
            </v-icon>
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="liquidateDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span> Liquidate Investment</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="liquidateDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="amount"
            :rules="[v => !!v || 'Amount is required']"
            label="Amount"
            required
          ></v-text-field>
          <v-select
            :items="$store.state.banks.bankAccounts"
            v-model="bankId"
            name="bank_name"
            item-text="bank_name"
            :rules="[v => !!v || 'Bank Account is required']"
            label="Select Bank Account"
            item-value="account_id"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="liquidateDialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :loading="state.loading"
            :disabled="state.loading"
            @click="liquidateInvest"
            color="primary"
          >
            Liquidate Investment
            <v-icon right> mdi-chevron-right </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="terminateDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span> Terminate Investment</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="terminateDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-select
            :items="$store.state.banks.bankAccounts"
            v-model="bankId"
            name="bank_name"
            item-text="bank_name"
            :rules="[v => !!v || 'Bank Account is required']"
            label="Select Bank Account"
            item-value="account_id"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="terminateDialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :loading="state.loading"
            :disabled="state.loading"
            @click="terminateInvest"
            color="primary"
          >
            Terminate Investment
            <v-icon right> mdi-chevron-right </v-icon>
          </v-btn>
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
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import paystack from "vue-paystack";

export default Vue.extend({
  name: "investmentDetails",
  components: {
    paystack
  },
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
  computed: {
    ...mapState("investments", ["status", "message"]),
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
    // console.log(this.state);
    this.getInvestmentDetails(this.$route.params.id);
  },

  created() {
    this.state = this.$store.state.investments;
    this.getBankAccounts();
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
    ...mapActions("investments", [
      "getInvestments",
      "createInvestment",
      "getInvestmentSuccess",
      "getInvestmentDetails",
      "liquidateInvestment",
      "terminateInvestment",
      "topupInvestment",
      "rolloverInvestment"
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
    topupInvest(ref) {
      const requestId = this.$route.params.id;
      const amount = this.amount;
      return this.topupInvestment({ requestId, amount, ref });
    },

    liquidateInvest() {
      const requestId = this.$route.params.id;
      const bankId = this.bankId;
      const amount = this.amount;
      this.liquidateDialog = false;
      return this.liquidateInvestment({ requestId, bankId, amount });
    },
    rolloverInvest() {
      const requestId = this.$route.params.id;
      const duration = this.planDuration;
      this.rolloverDialog = false;
      return this.rolloverInvestment({ requestId, duration });
    },

    terminateInvest() {
      const requestId = this.$route.params.id;
      const bankId = this.bankId;
      this.terminateDialog = false;
      return this.terminateInvestment({ requestId, bankId });
    }
  }
});
</script>

<style scoped>
.fontSize {
  font-size: 15px;
}
</style>
