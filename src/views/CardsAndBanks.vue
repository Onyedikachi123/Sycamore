<template>
  <v-container class="cards_and_banks pl-7 pr-7" fluid>
    <div class="wrapper">
      <CardTabs>
        <CardTab name="Wallet" selected="true">
          <div class="text-center">
            <v-progress-circular
              class="ma-10"
              :size="70"
              :width="7"
              color="primary"
              indeterminate
              v-if="loading && wallet == null"
            ></v-progress-circular>
          </div>
          <v-card v-if="!loading && wallet != null" width="100%" elevation="1">
            <v-card-title> Wallet Balance </v-card-title>

            <v-card-subtitle>
              &#8358;
              {{ wallet.wallet_balance == null ? "0" : wallet.wallet_balance }}
            </v-card-subtitle>
          </v-card>
          <v-row>
            <v-col cols="12" sm="12" md="4" class="mt-4">
              <v-card @click.stop="dialog = true" outlined class="text-center">
                <v-icon size="100" color="primary" center> mdi-plus </v-icon>
                <p>Top up Via Card</p>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="4" class="mt-4">
              <v-card
                @click.stop="withdrawdialog = true"
                outlined
                class="text-center"
              >
                <v-icon size="100" color="primary" center> mdi-cards </v-icon>
                <p>Withdraw</p>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="4" class="mt-4">
              <v-card to="/transaction_history" outlined class="text-center">
                <v-icon size="100" color="primary" center>
                  mdi-cash-multiple
                </v-icon>
                <p>View Transaction History</p>
              </v-card>
            </v-col>
          </v-row>
        </CardTab>
        <CardTab name="Cards">
          <div class="text-center">
            <v-progress-circular
              class="ma-10"
              :size="70"
              :width="7"
              color="primary"
              indeterminate
              v-if="loading"
            ></v-progress-circular>
          </div>
          <v-row>
            <v-col cols="12" sm="12" md="4">
              <v-card class="pa-2" flat>
                <div class="cards-banks">
                  <!-- <v-card class="bank-card theme--light" flat></v-card> -->
                  <paystack
                    :amount="500"
                    :email="$store.state.account.user.data.email"
                    :paystackkey="paystackkey"
                    :reference="reference"
                    :callback="callback"
                    :close="close"
                    :embed="false"
                  >
                    <v-card
                      class="upload-card d-flex flex-column align-center justify-end v-card v-card--flat v-sheet theme--light"
                      height="113"
                      flat
                    >
                      <v-icon
                        color="primary"
                        size="40"
                        class="fas fa-plus mt-4"
                      ></v-icon>
                      <p class="pt-2">Add new card</p>
                    </v-card>
                  </paystack>
                </div>
              </v-card>
            </v-col>

            <v-col
              v-model="cards"
              v-for="(item, index) in cards"
              :key="index"
              cols="12"
              sm="12"
              md="4"
              class="mt-2"
            >
              <div class="fake-card">
                <v-img
                  height="113"
                  max-width="300"
                  :src="require('@/assets/card.png')"
                >
                  <h2
                    style="
                      position: absolute;
                      bottom: 40%;
                      left: 5%;
                      color: #fff;
                      font-size: 14px;
                    "
                  >
                    {{
                      item.LAST_FOUR_DIGITS != null &&
                        "XXXX XXXX XXXX " + item.LAST_FOUR_DIGITS
                    }}
                  </h2>
                  <p
                    style="position: absolute; bottom: 0; left: 5%; color: #fff"
                  >
                    Expires {{ item.EXPIRY_DATE }}
                  </p>
                  <v-img
                    max-height="30"
                    max-width="50"
                    :src="require('@/assets/mastercard.png')"
                    style="position: absolute; bottom: 10%; right: 5%"
                  ></v-img>
                </v-img>
              </div>
            </v-col>
          </v-row>
        </CardTab>
        <CardTab name="Banks">
          <div class="cards-banks">
            <div class="text-center">
              <v-progress-circular
                class="ma-10"
                :size="70"
                :width="7"
                color="primary"
                indeterminate
                v-if="loading && !bankAccounts"
              ></v-progress-circular>
            </div>
            <v-row v-model="bankAccounts">
              <v-col cols="12" sm="12" md="4">
                <v-card
                  class="upload-card d-flex flex-column align-center justify-end v-card v-card--flat v-sheet theme--light"
                  flat
                  height="113"
                >
                  <v-icon
                    color="primary"
                    size="40"
                    class="fas fa-plus mt-4"
                  ></v-icon>
                  <p class="pt-2">Add Bank Account</p>
                </v-card>
              </v-col>
              <v-col
                v-model="bankAccount"
                v-for="(item, index) in bankAccounts"
                :key="index"
                cols="12"
                sm="12"
                md="4"
              >
                <div class="fake-card">
                  <v-img
                    height="113"
                    max-width="300"
                    :src="require('@/assets/card.png')"
                  >
                    <p
                      style="position: absolute; top: 0; left: 5%; color: #fff"
                    >
                      {{ item.account_name }}
                    </p>
                    <h4
                      style="
                        position: absolute;
                        bottom: 45%;
                        left: 5%;
                        color: #fff;
                      "
                    >
                      {{ item.account_number.replace(/.(?=.{4})/g, "x") }}
                    </h4>
                    <p
                      style="
                        position: absolute;
                        bottom: 0;
                        left: 5%;
                        color: #fff;
                      "
                    >
                      {{ item.bank_name }}
                    </p>
                    <v-img
                      max-height="20"
                      max-width="50"
                      :src="require('@/assets/mastercard.png')"
                      style="position: absolute; bottom: 10%; right: 5%"
                    ></v-img>
                  </v-img>
                </div>
              </v-col>
            </v-row>
          </div>
        </CardTab>
      </CardTabs>
    </div>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span>Fund Wallet</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
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
            :items="cards"
            v-model="card"
            :rules="[v => !!v || 'Bank Account required']"
            label="Select Card"
            item-value="text"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary">
            Make Payments
            <v-icon right> mdi-chevron-right </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="withdrawdialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span>Withdraw Funds</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="withdrawdialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="amount"
            :rules="[v => !!v || 'Amount is required']"
            label="Amount"
            required
            type="number"
          ></v-text-field>
          <v-select
            :items="bankAccounts"
            v-model="bankAccount"
            name="bank_name"
            item-text="bank_name"
            :rules="[v => !!v || 'Bank Account is required']"
            label="Select Bank"
            item-value="account_id"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="withdrawdialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="withdrawFunds" color="primary">
            Withdraw Funds
            <v-icon right> mdi-chevron-right </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="bankdialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span>Add Bank Account</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="bankdialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="accountNo"
            :rules="[v => !!v || 'Account Number is required']"
            label="Account Number"
            required
            value=""
          ></v-text-field>

          <v-select
            :items="banks"
            v-model="bankCode"
            name="bank_name"
            item-text="bank_name"
            :rules="[v => !!v || 'Bank Name is required']"
            label="Select Bank"
            item-value="bank_code"
            @change="resolveAccount"
          ></v-select>
          <v-text-field
            v-if="userDetails"
            v-model="userDetails.account_name"
            :rules="[v => !!v || 'Account Name is required']"
            label="Account Name"
            required
            disabled
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="bankdialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="secondary">
            Reset
            <v-icon right> mdi-chevron-right </v-icon>
          </v-btn>
          <v-btn @click="saveAccount" color="primary">
            Add Bank Account
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

<script lang="ts">
import Vue from "vue";
import CardTab from "./components/Card-Tabs/CardTab.vue";
import CardTabs from "./components/Card-Tabs/CardTabs.vue";
import paystack from "vue-paystack";
import { mapActions, mapState } from "vuex";
// import CardDialog from "./components/CardDialog.vue";
// import Card from "./components/Card.vue";
// import BankModal from "./components/BankModal.vue";

export default Vue.extend({
  // components: { CardDialog },
  // components: { BankModal },
  // components: { Card },
  name: "CardsAndBanks",
  components: {
    CardTab,
    CardTabs,
    paystack
  },
  data: () => ({
    paystackkey: "pk_test_564016ad5c85950dbb2af2e6a14957faa89adb28", //paystack public key
    withdrawdialog: false,
    bankdialog: false,
    bankAccount: null,
    tab: null,
    amount: "",
    card: "",
    dialog: false,
    accountName: "",
    accountNo: "",
    bankCode: "",
    bankId: [],
    bankState: null,
    errors: false,
    tabItems: ["Wallet", "Cards", "Banks"]
  }),
  created() {
    if (this.$store.state.banks.userDetails) {
      this.accountName = this.$store.state.banks.userDetails.account_name;
      this.bankId = this.$store.state.banks.userDetails.bank_id;
    }
    console.log(this.bankState);
    this.getBankAccounts();
    this.getCards();
    this.getWallet();
  },
  mounted() {
    // this.getBanks();
    // this.getBankMyAccounts();
    console.log(this.wallet);
  },
  computed: {
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
    callback: function(response: any) {
      if (response.status == "success") {
        this.addCard(response.trxref);
      } else {
        alert("Something went wrong! Please try again");
      }
    },
    close: function() {
      console.log("Payment closed");
    },
    resolveAccount() {
      if (this.accountNo && this.bankCode) {
        const accountNo = this.accountNo;
        const bankCode = this.bankCode;
        this.resolveBankAccount({ accountNo, bankCode });
      }
    },
    getBank() {
      this.bankId = this.$store.state.banks.banks.filter(
        (bank: { bank_code: string }) => {
          return bank.bank_code == this.bankCode;
        }
      );
    },
    // getBankMyAccounts() {
    //   this.getBankAccounts();
    // },
    saveAccount() {
      this.getBank();
      // console.log(
      //   this.$store.state.banks.userDetails.account_name,
      //   this.accountNo,
      //   this.bankId
      // );
      if (
        this.$store.state.banks.userDetails.account_name &&
        this.accountNo &&
        this.bankId
      ) {
        const accountName = this.$store.state.banks.userDetails.account_name;
        const accountNo = this.accountNo;
        const bankId = this.bankId[0]["bank_id"];
        console.log(accountName, accountNo, bankId);
        this.saveBankAccount({ accountName, accountNo, bankId });
      } else {
        this.errors = true;
        this.message = "Please Fill In all Fields";
      }
    },
    addCard(ref: any) {
      this.saveCard({ ref });
    },
    withdrawFunds() {
      if (this.bankAccount && this.amount) {
        const accountId = this.bankAccount;
        const amount = this.amount;
      }
    }
  }
});
</script>
<style scoped>
.snackbar {
  z-index: 200000;
}

.wrapper {
  background-color: #fff;
  margin-top: 15px;
  padding: 20px;
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
  margin: 0px auto;
  height: 150px;
  width: 300px;
  border-radius: 8px;
}
.cards-banks .upload-card i {
  cursor: pointer;
  margin-top: -15px;
}
.cards {
  height: 150px;
  width: 300px;
  background-color: #e8f2e9;
}
</style>
