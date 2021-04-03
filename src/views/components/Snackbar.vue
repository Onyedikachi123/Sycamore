<template>
  <div>
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
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>

<style></style>
