<template>
  <v-app>
    <v-snackbar
      fixed
      top
      :color="type"
      elevation="24"
      v-model="alert"
      :timeout="5000"
      class="snackbar"
    >
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="closeAlerts">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <auth-menu v-if="isLoggedIn" />
    <v-main
      :style="
        !showLoanMenu ? { background: '#f9f9f9' } : { background: 'white' }
      "
    >
      <!--<v-card elevation="2" v-model="item" class="py-10 px-5">
        <v-list-item-title v-text="currentRouteName"></v-list-item-title>
        <v-divider></v-divider>
      </v-card>-->
      <v-container class="cards_and_banks pl-7 pr-7" fluid>
        <h5 class="">
          {{
            currentRouteName == "Login" ||
            currentRouteName == "Register" ||
            currentRouteName == "Password" ||
            currentRouteName == "Reset" ||
            currentRouteName == "Loans Application"
              ? ""
              : currentRouteName
          }}
        </h5>
      </v-container>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import AuthMenu from "./views/components/AuthMenu.vue";

export default Vue.extend({
  components: { AuthMenu },
  name: "App",
  // loading: true,
  // selection: 1,
  data: () => ({
    drawer: true,
    group: null,
    item: 0,
    isLoggedIn: false
  }),
  created() {
    this.isLoggedIn = this.$store.state.account.status.loggedIn;
    // console.log("Mounted");
    // console.log(this.$el.textContent); // Example component.
  },
  watch: {},
  computed: {
    ...mapState("alert", ["type", "alert", "message"]),
    ...mapState("loanMenu", ["showLoanMenu"]),
    mini() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    currentRouteName() {
      return this.$route.name;
    },
    currentRoutePath() {
      return this.$route.path;
    }
  },
  methods: {
    ...mapState("alert", ["closeAlert"]),
    closeAlerts() {
      return this.$store.dispatch("alert/closeAlert");
    }
  }
});
</script>
