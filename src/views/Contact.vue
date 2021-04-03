<template>
  <v-container class="contact pl-7 pr-7" fluid>
    <div class="wrapper">
      <section class="contact">
        <v-container>
          <v-row gutters>
            <v-col>
              <div class="tunde">
                <img src="@/assets/tunde2.png" />
              </div>
            </v-col>
            <v-col>
              <div class="swifit">
                <h6>WELCOME TO SYCAMORE</h6>
                <h2>Need prompt response?</h2>
                <p>Contact our help desk</p>
                <ul>
                  <li>
                    <img src="@/assets/check.png" /> 15, Modupe Johnson
                    Crescent, Surulere, Lagos.
                  </li>
                  <li>
                    <img src="@/assets/check.png" />
                    +2348097341810
                  </li>
                  <li>
                    <img src="@/assets/check.png" />
                    info@sycamore.ng
                  </li>
                  <li>
                    <img src="@/assets/check.png" />
                    Monday - Friday: 8:30 - 17:00
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" sm="12">
            <v-card class="py-5 px-10" v-if="step === 0">
              <v-list-item-content class="mb-5">
                <v-list-item-title class="title">
                  Contact Us
                </v-list-item-title>
                <v-list-item-subtitle
                  >Enter your message here</v-list-item-subtitle
                >
              </v-list-item-content>
              <validation-observer ref="observer">
                <form @submit.prevent="submit">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    :rules="{
                      required: true
                    }"
                  >
                    <v-text-field
                      v-model="profileData.fullName"
                      :error-messages="errors"
                      label="Name"
                      required
                      outlined
                    ></v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="profileData.email"
                      :error-messages="errors"
                      label="E-mail"
                      required
                      outlined
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="phoneNumber"
                    :rules="{
                      required: true
                    }"
                  >
                    <v-text-field
                      v-model="profileData.phone"
                      :error-messages="errors"
                      label="Phone Number"
                      required
                      outlined
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Message"
                    :rules="{
                      required: true
                    }"
                  >
                    <v-textarea
                      v-model="profileData.message"
                      :error-messages="errors"
                      required
                      outlined
                      name="message"
                      label="Message"
                    ></v-textarea>
                  </validation-provider>

                  <div class="btn-block">
                    <v-btn
                      :loading="loading"
                      :disabled="loading"
                      type="submit"
                      style="font-size: 14.26px; outline: none"
                      color="primary"
                    >
                      Submit
                      <span>
                        <v-icon
                          icon="chevron-right"
                          class="card-icons"
                        ></v-icon>
                      </span>
                    </v-btn>
                  </div>
                </form>
              </validation-observer>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import { authHeader } from "@/_helpers/auth-header";
import { mapState, mapActions } from "vuex";
import Vue from "vue";
import emailjs from "emailjs-com";
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";
import axios from "axios";
setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})"
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}"
});

extend("email", {
  ...email,
  message: "Email must be valid"
});
export default Vue.extend({
  name: "Profile",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    thisError: false,
    thisSuccess: false,
    thisMessage: "",
    step: 0,
    profileData: {
      fullName: "",
      email: "",
      phone: "",
      message: ""
    }
  }),
  props: {
    // Use "value" here to enable compatibility with v-model
    value: Object
  },
  watch: {
    // InvestmentSuccess: function(newItem) {
    //   this.step++;
    // }
  },
  mounted() {
    //mouned event
    // console.log(this.banks);
  },
  created() {
    //comment
    this.getUserDetail();
  },

  computed: {
    ...mapState("account", [
      "status",
      "user",
      "loading",
      "error",
      "success",
      "message",
      "bvnLoading",
      "txnRef",
      "bvnStep",
      "userData"
    ])
  },

  methods: {
    ...mapActions("account", ["getUserDetails"]),

    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },

    getUserDetail() {
      this.overlay = true;
      axios
        .post(
          "https://mobile.creditclan.com/api/v3/user/details",
          { token: authHeader() },
          {
            headers: {
              "x-api-key":
                "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
            }
          }
        )
        .then(response => {
          if (response.data.status) {
            const userData = response.data.data.userData.data;
            const userProfile = userData.profile;
            this.profileData.fullName = userData.profile.legal_name;
            this.profileData.email = userProfile.email;
            this.profileData.phone = userProfile.phone;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    async submit(e) {
      const validate = this.$refs.observer.validate();
      const fullName = this.profileData.fullName;
      const email = this.profileData.email;
      const phone = this.profileData.phone;
      const message = this.profileData.message;
      validate.then(valid => {
        if (valid) {
          this.thisLoading = true;
          try {
            emailjs
              .sendForm(
                "service_530myze",
                "template_dlax1py",
                e.target,
                "user_2nsmY8QjmGSP7QijB3KEI",
                {
                  name: fullName,
                  email: email,
                  phone: phone,
                  message: message
                }
              )
              .then(
                result => {
                  console.log("SUCCESS!", result.status, result.text);
                  this.profileData.message = "";
                },
                error => {
                  console.log("FAILED...", error);
                  this.thisMessage =
                    "Your message was not delivered! Try again.";
                  this.thisError = true;
                }
              );
          } catch (error) {
            console.log({ error });
            this.thisMessage = "Your message was not delivered! Try again.";
            this.thisError = true;
          }
          // Reset form field
        }
      });
    }
  }
});
</script>

<style scoped>
.wrapper {
  background-color: #fff;
  margin-top: 25px;
  padding: 12px;
}
.swifit {
  margin: 70px 27px;
}
.swifit ul li {
  list-style: none;
  padding: 15px 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
}
.swifit ul li img {
  padding-right: 10px;
}
.swifit ul {
  margin-left: -27px;
}
.swifit h6 {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #2d0000;
  /* margin-top: 20px; */
}
.swifit img {
  width: 36px;
}
.swifit h2 {
  font-weight: 600;
  font-size: 40px;
  color: #2d0000;
  padding: 30px 0px;
}
.swifit p {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #2d0000;
}
/* faq */
.faq {
  padding-top: 81.12px;
}
.faq-header h6 {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #e23939;
  margin-bottom: 20px;
}
.faq-header h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  margin-top: -10px;
  margin-bottom: 60px;
  /* text-transform: capitalize; */
  color: #002d04;
}
.faq button {
  background: #f9faf9;
  border: 0.16838px solid #a4ae9d;
  box-sizing: border-box;
  box-shadow: none;
  border-radius: 4.48563px 4.48563px 0px 0px;
  color: #000;
  text-align: left;
}
.btn-secondary.focus,
.btn-secondary:focus {
  color: #000;
  background-color: #f9faf9;
  border-color: #a4ae9d;
  box-shadow: none;
}
.btn-secondary:hover {
  color: #000;
  background-color: #f9faf9;
  border-color: #a4ae9d;
}
.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show > .btn-secondary.dropdown-toggle {
  color: #000;
  background-color: #f9faf9;
  border-color: #a4ae9d;
}
.faq .faq-btn {
  background: #63c132;
  border-radius: 4px;
  border: 1px solid #63c132;
  padding: 13px 30px;
  margin-top: 30px;
}
.faq .faq-btn a {
  color: #fff !important;
  text-decoration: none;
  font-weight: bold;
}
.faq ul li {
  list-style: none;
  margin: 20px -37px;
}

.faq .faq-p {
  padding: 20px 0;
}

.faq h4 {
  font-size: 1.25rem;
  color: #dc3545;
  margin: 10px 0 10px;
  /* font-weight: bold; */
}

.accodion-img img {
  width: 100%;
  margin-top: 50%;
}

.tunde {
  border: 1px solid #ccc;
  padding: 5px;
  margin: 50px 0px;
  height: 450px;
  border-radius: 8px;
  box-shadow: 0px 10px 30px rgba(0, 48, 2, 0.13);
  /* border: 1px solid #ccc;
   padding: 5px; */
}
.tunde img {
  margin-left: 25%;
  padding: 9px 0;
  width: 300px;
}
@media only screen and (max-width: 600px) {
  .tunde img {
    width: 200px;
    padding: 52px 0px;
  }
  .faq-header h3 {
    font-size: 25px;
    margin-bottom: 30px;
  }
  .search-wrapper h1 {
    font-size: 25px;
  }
}
</style>
