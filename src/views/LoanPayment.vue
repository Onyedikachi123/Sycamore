<template>
  <v-container class="profile" fluid>
    <v-row justify="center">
      <v-col cols="12" md="6" sm="12">
        <v-card class="py-5 px-10" v-if="step == 0">
          <v-list-item-content class="mb-5">
            <v-list-item-title class="title">
              Enter the amount you want to pay
            </v-list-item-title>
            <v-list-item-subtitle
              >This is required to process this
              application</v-list-item-subtitle
            >
          </v-list-item-content>
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="">
              <validation-provider
                v-slot="{ errors }"
                name="How much do you want to pay?"
                :rules="{
                  required: true
                }"
              >
                <v-text-field
                  v-model="amount"
                  :error-messages="errors"
                  type="number"
                  label="How much do you want to pay?"
                  required
                  outlined
                ></v-text-field>
              </validation-provider>
              <validation-provider
                name="Select Loan to pay"
                rules="required"
                v-slot="{ errors }"
              >
                <v-select
                  v-model="requestId"
                  :items="currentLoan"
                  :error-messages="errors"
                  label="Select Loan to pay"
                  item-text="REQUEST_PRINCIPAL"
                  item-value="REQUEST_ID"
                  required
                  outlined
                ></v-select>
              </validation-provider>

              <div class="btn-block">
                <paystack
                  :loading="loading"
                  :disabled="invalid || loading"
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
                  Pay Now
                  <v-icon right dark>
                    mdi-cash
                  </v-icon>
                </paystack>
                <!-- <v-btn
                  :loading="loading"
                  :disabled="invalid || loading"
                  type="submit"
                  style="font-size: 14.26px; outline: none"
                  color="primary"
                >
                  Pay Now
                  <span>
                    <v-icon icon="chevron-right" class="card-icons"></v-icon>
                  </span>
                </v-btn> -->
              </div>
            </form>
          </validation-observer>
        </v-card>

        <v-card class="py-5 px-10" v-if="step == 1">
          <div class="text-center p-5">
            <div class="success-image">
              <v-img
                alt="SUCCESS"
                contain
                height="300"
                :src="require('../assets/finishloan.png')"
                transition="scale-transition"
                width="auto"
              />
            </div>
            <v-list-item-content class="mb-5">
              <v-list-item-title class="title">
                Loan repayment successful
              </v-list-item-title>
              <v-list-item-subtitle
                >Your payment has been sent successfully.</v-list-item-subtitle
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
              Go to dashboard
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
import { mapState, mapActions } from "vuex";
import Vue from "vue";
import { required } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";
import paystack from "vue-paystack";
setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

export default Vue.extend({
  name: "Loan",
  components: {
    ValidationProvider,
    ValidationObserver,
    paystack
  },
  data: () => ({
    paystackkey: "pk_test_564016ad5c85950dbb2af2e6a14957faa89adb28", //paystack public key
    amount: 0,
    requestId: null,
    step: 0
  }),
  props: {
    // Use "value" here to enable compatibility with v-model
    value: Object
  },
  watch: {
    loanRepaymentSuccess: function() {
      this.step++;
    }
  },
  mounted() {
    // console.log(this.user.user_id);
  },
  created() {
    //comment
    this.getLoans();
  },

  computed: {
    ...mapState("loans", [
      "loading",
      "loanSuccess",
      "currentLoan",
      "loanRepaymentSuccess"
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
    ...mapActions("loans", ["getLoans", "repayLoan"]),
    callback: function(response) {
      if (response.status == "success") {
        const data = [];
        data["ref"] = response.trxref;
        data["requestId"] = this.requestId;
        this.repayLoan({ data });
      } else {
        alert("Something went wrong! Please try again");
      }
    },
    close: function() {
      console.log("Payment closed");
    },

    async applyNow() {
      const validate = this.$refs.observer.validate();
      validate.then(valid => {
        if (valid) {
          this.loanApply({ data: this.profileData });
        } else {
          this.thisMessage = "Please fill in all fields";
          this.thisError = true;
        }
      });
    }
  }
});
</script>
<style scoped>
/* form */
.text-danger {
  color: #cc3639;
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
