<template>
  <v-container class="faq pl-7 pr-7" fluid
    ><div class="wrapper">
      <section class="faq">
        <div class="faq-header text-center">
          <h6>Frequently Asked Question?</h6>
          <h3>Have a question? we've got answers</h3>
        </div>
        <v-container>
          <v-row gutters>
            <v-col>
              <h4 class="ma-5">For new loans</h4>
              <v-card class="pa-2" outlined tile>
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Do I qualify for a loan?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <ul>
                        <li>You should be between 22 and 59 years old.</li>
                        <li>You must run an account</li>
                        <li>You must live and work in Lagos State</li>
                        <li>You must have a verifiable source of income</li>
                        <li>You must have a clean Credit Bureau Report</li>
                      </ul>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      What documents do I need to present to get a loan?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <ul>
                        <li>
                          Account statement for the most recent six months
                        </li>
                        <li>Signed online Direct Debit form</li>
                        <li>Valid proof of identification</li>
                        <li>Proof of residency (Utility Bill)</li>
                      </ul>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      How do I apply?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <ul>
                        <li>Online - www.sycamore.ng</li>
                        <li>
                          Branch - 15, Modupe Johnson Crescent, Surulere, Lagos
                        </li>
                        <li>Telephone - 08097341810</li>
                      </ul>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      How much can I get from Sycamore?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Depending on your current capacity and risk profile, you
                        can access up to ₦3 million.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Will the details of my loan be disclosed to a third party?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        In case of default, we reserve the right to contact your
                        employers, Next of Kin and involve a third-party
                        collections body in an attempt to collect.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Are there any upfronts payments to be made?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        There are no upfront payments or hidden charges at all
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Does Sycamore support business that are just starting?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        This is relative. We consider businesses that have
                        complete registration documentation and at least 6
                        months of cash flow in their business account.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Does Sycamore have a preferred industry that they support?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        No, we are non-discriminatory lenders who support local
                        businesses by providing working capital extensions.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Are there any associated fees?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Outside of the interest, there are no other charges.
                        Interest is charged flat monthly on the amount disbursed
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <h4 class="ma-5">Existing customers</h4>
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Can I get another loan while one is still running?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        You can apply for a top up while your current loan is
                        running
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      My debit card is missing or expired?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        When you get a new debit card, please send us an email
                        via info@sycamore.ng to set up the new card.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Do I need to submit all my documents again to reapply?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Send us your bank statement for the last 3 months to
                        info@sycamore.ng
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Can I liquidate in part or in full before my repayment is
                      due?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Yes, please. You can confirm the liquidation amount from
                        your online profile and make a transfer into our
                        account: GTBank 0451776148 or ask us to directly debit
                        the amount from your account. Send an email to
                        info@sycamore.ng if you have further questions.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      What happens if I change jobs and salary date changes?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Please send us a mail via info@sycamore.ng
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      What happens if I cannot make a payment?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Please send us a mail via info@sycamore.ng
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <h4 class="ma-5">Collections</h4>
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      How do I make repayments on my loan?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Repayments can be made directly into our account: GTBank
                        0451776148. Automatic debits via online Direct Debit
                        Mandate or card
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      How about if I want to make a repayment before my payment
                      is due?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Repayments can be made into our account: GTBank
                        0451776148 and send us an email with the evidence via
                        info@sycamore.ng
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      My salary is going to be delayed; what will happen to my
                      repayment?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        You will incur extra interest per day delayed. Please
                        log in to view accrued default charges.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      There's been a second debit on my account?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Please send us an email via info@sycamore.ng with the
                        evidence of your first payment. The second debit will be
                        refunded on the same day.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      I have relocated outside Lagos, can I keep using the Loan?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Please send us a mail via info@sycamore.ng
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Can I make payments before my repayment is due?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Yes, please. Send us an email – info@sycamore.ng about
                        your intention to pay early and make the payment at
                        least 24 hours before your due date to avoid a second
                        debit.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Will I be charged for early liquidation?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        No. The amount due will only consist of the outstanding
                        principal and accrued interest.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <h4 class="ma-5">Lend and investing</h4>
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Is my money safe with you?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Lending to us is a safe bet as your money is covered
                        under our insurance policy. We have also obtained a
                        lending license from the Lagos State Government
                        authority. Most importantly, we have never defaulted on
                        payout to date.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      If i want to liquidate, how long is going to be to get my
                      money?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        You will receive your money 24 hours after your request
                        has been received. Please ensure that all requests are
                        sent via email to info@sycamre.ng
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      How do I request for my money back?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Please send your request via info@sycamore.ng
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Are there charges on my money with you?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        A 10% Withholding Tax (WHT) is mandatory on interest
                        accrued
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Will I be charged for early liquidation?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Yes, you will be charged 30% to 50% of the total accrued
                        interest. Please refer to your agreement.
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      What happens if I cannot make a payment?
                      <template v-slot:actions>
                        <v-icon color="primary">
                          $expand
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="faq-p">
                        Please send us a mail via info@sycamore.ng
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card>
              <br />
              <!-- <button class="faq-btn"><a href="#">LEARN MORE</a></button> -->
            </v-col>
            <v-col order="12">
              <div class="accodion-img">
                <img src="@/assets/faq.png" />
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
  name: "Faq"
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
  padding-top: 0;
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
