<template>
  <v-container
    class="investment_history mt-2  pr-5 pl-5 grey--text text--darken-3pl-7 pr-7"
    fluid
  >
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="20"
      class="elevation-1 mt-1"
    ></v-data-table>
  </v-container>
</template>

<script>
import { authHeader } from "@/_helpers/auth-header";
import axios from "axios";
import Vue from "vue";
import { mapActions, mapState } from "vuex";
export default Vue.extend({
  name: "InvestmentHistory",
  data() {
    return {
      investmentsHistory: null,
      loading: false,
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  },
  computed: {
    ...mapState("investments", ["status"])
    // getInvestments: function() {
    //   return this.getInvestments();
    // }
  },
  mounted() {
    // this.getInvestments();
    // console.log(this.state);
  },
  created() {
    this.state = this.$store.state;
    this.getInvestmentHistory();
  },
  methods: {
    ...mapActions("investments", ["getInvestments", "getInvestmentHistory"]),
    getInvestments() {
      // this.getInvestments();
      axios
        .post(
          "https://mobile.creditclan.com/api/v3/customer/investments/history",
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
            this.investmentsHistory = res.data.data;
            return;
          }
        });
    }
  }
});
</script>
