<template v-if="isLoggedIn">
  <div>
    <v-app-bar
      app
      clipped-left
      color="white"
      v-if="!showLoanMenu"
      fixed
      flat
      height="100%"
    >
      <v-row align="center" no-gutters>
        <v-col align="left" cols="6" xs="6" sm="6" md="4">
          <router-link to="/">
            <v-img
              alt="Sycamore Logo"
              contain
              height="34"
              :src="require('../../assets/logo-colored.svg')"
              transition="scale-transition"
              width="120"
            />
          </router-link>
        </v-col>
        <v-col
          class="d-none d-lg-flex justify-center"
          cols="4"
          v-if="!showLoanMenu"
        >
          <v-btn
            @click="changeUserType"
            color="primary"
            height="28"
            outlined
            width="141"
          >
            <span
              class="font-weight-bold grey--text text--darken-3 text-capitalize"
              >Switch To {{ state.userType ? "Investor" : "Borrower" }}</span
            >
          </v-btn>
        </v-col>
        <v-col align="right" cols="6" xs="6" sm="6" md="4" v-if="!showLoanMenu">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            class="d-lg-none justify-end"
          ></v-app-bar-nav-icon>

          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-avatar
                class="d-none d-md-flex"
                color="red"
                height="31.4"
                min-width="31.4"
                width="31.4"
                v-bind="attrs"
                v-on="on"
              >
                <img
                  id="avatar"
                  :src="
                    state.userData
                      ? state.userData.userData.data.profile.file_name
                      : ''
                  "
                  :alt="user.full_name"
                />
              </v-avatar>
            </template>
            <v-list>
              <v-list-item to="/profile">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="logout">
                <v-list-item-icon>
                  <v-icon v-text="logoutIcon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      app
      class="d-xs-none d-lg-flex drawer_menu"
      clipped
      floating
      height="100%"
      relative
      v-model="drawer"
      :style="
        showLoanMenu
          ? {
              background: '#f9f9f9',
              paddingLeft: 40 + 'px',
              width: 360 + 'px',
              paddingRight: 40 + 'px'
            }
          : {
              background: 'white',
              width: 270 + 'px',
              paddingLeft: 10 + 'px',
              paddingRight: 10 + 'px'
            }
      "
    >
      <!--<template>
        <v-card class="mx-0" max-width="434" tile>
          <v-img
            height="100%"
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
          >
            <v-row align="center" class="text-center pt-10 fill-height">
              <v-col align-self="center" justify-center class="pa-0" cols="12">
                <v-avatar size="62">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
              </v-col>
              <v-col class="py-3">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title pb-3">
                      Hello Samuel
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >Network Engineer</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </template>-->
      <v-subheader class="text-h6" v-if="!showLoanMenu"
        >Hello {{ user.full_name }}</v-subheader
      >
      <v-list nav dense>
        <v-list-item-group v-model="item" color="primary" v-if="!showLoanMenu">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <!-- { text: "Investments", icon: "mdi-chart-bar", to: "/investments" },

      {
        text: "Loans",
        icon: "mdi-account",
        to: "/loans",
      }, -->

        <v-list-item-group v-model="item" color="primary" v-if="!showLoanMenu">
          <v-list-item :to="'/investments'" v-if="!state.userType">
            <v-list-item-icon>
              <v-icon>mdi-chart-bar</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Investments</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group v-model="item" color="primary" v-if="!showLoanMenu">
          <v-list-item :to="'/loans'" v-if="state.userType">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Loans</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <!-- <v-btn v-if="showLoanMenu" class="ma-2" outlined color="green" to="/">
          <v-icon left dark>mdi-chevron-left</v-icon> Back
        </v-btn> -->

        <v-col
          v-if="showLoanMenu"
          align="left"
          cols="6"
          xs="6"
          sm="6"
          md="8"
          class="ma-2"
        >
          <router-link to="/">
            <v-img
              alt="Sycamore Logo"
              contain
              height="34"
              :src="require('../../assets/logo-colored.svg')"
              transition="scale-transition"
              width="120"
            />
          </router-link>
        </v-col>

        <v-col
          v-if="showLoanMenu"
          align="left"
          cols="6"
          xs="6"
          sm="6"
          md="8"
          class="my-6"
        >
          <router-link to="/">
            <v-btn
              type="button"
              style="font-size: 14.26px"
              outlined
              elevation="0"
            >
              <v-icon left dark>mdi-chevron-left</v-icon>
              Go To Dashboard
            </v-btn>
          </router-link>
        </v-col>

        <v-list-item-group class="mt-12" v-if="showLoanMenu">
          <v-list-item v-for="(item, i) in loanItems" :key="i">
            <v-list-item-icon>
              <v-btn
                :elevation="viewedLoanPages.indexOf(item.count) >= 0 ? 2 : 0"
                icon
                small
                class="title"
                :style="[
                  viewedLoanPages.indexOf(item.count) < 0
                    ? { background: '#f9f9f9' }
                    : { background: 'white' }
                ]"
              >
                <v-icon
                  color="green"
                  style="font-size: 22px"
                  v-text="
                    viewedLoanPages.indexOf(item.count) < 0
                      ? item.iconCount
                      : item.icon
                  "
                  small
                >
                </v-icon
              ></v-btn>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                :style="[
                  item.count == currentLoanPage
                    ? { color: 'green' }
                    : { color: 'black' }
                ]"
                v-text="item.text"
                class="subtitle-1"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-item @click="changeUserType" v-if="!showLoanMenu">
          <v-list-item-icon>
            <v-icon v-text="'mdi-recycle'"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              >Switch to
              {{ state.userType ? "Investor" : "Borrower" }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout" v-if="!showLoanMenu">
          <v-list-item-icon>
            <v-icon v-text="logoutIcon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="mt-16 ml-6" style="color: grey; font-size: 12px">
        <span>Privacy | </span>
        <span>Terms and conditions </span>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { authHeader } from "@/_helpers/auth-header";
import axios from "axios";
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  name: "AuthMenu",
  data: () => ({
    logoutIcon: "mdi-logout",
    drawer: true,
    group: null,
    item: 0,
    isLoggedIn: false,
    user: null,
    state: null,
    userType: "",
    avatar: "",
    loc: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard"
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1"
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2"
      }
    ],
    loanItems: [
      {
        text: "About you",
        icon: "mdi-check-bold",
        count: 1,
        iconCount: "mdi-numeric-1"
      },
      {
        text: "Phone and password",
        icon: "mdi-check-bold",
        count: 2,
        iconCount: "mdi-numeric-2"
      },
      {
        text: "Verify account",
        icon: "mdi-check-bold",
        count: 3,
        iconCount: "mdi-numeric-3"
      },
      {
        text: "Loan amount and duration",
        icon: "mdi-check-bold",
        count: 4,
        iconCount: "mdi-numeric-4"
      },
      {
        text: "Address and phone number",
        icon: "mdi-check-bold",
        count: 5,
        iconCount: "mdi-numeric-5"
      },
      {
        text: "Upload documents",
        icon: "mdi-check-bold",
        count: 6,
        iconCount: "mdi-numeric-6"
      },
      {
        text: "Next of kin",
        icon: "mdi-check-bold",
        count: 7,
        iconCount: "mdi-numeric-7"
      },
      {
        text: "Work and income",
        icon: "mdi-check-bold",
        count: 8,
        iconCount: "mdi-numeric-8"
      },
      {
        text: "Debit Card",
        icon: "mdi-check-bold",
        count: 9,
        iconCount: "mdi-numeric-9"
      },
      {
        text: "Account Information",
        icon: "mdi-check-bold",
        count: 10,
        iconCount: "mdi-numeric-10"
      }
    ],
    stepFilled: [],
    activeMenuItem: 0,
    items: [
      { text: "Dashboard", icon: "mdi-home", to: "/" },
      { text: "Profile", icon: "mdi-account", to: "/profile" },
      { text: "Cards And Banks", icon: "mdi-wallet", to: "/cards_and_banks" },

      { text: "Contact Us", icon: "mdi-contacts", to: "/contact" },
      { text: "FAQs", icon: "mdi-help-circle", to: "/faq" },
      { text: "About Us", icon: "mdi-bullhorn", to: "/about" }
    ]
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
  computed: {
    ...mapState("account", ["status", "userData"]),
    ...mapState("loanMenu", [
      "showLoanMenu",
      "viewedLoanPages",
      "currentLoanPage"
    ]),
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
  mounted() {
    // console.log(this.state);
  },
  created() {
    this.state = this.$store.state.account;
    this.userType = this.$store.state.account.userType;
    this.isLoggedIn = this.$store.state.account.status.loggedIn;
    this.user = this.$store.state.account.user.data;
    this.getUserDetails();
  },
  methods: {
    ...mapActions("loanMenu", ["setLoanMenu"]),
    ...mapActions("account", [
      "login",
      "logout",
      "changeUserType",
      "getUserDetails"
    ]),
    menuActionClick(menuItem) {
      this.activeMenuItem = menuItem;
    }
    // getUserDetail() {
    //   axios
    //     .post(
    //       "https://mobile.creditclan.com/api/v3/user/details",
    //       { token: authHeader() },
    //       {
    //         headers: {
    //           "x-api-key":
    //             "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
    //         }
    //       }
    //     )
    //     .then(response => {
    //       if (response.data.status) {
    //         this.avatar = response.data.data.userData.data.profile.file_name;
    //       }
    //     });
    // }
    // changeUserType() {
    //   this.$store.commit("changeUserType", this.userType);
    // }
    // logoutUser() {
    //   return this.logout({});
    // }
  }
});
</script>
<style>
@media (max-width: 960px) {
  .drawer_menu {
    margin-top: 56px;
    top: 150px;
  }
  .drawer_menu {
    height: 100vh !important;
    margin-top: 0 !important;
    padding-top: 40px;
  }
}
</style>
