<template>
  <v-app>
    <v-app-bar app clipped-left color="white" fixed flat height="60">
      <v-container fluid>
        <v-row align="center" no-gutters>
          <v-col align="left" cols="4">
            <router-link to="/">
              <v-img
                alt="Sycamore Logo"
                max-height="34"
                max-width="120"
                transition="scale-transition"
                src="@/assets/logo-colored.svg"
              ></v-img>
            </router-link>
          </v-col>
          <v-col align="center" cols="4">
            <v-btn color="primary" height="28" outlined width="141">
              <router-link to="/investor" style="text-decoration: none;">
                <span
                  class="font-weight-bold grey--text text--darken-3 text-capitalize"
                  >Switch To Investor</span
                ></router-link
              >
            </v-btn>
          </v-col>
          <v-col align="right" cols="4">
            <v-avatar color="red" height="31.4" min-width="31.4" width="31.4">
              <span class="white--text">CJ</span>
            </v-avatar>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar"
});
</script>
