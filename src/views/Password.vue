<template>
  <div class="password">
    <v-snackbar
      fixed
      top
      color="secondary"
      elevation="24"
      v-model="error"
      :timeout="5000"
      class="snackbar"
    >
      {{ message }}
    </v-snackbar>
    <v-snackbar
      fixed
      top
      color="success"
      elevation="24"
      v-model="success"
      :timeout="5000"
      class="snackbar"
    >
      {{ message }}
    </v-snackbar>
    <!-- <svg
      width="1000"
      height="760"
      viewBox="0 0 1000 760"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.05">
        <path
          d="M495.691 550.743C574.439 467.341 715.355 451.743 810.437 515.904L914.592 586.187C1067.2 689.165 1088.45 881.158 962.059 1015.02L905.737 1074.67L525.265 817.928C430.184 753.767 416.943 634.145 495.691 550.743Z"
          stroke="black"
        />
        <path
          d="M448.517 518.912C540.721 421.259 705.716 402.996 817.044 478.12L938.954 560.384C1117.61 680.941 1142.49 905.711 994.525 1062.42L928.543 1132.3L483.146 831.751C371.818 756.627 356.314 616.564 448.517 518.912Z"
          stroke="black"
        />
        <path
          d="M407.082 490.95C511.105 380.78 697.251 360.175 822.85 444.929L960.356 537.717C1161.9 673.717 1189.97 927.278 1023.05 1104.06L948.579 1182.93L446.149 843.893C320.549 759.139 303.058 601.121 407.082 490.95Z"
          stroke="black"
        />
        <path
          d="M361.547 460.224C478.559 336.296 687.948 313.119 829.231 408.456L983.875 512.809C1210.57 665.778 1242.13 950.979 1054.39 1149.82L970.595 1238.57L405.492 857.236C264.209 761.9 244.534 584.151 361.547 460.224Z"
          stroke="black"
        />
        <path
          d="M322.267 433.718C456.798 291.236 697.537 264.589 859.973 374.199L1015.6 479.213C1263.98 646.822 1298.57 959.316 1092.86 1177.19L978.155 1298.67L372.792 890.171C210.356 780.561 187.736 576.199 322.267 433.718Z"
          stroke="black"
        />
        <path
          d="M276.191 402.626C429.69 240.056 704.371 209.651 889.709 334.716L1049.94 442.84C1323.77 627.619 1361.91 972.128 1135.11 1212.32L989.886 1366.13L333.839 923.435C148.502 798.371 122.692 565.197 276.191 402.626Z"
          stroke="black"
        />
        <path
          d="M223.028 366.751C398.413 181.001 712.258 146.262 924.021 289.158L1089.57 400.869C1392.76 605.462 1434.98 986.911 1183.88 1252.86L1003.42 1443.98L288.896 961.818C77.1335 818.922 47.6431 552.501 223.028 366.751Z"
          stroke="black"
        />
        <path
          d="M163.573 326.631C357.958 120.758 705.805 82.2549 940.509 240.632L1123.97 364.433C1460 591.183 1506.8 1013.94 1228.49 1308.69L1028.47 1520.53L236.576 986.166C1.87172 827.788 -30.813 532.505 163.573 326.631Z"
          stroke="black"
        />
        <path
          d="M108.193 289.262C330.852 53.4446 729.292 9.34138 998.134 190.754L1175.17 310.214C1541.78 557.603 1592.83 1018.84 1289.2 1340.42L1032.66 1612.12L191.816 1044.72C-77.0258 863.311 -114.465 525.079 108.193 289.262Z"
          stroke="black"
        />
        <path
          d="M45.1048 246.69C293.735 -16.6329 738.649 -65.8805 1038.85 136.693L1222.19 260.41C1623.65 531.311 1679.55 1036.39 1347.06 1388.53L1048.72 1704.5L138.48 1090.27C-161.72 887.697 -203.525 510.014 45.1048 246.69Z"
          stroke="black"
        />
        <path
          d="M-92.3632 153.928C203.296 -159.204 732.367 -217.767 1089.35 23.1236L1307.34 170.224C1784.72 492.357 1851.2 1092.95 1455.83 1511.69L1101.04 1887.45L18.6753 1157.07C-338.308 916.183 -388.022 467.059 -92.3632 153.928Z"
          stroke="black"
        />
        <path
          d="M-21.5261 201.727C254.534 -90.6473 748.534 -145.328 1081.85 79.5942L1271.86 207.808C1710.11 503.541 1771.15 1054.91 1408.18 1439.34L1065.69 1802.06L82.1515 1138.38C-251.168 913.454 -297.586 494.102 -21.5261 201.727Z"
          stroke="black"
        />
        <path
          d="M-171.59 100.466C156.684 -247.208 744.119 -312.231 1140.48 -44.7671L1376.38 114.419C1892 462.355 1963.81 1111.06 1536.77 1563.34L1121.21 2003.45L-48.3019 1214.27C-444.665 946.808 -499.864 448.14 -171.59 100.466Z"
          stroke="black"
        />
        <path
          d="M541.869 581.903C602.265 517.938 710.341 505.975 783.265 555.183L881.363 621.38C1008.46 707.147 1026.16 867.055 920.898 978.543L892.788 1008.31L564.551 786.822C491.628 737.614 481.473 645.868 541.869 581.903Z"
          stroke="black"
        />
        <path
          d="M578.917 606.903C621.721 561.569 698.318 553.09 750.001 587.966L855.026 658.836C958.483 728.648 973.009 858.727 887.592 949.579L594.992 752.135C543.309 717.26 536.112 652.237 578.917 606.903Z"
          stroke="black"
        />
        <path
          d="M630.099 641.441C658.853 610.988 710.307 605.293 745.025 628.72L839.837 692.699C909.363 739.615 919.164 827.006 861.848 888.097L640.898 739.001C606.18 715.573 601.346 671.895 630.099 641.441Z"
          stroke="black"
        />
        <path
          d="M684.952 678.456C699.46 663.091 725.421 660.217 742.938 672.037L821.479 725.037C856.604 748.739 861.614 792.849 832.79 823.764L690.4 727.68C672.883 715.86 670.444 693.821 684.952 678.456Z"
          stroke="black"
        />
        <path
          d="M725.894 706.083C728.591 703.225 733.419 702.691 736.676 704.889L810.793 754.903C817.398 759.36 818.435 767.59 813.227 773.484L726.907 715.235C723.65 713.037 723.196 708.94 725.894 706.083Z"
          stroke="black"
        />
      </g>
    </svg> -->
    <!-- <v-container fluid style="position: absolute; top: 0"> -->
    <v-container>
      <v-row>
        <v-col md="10" offset-md="1">
          <v-card class="pa-2">
            <v-row no-gutters>
              <v-col cols="4">
                <v-img
                  alt="Sycamore Logo"
                  contain
                  height="34"
                  :src="require('@/assets/logo-colored.svg')"
                  transition="scale-transition"
                  width="120"
                />
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-btn
                        elevation="0"
                        icon
                        small
                        class="title"
                        :style="{ background: 'white' }"
                      >
                        <v-icon color="green" style="font-size: 22px" small
                          >mdi-check-bold
                        </v-icon></v-btn
                      >
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title
                        :style="{ color: 'black' }"
                        style="font-size: 14px; font-weight: 600"
                        >Recover Password</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-btn
                        elevation="0"
                        icon
                        small
                        class="title"
                        :style="{ background: '#ccc' }"
                      >
                        <v-icon color="black" style="font-size: 22px" small
                          >mdi-numeric-2
                        </v-icon></v-btn
                      >
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title
                        :style="{ color: 'black' }"
                        style="font-size: 14px; font-weight: 600"
                        >Reset Password</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
                <v-spacer></v-spacer>
                <div
                  class="ml-8"
                  style="color: grey; font-size: 12px; margin-top: 90%"
                >
                  <span>Privacy | </span>
                  <span>Terms and conditions </span>
                </div>
              </v-col>
              <v-col cols="8">
                <div class="wrapper">
                  <ValidationObserver ref="observer">
                    <form
                      @submit.prevent="onSubmit()"
                      class="col-md-8 offset-md-2 mt-n4"
                    >
                      <h1>We got you covered</h1>
                      <div class="item">
                        <ValidationProvider
                          name="Email"
                          rules="required|email"
                          v-slot="{ errors }"
                        >
                          <label>Email Address</label>
                          <input
                            type="email"
                            autocomplete="on"
                            name="email"
                            class="input is-medium m-0 py-6"
                            v-model="resetData.email"
                          />

                          <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>

                      <div style="display: flex; margin-top: 50px">
                        <p
                          style="font-size: 15px; color: #a4ae9d; margin-top: 0"
                        ></p>
                        <v-spacer></v-spacer>
                        <v-btn
                          type="submit"
                          style="font-size: 14.26px"
                          :loading="loading"
                          :disabled="loading"
                          color="primary"
                        >
                          Next
                          <v-icon right> mdi-chevron-right </v-icon>
                        </v-btn>
                      </div>
                    </form>
                  </ValidationObserver>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- </v-container> -->
  </div>
</template>

<script>
// import Vue from "vue";
import { mapState, mapActions } from "vuex";
import {
  ValidationProvider,
  ValidationObserver
} from "vee-validate/dist/vee-validate.full";
export default {
  name: "Password",
  data: () => ({
    resetData: {
      email: ""
    },
    submitted: false,
    isLoggedIn: false,
    state: true
  }),
  components: {
    ValidationProvider,
    ValidationObserver
  },
  computed: {
    ...mapState("account", [
      "status",
      "user",
      "loading",
      "error",
      "success",
      "message"
    ])
  },
  methods: {
    ...mapActions("account", ["login", "logout", "reset"]),

    async onSubmit() {
      // console.log(this.resetData);
      const valid = await this.$refs.observer.validate();
      if (!valid) return;
      this.submitted = true;
      const { email } = this.resetData;
      if (email) {
        this.reset({ email });
      }
    }
  }
};
</script>
<style>
.v-list-item-group{
  padding: 130px 0 0 !important;
}
.wrapper {
  background-color: #fff;
  /* margin-top: -28px; */
  padding: 180px 70px !important;
  /* height: 773px; */
}
.wrapper h1 {
  font-size: 30px;
  font-weight: 600;
  color: #63c132;
  margin-bottom: 23px;
}

.text-danger {
  color: #cc3639;
}
.page-container {
  position: absolute;
  top: 0;
}

form {
  width: 100%;
  /* padding: 20px; */
  border-radius: 6px;
  background: #fff;
  /* box-shadow: 0 0 30px 0#63c132; */
}
p.top-info {
  margin: 10px 0;
}

input {
  width: calc(100% - 10px);
  padding: 10px;
  margin: 16px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
}
.item:hover p,
.item:hover label,
.item:hover i {
  color: #63c132;
}
.item input:hover {
  border: 1px solid #ccc;
  /* box-shadow: 0 0 8px 0 #8ebf42;
  color: #8ebf42; */
}
.item {
  position: relative;
  margin: 10px 0;
}
.btn-block {
  margin-top: 10px;
  /* text-align: left; */
}
form button {
  text-align: left;
  /* width: 169px; */
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #63c132;
  font-size: 16px;
  color: #fff !important;
  cursor: pointer;
}
form button span {
  padding-left: 15px;
}
form button:hover {
  background: #63c132;
}
form p {
  font-size: 10px;
  margin-top: -24px;
}
.nav-list .icon {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #fff;
  padding: 6px 15px;
  box-shadow: 0 0 8px 0 #ccc;
}
.nav-list .icon2 {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #e8f2e9;
  padding: 6px 15px;
  box-shadow: 0 0 8px 0 #ccc;
}
.nav-list ul li {
  display: flex;
  padding: 20px 0;
  font-size: 20px;
}
.nav-list ul li span {
  padding: 5px 30px !important;
}
.nav-list ul {
  margin: 150px 50px;
}
.nav-list .icon svg {
  padding-right: 13px;
  color: #63c132;
  font-size: 29px;
}
@media (min-width: 568px) {
  .name-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .name-item input {
    width: calc(50% - 20px);
  }
  /* .item {
    width: calc(50% - 8px);
  } */
  input {
    width: calc(100% - 0px);
  }
}
.password {
  overflow-x: hidden;
}
.mobile-footer {
  display: none;
}
@media (max-width: 960px) {
  /* .page-container {
    position: static;
  } */
  .wrapper h1 {
    font-size: 20px;
  }
  .password-text {
    text-align: center;
  }
  .nav-list ul,
  .left-footer {
    display: none;
    /* margin: 50px 20px; */
  }
  .mobile-footer {
    display: block;
  }
  .wrapper {
    padding: 100px 20px;
  }
  .sycamore-logo {
    margin: 20px;
  }
  .sidebar {
    background: #fff;
  }
  .page-container {
    padding: 0;
  }
}
</style>
