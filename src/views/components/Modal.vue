<template>
  <v-dialog max-width="500px">
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
          :items="select"
          v-model="paymentMethod"
          :rules="[v => !!v || 'Payment Method is required']"
          label="Select Payment Method"
          item-value="text"
        ></v-select>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="dialog = false">
          Close
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary">
          Make Payments
          <v-icon right>
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  valueDeterminate: 50,
  paymentMethod: "",
  amount: "",
  data: () => ({
    select: [{ text: "Paystack" }, { text: "Paypal" }]
  })
};
</script>
