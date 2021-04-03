<template>
  <v-container class="users pl-7 pr-7" fluid>
    <h3>Users</h3>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Users",
  data: () => ({
    users: null
  }),
  mounted() {
    console.log(this.$store.state.account.status.loggedIn);
    // console.log(this.$el.textContent); // Example component.
  },

  async created() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
      },
      body: JSON.stringify({
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJQRU9QTEVfSUQiOiIxMDQxMjMiLCJFTUFJTCI6Im9rdW51Z2Eub3JpeW9taUBnbWFpbC5jb20iLCJMRU5ERVJfSUQiOiI0MDAyMiJ9.W4ZT76eq1TFrJ7J-GnZHEkmioKnsL9OH95Gurrb6CU"
      })
    };
    const response = await fetch(
      "https://mobile.creditclan.com/api/v3/user/details",
      requestOptions
    );
    const data = await response.json();
    // this.postId = data.id;
    console.log(this.$store.state.isLogged);
    console.log(
      "At this point, this.property is now reactive and propertyComputed will update."
    );
    // this.property = 'Example property updated.'
  }
});
</script>
