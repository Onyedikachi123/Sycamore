<template>
  <v-container class="bank_accounts pl-7 pr-7" fluid>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="20"
      class="elevation-1"
      ><template v-slot:top>
        <div class="py-3 px-3">
          <v-row align="center">
            <v-col cols="12" sm="6">
              <div class="text-left">
                <div class="my-2">
                  <h3>Bank Accounts</h3>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="text-right">
                <div class="my-2">
                  <v-btn color="info" @click.stop="showForm = !showForm" dark>
                    Add Bank Account
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-form ref="form" v-show="showForm" v-model="valid" lazy-validation>
            <v-text-field
              v-model="accountNumber"
              :counter="10"
              :rules="[v => !!v || 'Account number is required']"
              label="Account Number"
              required
            ></v-text-field>
            <v-select
              v-model="bank"
              :items="items"
              :rules="bankRules"
              label="Item"
              required
            ></v-select>

            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Account Name"
              required
              disabled
            ></v-text-field>
            <v-btn color="error" class="mr-4" @click="reset">
              Reset Form
            </v-btn>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Submit
            </v-btn>
          </v-form>
        </div>
        <v-divider></v-divider>
      </template> </v-data-table
  ></v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BankAccounts",
  data: () => ({
    showForm: false,
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
  })
});
</script>
