<template>
  <paystack
    :amount="amount"
    :email="email"
    :paystackkey="paystackkey"
    :reference="reference"
    :callback="callback"
    :close="close"
    :embed="false"
  >
    <i class="fas fa-money-bill-alt"></i>
    Make Payment
  </paystack>
</template>

<script type="text/javascript">
import paystack from "vue-paystack";
export default {
  components: {
    paystack
  },
  props: ["open", "url", "checkUrl"],
  data() {
    return {
      paystackkey: "sk_test_57a2c248333b88510c638f4c3605bb2b6063aee7", //paystack public key
      email: this.$store.state.account.user.data.email, // Customer email
      amount: 1000000, // in kobo,
      state: this.$store.state
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
  created() {
    this.state = this.$store.state;
  },
  methods: {
    callback: function(response) {
      console.log(response);
    },
    close: function() {
      console.log("Payment closed");
    }
  }
};
</script>
