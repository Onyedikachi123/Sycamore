<template>
  <v-container class="savings pl-7 pr-7" fluid>
    <div>
      <v-card class="pa-5">
        <v-tabs class="mb-5" v-model="tab" background-color="transparent" grow>
          <v-tab v-for="item in tabItems" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-divider class="py-3"></v-divider>
        <v-tabs-items v-model="tab">
          <v-tab-item :key="0">
            <div class="text-center ">
              <v-progress-circular
                :size="70"
                :width="7"
                color="primary"
                indeterminate
                v-if="state.loading && !state.savings"
                class="ma-10"
              ></v-progress-circular>
            </div>
            <v-row v-if="!state.loading && state.savings">
              <!-- <v-col
                v-model="state.investmentPortfolio"
                v-for="(item, index) in state.investmentPortfolio"
                :key="index"
                cols="12"
                sm="12"
                md="4"
              >
                <v-card
                  :to="`/savings/${item.INVESTMENT_ID}`"
                  class="mx-auto"
                  max-width="344"
                  outlined
                >
                  <v-list-item three-line>
                    <v-list-item-content class="">
                      <div class="subheading mb-10">
                        <h1>Plan {{ index }}</h1>
                        <small>Maturity Date: {{ item.MATURITY_DATE }}</small>
                      </div>
                      <v-list-item-subtitle>
                        67% cleared
                        <v-progress-linear
                          v-model="valueDeterminate"
                          color="primary"
                        ></v-progress-linear>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content class="text-right">
                      <div class="overline mb-10">
                        <v-btn class="white--text p-1" color="grey" depressed>
                          PENDING
                        </v-btn>
                      </div>
                      <v-list-item-title class=" mb-1">
                        <h3>
                          <h6 class="d-inline">₦</h6>
                          {{ item.FINAL_INVESTMENT }}
                          <h6 class="d-inline">.00</h6>
                        </h3>
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ item.REQUEST_TENOR }} months |
                        {{ item.REQUEST_RATE }}%
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
              <v-col
                v-model="state.investments.pendingInvestments"
                v-for="(item, index) in state.investments.pendingInvestments"
                :key="index"
                cols="12"
                sm="12"
                md="4"
              >
                <v-card
                  :to="`/investments/${item.INVESTMENT_ID}`"
                  class="mx-auto"
                  max-width="344"
                  outlined
                >
                  <v-list-item three-line>
                    <v-list-item-content class="">
                      <div class="subheading mb-10">
                        <h1>Plan {{ index }}</h1>
                        <small>Maturity Date: {{ item.MATURITY_DATE }}</small>
                      </div>
                      <v-list-item-subtitle>
                        67% cleared
                        <v-progress-linear
                          v-model="valueDeterminate"
                          color="primary"
                        ></v-progress-linear>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content class="text-right">
                      <div class="overline mb-10">
                        <v-btn class="white--text p-1" color="grey" depressed>
                          PENDING
                        </v-btn>
                      </div>
                      <v-list-item-title class=" mb-1">
                        <h3>
                          <h6 class="d-inline">₦</h6>
                          {{ item.FINAL_INVESTMENT }}
                          <h6 class="d-inline">.00</h6>
                        </h3>
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ item.REQUEST_TENOR }} months |
                        {{ item.REQUEST_RATE }}%
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col> -->

              <v-col cols="12" sm="12" md="4">
                <v-card
                  v-model="tab"
                  :key="1"
                  @click="savingsDialog = true"
                  outlined
                  class=" text-center"
                >
                  <v-icon size="100" color="primary" center>
                    mdi-plus
                  </v-icon>
                  <p>Add Savings</p>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item :key="1">
            <div class="text-center ">
              <v-progress-circular
                :size="70"
                :width="7"
                color="primary"
                indeterminate
                v-if="state.loading && !state.savingsHistory"
                class="ma-10"
              ></v-progress-circular>
            </div>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="20"
              class="elevation-1 mt-1"
              v-if="!state.loading && state.savingsHistory"
            ></v-data-table>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
    <v-dialog v-model="savingsDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span>Create new savings</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="savingsDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="title"
            :rules="[v => !!v || 'Title of Savings is required']"
            label="Title of Savings"
            required
          ></v-text-field>
          <v-text-field
            v-model="amount"
            :rules="[v => !!v || 'Amount is required']"
            label="Amount"
            required
            type="number"
          ></v-text-field>
          <v-text-field
            v-model="target"
            :rules="[v => !!v || 'Target amount is required']"
            label="Target amount"
            required
            type="number"
          ></v-text-field>
          <v-text-field
            v-model="frequency"
            :rules="[v => !!v || 'Frequency  is required']"
            label="Freuency (No of times per period)"
            required
            type="number"
          ></v-text-field>
          <v-text-field
            v-model="duration"
            :rules="[v => !!v || 'Duration is required']"
            label="Duration (months)"
            required
            type="number"
          ></v-text-field>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startDate"
                label="Start date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="startDate" type="month" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(startDate)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>

          <v-select
            :items="selectFundingSource"
            v-model="fundingSource"
            :rules="[v => !!v || 'Funding source is required']"
            label="Select Funding source"
            item-value="id"
          ></v-select>
          <v-select
            :items="categoryList"
            v-model="category"
            :rules="[v => !!v || 'Category is required']"
            label="Select Category"
            item-value="id"
          ></v-select>
          <v-select
            :items="automatedSelect"
            v-model="automated"
            :rules="[v => !!v || 'Automated Option is required']"
            label="Select Automated Option"
            item-value="id"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="savingsDialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :loading="state.loading"
            :disabled="state.loading"
            @click="addNewSavings"
            color="primary"
          >
            Save
            <v-icon right>
              mdi-chevron-right
            </v-icon>
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
import { mapActions } from "vuex";
export default Vue.extend({
  savings: null,
  data() {
    return {
      name: "Savings",
      state: null,
      title: "",
      duration: "",
      target: "",
      frequency: "",
      startDate: "",
      category: "",
      automated: "",
      amount: "",
      connectCardId: "Connected Card",
      paymentMethod: "",
      fundingSource: "",
      valueDeterminate: 50,
      savingsDialog: false,
      tab: null,
      tabItems: ["Active Plans", "History"],
      select: [
        { text: "Paystack", id: 1 },
        { text: "Paypal", id: 2 }
      ],
      selectFundingSource: [
        { text: "Capital", id: 1 },
        { text: "Business", id: 2 }
      ],
      categoryList: [
        { text: "Basic", id: 1 },
        { text: "Standard", id: 2 },
        { text: "Advances", id: 3 }
      ],
      automatedSelect: [{ text: "Yes" }, { text: "No" }],
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
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
    // ...mapState("Savings", ["status"])
  },
  mounted() {
    // this.getSavings();
  },
  created() {
    this.state = this.$store.state.savings;
    this.getSavings();
    this.getSavingsHistory();
  },
  methods: {
    ...mapActions("savings", [
      "getSavings",
      "createNewSavings",
      "getSavingsHistory"
    ]),
    addNewSavings() {
      const title = this.title;
      const amount = this.amount;
      const target = this.target;
      const frequency = this.frequency;
      const duration = this.duration;
      const startDate = this.startDate;
      const fundingSource = this.fundingSource;
      const category = this.category;
      const automated = this.automated;
      const connectCardId = this.connectCardId;
      if (
        title &&
        amount &&
        target &&
        frequency &&
        duration &&
        startDate &&
        fundingSource &&
        category &&
        automated &&
        connectCardId
      ) {
        this.createNewSavings({
          title,
          amount,
          target,
          frequency,
          duration,
          startDate,
          fundingSource,
          category,
          automated,
          connectCardId
        });
      } else {
        this.$swal({
          title: "Error!",
          text: "Please fill in all fields",
          type: "error",
          showCancelButton: false,
          cancelButtonText: "Close",
          showCloseButton: true,
          showLoaderOnConfirm: true
        });
      }
    }
  }
});
</script>
<style scoped>
.snackbar {
  z-index: 200000;
}
</style>
