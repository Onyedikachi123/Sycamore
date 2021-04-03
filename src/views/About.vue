<template>
  <v-container class="about pl-7 pr-7" fluid>
    <div class="wrapper">
      <section class="about-banner">
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col cols="12" sm="6" md="8" class="about-text">
              <h1>
                Think of us as your <br />
                growth partner
              </h1>
              <v-btn text>
                Talk to us
                <span style="margin-left: 15px;">
                  <fa-icon icon="arrow-right" class="card-icons" />
                </span>
              </v-btn>
            </v-col>
            <v-col cols="6" md="4" class="about-gif">
              <v-img alt="About gif" src="@/assets/SMALL.gif" />
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section class="care">
        <h1 class="text-center">Why we care</h1>
        <v-container>
          <v-row gutters>
            <v-col order="first">
              <div class="care-sdg">
                <div class="care-title">
                  <fa-icon icon="not-equal" class="card-icons care-icons" />
                  <h5>
                    SDG ONE
                  </h5>
                </div>
                <h6>No poverty</h6>
                <p class="care-p">
                  Eradicating poverty is not a task of charity, it is an act of
                  justice and the key to unlocking an enormous human potential.
                </p>
              </div>
            </v-col>
            <v-col>
              <div class="care-eight">
                <div class="care-eight-title">
                  <fa-icon icon="chart-line" class="card-icons care-icons" />
                  <h5>SDG EIGHT</h5>
                </div>
                <h6>Economic Growth</h6>
                <p class="care-p">
                  Economic growth is the increase in the inflation-adjusted
                  market value of the goods and services produced by an economy
                  over time.
                </p>
              </div>
            </v-col>
            <v-col order="last">
              <div class="care-sdg">
                <div class="care-title">
                  <fa-icon
                    icon="hand-holding-usd"
                    class="card-icons care-icons"
                  />
                  <h5>
                    SDG TEN
                  </h5>
                </div>
                <h6>Reduced Inequalities</h6>
                <p class="care-p">
                  Ensure equal opportunities and end discrimination. Ensure
                  equal opportunity and reduce Inequalities of outcome,
                  politices.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section class="team">
        <h1>Meet the team</h1>
        <v-container>
          <v-img alt="Team Image" src="@/assets/Group.png" />
        </v-container>
      </section>
      <section class="news">
        <h1 class="text-center">Solutions that works for you</h1>
        <v-container>
          <v-row gutters>
            <v-col order="first">
              <div class="brand-img">
                <img src="@/assets/creditclan.png" />
              </div>
            </v-col>
            <v-col>
              <div class="brand-img">
                <img
                  src="@/assets/flutterwave.png"
                  style="margin-top: -24px;"
                />
              </div>
            </v-col>
            <v-col order="last">
              <div class="brand-img">
                <img
                  src="@/assets/paystack.png"
                  class="brand-name"
                  style="margin-top: -73px;"
                />
              </div>
            </v-col>
          </v-row>
          <v-row gutters>
            <v-col>
              <div class="brand-img">
                <img src="@/assets/Remita.png" />
              </div>
            </v-col>
            <v-col>
              <div class="brand-img">
                <img src="@/assets/nibss.jpeg" style="margin-top: -65px;" />
              </div>
            </v-col>
            <v-col>
              <div class="brand-img">
                <img src="@/assets/lga.png" style="margin-top: -44px;" />
              </div>
            </v-col>
            <v-col>
              <div class="brand-img">
                <img src="@/assets/firstcentral.png" class="brand-name" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About"
});
</script>

<style scoped>
.wrapper {
  background-color: #fff;
  margin-top: 25px;
  padding: 12px;
}
.about-text {
  padding: 40px !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  margin-bottom: -30px;
}

.about-banner h1 {
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 60px;
}
.about-gif {
  padding: 20px;
}

/* Care */
.care-title {
  display: flex;
}
.care-title .care-icons {
  margin-left: 29px;
  margin-right: -13px;
  font-size: 42px;
  margin-top: 30px;
  color: #eb001b;
}
.care h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  margin: 100px 0 50px;
  color: #2d0000;
}
.care-sdg {
  width: 100%;
  height: 100%;
  background: #f9f4f4;
  padding-bottom: 20px;
  box-shadow: 0px 2px 3px rgba(0, 48, 2, 0.08);
  border-radius: 7px;
  cursor: pointer;
  transition: transform 0.8s;
  margin: 0 auto;
}
.care-sdg:hover {
  transform: scale(1.1);
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
}
.care-sdg h6,
.care-p {
  margin-left: 9%;
}
.care-sdg h6 {
  color: #002d04;
  font-size: 15px;
  font-weight: 600;
}
.care-sdg p {
  color: #000;
  font-weight: 400;
  font-size: 12px;
}
.care-sdg h5 {
  padding: 44px 27px;
  color: #eb001b;
  font-size: 12px;
}

.care-sdg span {
  margin-top: -20px;
}

.care-eight {
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  cursor: pointer;
  transition: transform 0.8s;
  margin: 0 auto;
}
.care-eight:hover {
  transform: scale(1.1);
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
}
.care-eight-title h5 {
  padding: 44px 27px;
  color: #63c132;
  font-size: 12px;
}
.care-eight h6 {
  color: #002d04;
  font-size: 15px;
  font-weight: 600;
  margin-left: 9%;
}
.care-eight p {
  color: #000;
  font-weight: 400;
  font-size: 12px;
}
.care-eight-title {
  display: flex;
}
.care-eight-title .care-icons {
  margin-left: 29px;
  margin-right: -13px;
  font-size: 42px;
  margin-top: 30px;
  color: #63c132;
}

/* Team */
.team h1 {
  font-weight: 600;
  font-size: 40px;
  /* text-transform: capitalize; */
  color: #002d04;
  margin: 100px 0;
  text-align: center;
}

/* .team img {
  height: 250px !important;
} */

/*solution */
.news {
  /* background-color: #f9faf9; */
  margin-top: 70px;
  padding-top: 75px;
  padding-bottom: 75px;
}
.news h1 {
  font-weight: bold;
  font-size: 40px;
  color: #002d04;
  margin: 0 0 100px 0;
}
.news .brand-img img {
  width: 50%;
}

/* Media queries */
@media only screen and (max-width: 600px) {
  .achievement-body .body-p {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .achievement h6 {
    padding-top: 47px !important;
    font-size: 32px;
  }
  .team .team-p {
    width: 100% !important;
  }
  .jumbotron h1 {
    font-size: 20px;
    margin-bottom: 0px;
  }
  .care-eight {
    margin: 30px 0px;
  }
  .team-details img {
    height: 400px;
  }
}
</style>
