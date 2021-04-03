<template>
  <v-container class="investment_portfolio pl-7 pr-7" fluid> </v-container>
</template>

<script>
import { authHeader } from "@/_helpers/auth-header";
import axios from "axios";
import Vue from "vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "InvestmentPortfolio",
  data: () => ({
    portfolio: null,
    state: null
  }),
  computed: {
    ...mapState("investments", ["status"])
    // getInvestments: function() {
    //   return this.getInvestments();
    // }
  },
  mounted() {
    this.getInvestments();
    console.log(this.state);
  },
  created() {
    this.state = this.$store.state;
  },
  methods: {
    ...mapActions("investments", ["getInvestments", "logout"]),
    getInvestments() {
      // this.getInvestments();
      axios
        .post(
          "https://mobile.creditclan.com/api/v3/customer/investment/portfolio",
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
            console.log(res.data.data);
            this.portfolio = res.data.data;
            return;
          }
        });
    }
  }
});
</script>
