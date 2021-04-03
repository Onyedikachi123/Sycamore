<template>
  <v-app>
    <v-navigation-drawer
      app
      class="mt-14 pa-5"
      clipped
      fixed
      floating
      height="545"
      permanent
      width="221"
    >
      <v-subheader class="text-h6">Hello Samuel</v-subheader>
      <v-list nav dense>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    item: 0,
    items: [
      { text: "Dashboard", icon: "mdi-home", to: "/" },
      { text: "Edit Profile", icon: "mdi-account", to: "/profile" },
      { text: "Contact Us", icon: "mdi-contacts", to: "/contact" },
      { text: "FAQs", icon: "mdi-help-circle", to: "/faq" },
      { text: "About Us", icon: "mdi-bullhorn", to: "/about" },
      { text: "Logout", icon: "mdi-logout", to: "/accounts" }
    ]
  })
});
</script>
