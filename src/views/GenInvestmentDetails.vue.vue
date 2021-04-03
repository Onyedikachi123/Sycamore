<template>
  <v-container class="investment_details pl-7 pr-7" fluid>
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
    <v-row v-if="investmentDetails">
      <v-col cols="12" sm="12" md="6">
        <v-card flat class="mx-auto">
          <v-img height="250" src="@/assets/marketplace-pic.png"></v-img>
          <v-btn
            width="100%"
            :loading="loading"
            :disabled="loading"
            @click="investmentDialog = true"
            depressed
            color="primary"
            class="mt-5"
          >
            Invest in this product
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-card class="mx-auto" flat>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ investmentDetails.INVESTMENT_TITLE }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ investmentDetails.ADDED_BY }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <h1>{{ investmentDetails.status_text }}</h1>
          </v-card-text>

          <v-list class="transparent">
            <v-list-item>
              <v-list-item-title>Investment Amount</v-list-item-title>

              <v-list-item-subtitle class="text-right">
                &#8358; {{ investmentDetails.INVESTMENT_AMOUNT }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Max Investment Amount</v-list-item-title>

              <v-list-item-subtitle class="text-right">
                &#8358; {{ investmentDetails.INVESTMENT_MAX_AMOUNT }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Total Rate</v-list-item-title>
              <v-list-item-subtitle class="text-right">
                {{ investmentDetails.INTEREST }}%
              </v-list-item-subtitle>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Interest Duration</v-list-item-title>

              <v-list-item-subtitle class="text-right">
                {{ investmentDetails.INTEREST_DURATION }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-card width="100%" elevation="1">
        <v-card-title>
          About the Investment
        </v-card-title>

        <v-card-subtitle>
          {{ investmentDetails.INVESTMENT_DESCRIPTION }}
        </v-card-subtitle>
      </v-card>
    </v-row>
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
            style="background-color: #E8F2E9"
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
      v-model="error"
      :timeout="5000"
      class="snackbar"
    >
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="error = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      absolute
      top
      color="success"
      elevation="24"
      v-model="success"
      :timeout="5000"
      class="snackbar"
    >
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="success = false">
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
import { authHeader } from "@/_helpers/auth-header";
import axios from "axios";

export default Vue.extend({
  name: "investmentDetails",
  components: {
    paystack
  },
  data: () => ({
    paystackkey: "pk_test_564016ad5c85950dbb2af2e6a14957faa89adb28", //paystack public key
    email: "", // Customer email
    snackbar: true,
    timeout: 2000,
    portfolio: null,
    investments: [],
    investmentDetails: null,
    state: null,
    loading: false,
    error: false,
    success: false,
    message: "",
    investmentDialog: false,
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
    ...mapState("investments", ["status"]),
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
    // this.getInvestmentDetails(this.$route.params.id);
  },

  created() {
    this.getInvestments();
    this.email = this.$store.state.account.user.data.email;
    // this.state = this.$store.investments;
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
      "createInvestment",
      "getInvestmentSuccess",
      "getInvestmentDetails",
      "liquidateInvestment",
      "terminateInvestment",
      "topupInvestment",
      "rolloverInvestment"
    ]),
    getInvestments: function() {
      this.loading = true;
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
            this.loading = false;
            console.log(res.data);
          } else {
            this.investments = res.data.data;
            // console.log(res.data.data);
            const productDet = res.data.data.filter(
              product => product.INVESTMENT_PRODUCT_ID == this.$route.params.id
            );
            this.investmentDetails = productDet[0];
            this.loading = false;
          }
        });
    },
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
    createNewInvestment(ref) {
      const duration = this.planDuration;
      const amount = this.amount;
      const productId = this.productId;
      return this.createInvestment({ duration, amount, productId, ref });
    }
  }
});
</script>
