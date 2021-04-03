<template>
  <div class="register">
    <!-- <v-img
      alt="Pattern"
      contain
      :src="require('@/assets/Pattern.png')"
      transition="scale-transition"
    /> -->
    <v-container>
      <v-row no-gutters>
        <v-col md="10" offset-md="1">
          <v-card class="pa-2">
            <!-- <svg
              width="100"
              height="76"
              viewBox="0 0 100 76"
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
              <v-row no-gutters>
                <v-col cols="4 sidebar">
                  <v-img
                    alt="Sycamore Logo"
                    contain
                    height="34"
                    :src="require('@/assets/logo-colored.svg')"
                    transition="scale-transition"
                    width="120"
                  />
                  <v-list-item-group class="reg-list-item">
                    <v-list-item v-for="(item, i) in registerItems" :key="i">
                      <v-list-item-icon>
                        <v-btn
                          :elevation="
                            viewedLoanPages.indexOf(item.count) >= 0 ? 2 : 0
                          "
                          icon
                          small
                          class="title"
                          :style="[
                            viewedLoanPages.indexOf(item.count) < 0
                              ? { background: '#f9f9f9' }
                              : { background: 'white' },
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
                            item.count == step
                              ? { color: 'green' }
                              : { color: 'black' },
                          ]"
                          style="font-size: 14px; font-weight: 600"
                          v-text="item.text"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                  <v-spacer></v-spacer>
                  <div
                    class="ml-8"
                    style="color: grey; font-size: 12px; margin-top: 50%"
                  >
                    <span>Privacy | </span>
                    <span>Terms and conditions </span>
                  </div>
                </v-col>
                <v-col cols="8">
                  <div class="wrapper">
                    <ValidationObserver ref="observer">
                      <form
                        @submit.prevent="handleSubmit"
                        style="margin-top: -47px"
                        data-v-4f8f839e
                      >
                        <div v-if="step === 1">
                          <v-list-item-content class="mb-5">
                            <v-list-item-title
                              class="display-1 font-weight-bold green--text text--lighten-1"
                            >
                              BVN Verification
                            </v-list-item-title>
                          </v-list-item-content>

                          <ValidationProvider
                            rules="required|min:11"
                            name="BVN"
                            v-slot="{ errors }"
                          >
                            <label class="label">Enter BVN</label>
                            <div
                              class="control has-icons-right is-medium is-clearfix"
                              data-v-4f8f839e
                            >
                              <input
                                type="text"
                                autocomplete="on"
                                v-model="registerData.bvn"
                                class="input is-medium m-0 py-6"
                              />
                              <!---->

                              <!---->
                            </div>
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                          <!---->
                          <div
                            class="d-flex justify-content-between align-items-center"
                            data-v-4f8f839e
                          >
                            <v-btn
                              color="primary"
                              :loading="loading"
                              :disabled="loading"
                              @click="verifyBvn"
                              type="button"
                              class="button mt-4 is-primary"
                              data-v-4f8f839e
                            >
                              <!---->
                              VALIDATE
                              <span>
                                <v-icon dark> mdi-chevron-right </v-icon>
                              </span>
                              <!---->
                            </v-btn>
                          </div>
                        </div>
                        <div v-if="step === 2">
                          <v-list-item-content class="mb-5">
                            <v-list-item-title
                              class="display-1 font-weight-bold green--text text--lighten-1"
                            >
                              Verification Code
                            </v-list-item-title>
                          </v-list-item-content>
                          <label class="label"
                            >Enter verification code sent to your bvn registered
                            phone number</label
                          >
                          <div
                            class="field is-floating-in-label"
                            data-v-4f8f839e
                          >
                            <ValidationProvider
                              rules="required"
                              name="Verification Code"
                              v-slot="{ errors }"
                            >
                              <div
                                class="control has-icons-right is-medium is-clearfix"
                                data-v-4f8f839e
                              >
                                <input
                                  type="text"
                                  autocomplete="on"
                                  name="text"
                                  v-model="registerData.otp"
                                  class="input is-medium m-0"
                                />
                                <!---->

                                <!---->
                              </div>
                              <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                            <!---->
                            <p
                              style="
                                  font-size: 15px;
                                  color: #a4ae9d;
                                  margin-top: 20px;
                                "
                            >
                              <a href="javascript:void(0)" @click="sendOtp"
                                >Resend Token</a
                              >
                            </p>
                          </div>
                          <div
                            class="d-flex justify-content-between align-items-center"
                            data-v-4f8f839e
                          >
                            <v-btn
                              @click="stepBack"
                              class="form-back-btn mt-2 back"
                              type="button"
                              elevation="0"
                            >
                              BACK
                              <v-icon> mdi-chevron-right </v-icon>
                            </v-btn>

                            <v-btn
                              color="primary"
                              type="button"
                              class="mt-2 is-primary"
                              data-v-4f8f839e
                              :loading="loading"
                              :disabled="loading"
                              @click="validateBvn"
                            >
                              Next
                              <v-icon> mdi-chevron-right </v-icon>
                            </v-btn>
                          </div>
                        </div>

                        <div v-if="step === 3">
                          <v-list-item-content class="mb-5">
                            <v-list-item-title
                              class="display-1 font-weight-bold green--text text--lighten-1"
                            >
                              Tell Us About You
                            </v-list-item-title>
                          </v-list-item-content>

                          <ValidationProvider
                            rules="required|min:3"
                            name="Full Name"
                            v-slot="{ errors }"
                          >
                            <label class="label">Full Name</label>
                            <div
                              class="control has-icons-right is-medium is-clearfix"
                              data-v-4f8f839e
                            >
                              <input
                                disabled
                                type="text"
                                autocomplete="on"
                                v-model="registerData.name"
                                class="input is-medium m-0 py-6"
                              />
                            </div>
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>

                          <ValidationProvider
                            name="Email"
                            rules="required|email"
                            v-slot="{ errors }"
                          >
                            <label class="label mt-6">Email</label>
                            <div
                              class="control is-medium is-clearfix"
                              data-v-4f8f839e
                            >
                              <input
                                type="email"
                                autocomplete="on"
                                name="email"
                                class="input is-medium m-0 py-6"
                                v-model="registerData.email"
                              />
                            </div>
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>

                          <div
                            class="d-flex justify-content-between align-items-center mt-4"
                            data-v-4f8f839e
                          >
                            <v-btn
                              @click="stepBack"
                              class="form-back-btn mt-2 back"
                              type="button"
                              elevation="0"
                            >
                              BACK
                              <v-icon> mdi-chevron-right </v-icon>
                            </v-btn>

                            <v-btn
                              color="primary"
                              type="button"
                              class="mt-2 is-primary"
                              data-v-4f8f839e
                              :loading="loading"
                              :disabled="loading"
                              @click="stepForward"
                            >
                              Next
                              <v-icon> mdi-chevron-right </v-icon>
                            </v-btn>
                          </div>
                        </div>

                        <div v-if="step === 4">
                          <v-list-item-content class="mb-5">
                            <v-list-item-title
                              class="display-1 font-weight-bold green--text text--lighten-1"
                            >
                              Just one more step
                            </v-list-item-title>
                          </v-list-item-content>
                          <ValidationProvider
                            rules="required|alpha_num"
                            name="Phone Number"
                            v-slot="{ errors }"
                          >
                            <label class="label">Phone Number</label>
                            <div
                              class="control has-icons-right is-medium is-clearfix"
                              data-v-4f8f839e
                            >
                              <input
                                type="number"
                                autocomplete="on"
                                v-model="registerData.phoneNumber"
                                class="input is-medium m-0 py-6"
                              />
                              <!---->

                              <!---->
                            </div>
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                          <v-row>
                            <v-col>
                              <ValidationProvider
                                rules="required|min:6"
                                name="Password"
                                v-slot="{ errors }"
                              >
                                <label class="label mt-4">Password</label>
                                <div
                                  class="control has-icons-right is-medium is-clearfix"
                                  data-v-4f8f839e
                                >
                                  <input
                                    :type="type1"
                                    autocomplete="on"
                                    name="password"
                                    v-model="registerData.password"
                                    class="input is-medium m-0 py-6"
                                  />
                                  <!---->
                                  <span
                                    @click="changeType1"
                                    class="icon is-right is-clickable mt-3"
                                    style="color: grey"
                                    ><i
                                      v-if="type1 == 'password'"
                                      class="mdi mdi-eye mdi-24px"
                                    ></i>
                                    <i
                                      v-else
                                      class="mdi mdi-eye-off mdi-24px"
                                    ></i>
                                  </span>
                                  <!---->
                                </div>
                                <span class="text-danger">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </v-col>
                            <v-col>
                              <ValidationProvider
                                rules="required|min:6"
                                name="Confirm Password"
                                v-slot="{ errors }"
                              >
                                <label class="label mt-4"
                                  >Confirm Password</label
                                >
                                <div
                                  class="control has-icons-right is-medium is-clearfix"
                                  data-v-4f8f839e
                                >
                                  <input
                                    :type="type2"
                                    autocomplete="on"
                                    name="password"
                                    v-model="registerData.confirmPassword"
                                    class="input is-medium m-0 py-6"
                                  />
                                  <!---->
                                  <span
                                    @click="changeType2"
                                    class="icon is-right is-clickable mt-3"
                                    style="color: grey"
                                    ><i
                                      v-if="type2 == 'password'"
                                      class="mdi mdi-eye mdi-24px"
                                    ></i>
                                    <i
                                      v-else
                                      class="mdi mdi-eye-off mdi-24px"
                                    ></i>
                                  </span>
                                  <!---->
                                </div>
                                <span class="text-danger">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </v-col>
                          </v-row>

                          <div
                            class="d-flex justify-content-between align-items-center"
                            data-v-4f8f839e
                          >
                            <v-btn
                              color="primary"
                              @click="stepBack"
                              class="button mt-4 is-primary"
                              type="button"
                            >
                              BACK

                              <span>
                                <v-icon dark> mdi-chevron-right </v-icon>
                              </span>
                            </v-btn>
                            <v-btn
                              color="primary"
                              type="submit"
                              class="button mt-4 is-primary"
                              data-v-4f8f839e
                              :loading="loading"
                              :disabled="loading || registerData.otp == ''"
                            >
                              <!---->
                              <span>Register</span>
                              <!---->
                            </v-btn>
                          </div>
                        </div>
                        <!-- <p
                            class="mt-5"
                            style="font-size: 15px; color: #a4ae9d"
                          >
                            Have an account? <a href="/login">Login</a>
                          </p> -->
                      </form>
                    </ValidationObserver>
                  </div>
                </v-col>
              </v-row>
              <!-- </v-container> -->
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";
import {
  ValidationProvider,
  ValidationObserver
} from "vee-validate/dist/vee-validate.full";
// import { BASE_URL } from "../helper";
export default {
  name: "Register",
  data: () => ({
    type1: "password",
    type2: "password",
    registerData: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      otp: "",
      bvn: "",
      txnref: ""
    },
    success: false,
    message: "",
    error: false,
    loading: false,
    step: 1,
    registerItems: [
      {
        text: "BVN Verification",
        icon: "mdi-check-bold",
        count: 1,
        iconCount: "mdi-numeric-1"
      },
      {
        text: "Verification code",
        icon: "mdi-check-bold",
        count: 2,
        iconCount: "mdi-numeric-2"
      },
      {
        text: "Tell us about you",
        icon: "mdi-check-bold",
        count: 3,
        iconCount: "mdi-numeric-3"
      },
      {
        text: "Just one more step",
        icon: "mdi-check-bold",
        count: 4,
        iconCount: "mdi-numeric-4"
      }
    ],
    viewedLoanPages: [1]
  }),
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    stepBack() {
      this.step--;
      this.viewedLoanPages.splice(this.viewedLoanPages.indexOf(this.step), 1);
    },
    stepForward() {
      this.step++;
      this.viewedLoanPages.push(this.step);
    },
    changeType1() {
      if (this.type1 == "password") {
        this.type1 = "text";
      } else {
        this.type1 = "password";
      }
    },
    changeType2() {
      if (this.type2 == "password") {
        this.type2 = "text";
      } else {
        this.type2 = "password";
      }
    },
    async verifyBvn() {
      const valid = this.$refs.observer.validate();
      if (this.registerData.bvn) {
        if (!valid) return;
        this.loading = true;
        await this.sendOtp();
        this.stepForward();
      } else {
        this.loading = false;
        this.success = true;
        this.message = "Please enter your BVN";
      }
    },
    async validateBvn() {
      const valid = this.$refs.observer.validate();
      if (this.registerData.otp) {
        if (!valid) return;
        this.loading = true;
        await this.validateOtp();
        this.stepForward();
      } else {
        this.loading = false;
        this.success = true;
        this.message = "Please enter the code sent to your phone";
      }
    },
    async sendOtp() {
      await axios
        .post(
          "https://mobile.creditclan.com/api/v3/customer/validate_customer_bvn",
          {
            bvn: this.registerData.bvn
          },
          {
            headers: {
              "x-api-key":
                "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
            }
          }
        )
        .then(res => {
          if (res.data.status) {
            console.log(res.data.data);
            this.loading = false;
            this.success = true;
            this.message = res.data.data.message;
            this.registerData.txnref = res.data.data.TXN_REF;
            this.registerData.name =
              res.data.data.data.first_name +
              " " +
              res.data.data.data.last_name;
            this.registerData.phoneNumber = res.data.data.data.mobile;
          } else {
            this.step--;
            this.loading = false;
            this.error = true;
            this.message = res.data.data.message;
          }
        })
        .catch(error => {
          this.stepBack();
          this.loading = false;
          this.error = true;
          this.message = error;
        });
    },
    async validateOtp() {
      await axios;
      axios
        .post(
          "https://mobile.creditclan.com/api/v3/customer/validate_customer_bvn_otp",
          {
            txn: this.registerData.txnref,
            otp: this.registerData.otp
          },
          {
            headers: {
              "x-api-key":
                "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
            }
          }
        )
        .then(res => {
          if (res.data.status) {
            console.log(res.data.data);
            this.loading = false;
            this.success = true;
            this.message = res.data.message;
          } else {
            this.stepBack();
            this.loading = false;
            this.error = true;
            this.message = res.data.data.message;
          }
        })
        .catch(error => {
          this.stepBack();
          this.loading = false;
          this.error = true;
          this.message = error;
        });
    },
    async handleSubmit() {
      const valid = await this.$refs.observer.validate();
      if (!valid) return;
      // await this.validateOtp();
      const data = this.registerData;
      console.log(data);
      this.loading = true;
      axios
        .post(
          "https://mobile.creditclan.com/api/v3/customer/register/user",
          {
            profile: {
              full_name: data.name,
              email: data.email,
              phone: data.phoneNumber,
              password: data.password,
              bvn: data.bvn
            }
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key":
                "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
            }
          }
        )
        .then(res => {
          this.loading = false;
          console.log(res);
          // return;
          if (res == undefined) {
            this.error = true;
            this.message =
              "Something went wrong! Please check your internet connection";
            return;
          }
          if (res.data.status) {
            this.success = true;
            this.$refs.observer.reset();
            localStorage.setItem("token", res.data.token);
            this.$router.push("/login");
          } else {
            this.error = true;
            this.message = res.data.message;
          }
        })
        .catch(error => {
          this.loading = false;
          this.error = true;
          this.message = error;
        });
    }
  }
};
</script>

<style>
.reg-list-item{
  padding: 130px 0 0 !important;
}
.wrapper {
  background-color: #fff;
  /* margin-top: -28px; */
  padding: 211px 70px !important;
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

.form-back-btn {
  background: #fff;
  text-align: left;
  padding: 10px;
  border: 1px solid #757373;
  border-radius: 4px;
  font-size: 16px;
  color: #504e4e !important;
  cursor: pointer;
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
  border-radius: 2px;
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

form button .back {
  background-color: transparent !important;
  border: 1px solid #667768;
  color: #002d04;
}
form button .back {
  color: #002d04;
}

/* @media (min-width: 568px) {
  .name-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .name-item input {
    width: calc(50% - 20px);
  }
  .item {
    width: calc(50% - 8px);
  }
  input {
    width: calc(100% - 0px);
  }
} */
.register {
  overflow-x: hidden;
}
.mobile-footer {
  display: none;
}
@media (max-width: 960px) {
  .wrapper {
    padding: 20px;
  }
  /* .page-container {
    position: static;
  } */
  .wrapper h1 {
    font-size: 20px;
  }
  .register-text {
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
