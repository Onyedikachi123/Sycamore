<template>
  <v-container class="dashboard pr-5 pl-5 grey--text text--darken-3">
    <!-- <v-overlay class="justify-center" :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay> -->
    <v-row class="mt-1">
      <v-col lg="9" cols="12">
        <v-card
          class="pa-5 d-flex flex-column align-center justify-end"
          min-height="300"
          v-if="userType == true && currentLoan.length == 0"
        >
          <v-icon color="secondary" size="100" class="fas fa-ban mb-6"></v-icon>
          <span>You have no active loan</span>
          <v-btn class="mt-2" color="primary" depressed small to="/loans"
            >Apply</v-btn
          >
        </v-card>
        <v-card
          v-else-if="userType == true && currentLoan.length > 0"
          class="pa-5 d-flex "
          min-height="300"
        >
          <v-row>
            <v-col cols="12" md="6" xm="12">
              <v-card class="pa-7 card-current-loan" flat height="294">
                <div class="loan-details">
                  <p class="current-loan">Pending loan</p>
                  <div
                    class="price-block"
                    data-id="1"
                    data-save_percent=""
                    data-duration="30"
                    style="display: block; padding-bottom: 30px"
                  >
                    <span class="price-block-inside" style="line-height: 0px">
                      <span class="price-currency">₦</span>
                      <span class="bold-txt price-value">{{ Number(
                        currentLoan[0].HOW_MUCH_WAS_GIVEN ).toLocaleString()
                      }}</span>
                      <span class="price-right-block">
                        <span class="price-month font-weight-bold">.00</span>
                      </span>
                    </span>
                  </div>
                  <p style="margin-bottom: 0px">Your progress</p>
                  <input
                    type="range"
                    :value="currentLoan[0].PERCENTAGE_FUNDED"
                  />
                  <p style="font-size: 10.28px; margin-bottom: 39px">
                    Next repayment {{ currentLoan[0].REPAYMENT_STARTED_WHEN }}
                  </p>

                  <div class="button-group">
                    <router-link
                      v-if="currentLoan[0].IS_ACCEPTED == 1"
                      to="loans/payment"
                      ><button class="make-payment">
                        MAKE PAYMENT
                        <span
                          ><i class="fas fa-chevron-right"></i
                        ></span></button
                    ></router-link>
                    <button
                      @click="alertDisplay(currentLoan[0].REQUEST_ID)"
                      v-else
                      class="loan-apply"
                    >
                      Cancel Loan
                      <span><i class="fas fa-chevron-right"></i></span>
                    </button>
                    <router-link to="loans/apply"
                      ><button class="apply">
                        APPLY
                        <span
                          ><i class="fas fa-chevron-right"></i
                        ></span></button
                    ></router-link>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card
                    class="pa-5 dash-success br-5"
                    height="100%"
                    tile
                    :to="`/loans/${currentLoan[0].REQUEST_ID}`"
                  >
                    <v-btn class="mx-2 mb-3" fab dark small color="primary">
                      <v-icon dark>
                        mdi-check
                      </v-icon>
                    </v-btn>
                    <p>Amount Paid</p>
                    <p class="display-1 text--primary mt-14">
                      &#8358; {{ currentLoan[0].HMP }}
                    </p>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-card
                    height="100%"
                    class="pa-5 br-5"
                    color="#ffc5b7"
                    tile
                    :to="`/loans/${currentLoan[0].REQUEST_ID}`"
                  >
                    <v-btn class="mx-2 mb-3" fab dark small color="secondary">
                      <v-icon dark>
                        mdi-reorder-horizontal
                      </v-icon>
                    </v-btn>
                    <p>Amount Left</p>
                     <p class="display-1 text--primary mt-14">
                      &#8358; {{ Number(currentLoan[0].HMR).toLocaleString() }}
                    </p>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
        <v-card
          class="pa-5 d-flex flex-column align-center justify-end"
          flat
          height="294"
          v-else-if="userType == false && investmentPortfolio.length == 0"
        >
          <v-icon color="secondary" size="100" class="fas fa-ban mb-6"></v-icon>
          <span>No active investment</span>
          <div style="display: flex">
            <router-link to="/investments">
              <v-btn
                class="mt-2"
                color="primary"
                depressed
                small
                style="margin-right: 20px"
                >NEW INVESTMENT</v-btn
              ></router-link
            >
            <router-link to="/investments" style="text-decoration: none;">
              <v-btn
                class="mt-2"
                depressed
                small
                style="background-color: #E8F2E9"
                color="#002D04"
                >MARKETPLACE</v-btn
              ></router-link
            >
          </div>
        </v-card>
        <section
          v-else-if="userType == false && investmentPortfolio.length > 0"
          class="pa-5 d-flex "
          min-height="300"
          style="background:transparent;"
        >
          <v-row>
            <v-col cols="12" md="5" xm="12">
              <v-card class="mx-auto" elevation="1">
                <v-card-text>
                  <div>Total Investment</div>
                  <p class="display-1 text--primary">
                    &#8358;
                    {{ Number(investmentPortfolio[0].REQUEST_PRINCIPAL).toLocaleString()
                     }}
                    <!-- {{
                      Number(
                        investmentPortfolio[0].CURRENT_BALANCE
                      ).toLocaleString()
                    }} -->
                  </p>
                  <p class="pt-10">Your Progress</p>
                  <input
                    type="range"
                    :value="investmentPortfolio[0].PERCENTAGE_FUNDED || 0"
                  />
                  <p>
                    Next plan maturity:
                    {{
                      new Date(
                        investmentPortfolio[0].MATURITY_DATE
                      ).toDateString()
                    }}
                  </p>
                  <v-row>
                    <!-- <v-col cols="12" md="6">
                      <v-btn width="100%" color="primary" depressed
                        >Statement
                        <v-icon right>
                          mdi-chevron-right
                        </v-icon></v-btn
                      >
                    </v-col> -->
                    <v-col cols="12" sm="12" md="6">
                      <v-btn
                        outlined
                        :to="'/investments'"
                        width="100%"
                        color="primary"
                        class=""
                      >
                        Market
                        <v-icon right>
                          mdi-chevron-right
                        </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="7">
              <div class="investment">
                <h5 class="mb-2">My Investment</h5>
                <v-row>
                  <v-col v-if="investmentPortfolio.length > 0" cols="auto">
                    <v-card
                      class="plan1"
                      color="#e8f2e9"
                      :to="
                        `/investments/${investmentPortfolio[0].INVESTMENT_ID}`
                      "
                    >
                      <div class="plan1-header">
                        <h6>Interest Earned</h6>
                      </div>
                      <div
                        class="price-block"
                        data-id="1"
                        data-save_percent=""
                        data-duration="30"
                        style="display: block; margin-top: 73px"
                      >
                        <span
                          class="price-block-inside"
                          style="line-height: 0px"
                        >
                          <span class="price-currency">₦</span>
                          <span class="bold-txt price-value">
                            {{ investmentPortfolio[0].ACCRUED_INTERESTS }}</span
                          >
                          <span class="price-right-block">
                            <span class="price-month font-weight-bold"
                              >.00</span
                            >
                          </span>
                        </span>
                        <p>
                          Maturity Date:
                          {{
                            new Date(
                              investmentPortfolio[0].MATURITY_DATE
                            ).toDateString()
                          }}
                        </p>
                      </div>
                    </v-card>
                  </v-col>
                    <v-col v-if="investmentPortfolio.length > 0" cols="auto">
                    <v-card
                      class="plan1"
                      color="rgb(255, 197, 183)"
                      :to="
                        `/investments/${investmentPortfolio[0].INVESTMENT_ID}`
                      "
                      flat
                    >
                      <div class="plan1-header">
                        <h6>Principal Liquidated</h6>
                      </div>
                      <div
                        class="price-block"
                        data-id="1"
                        data-save_percent=""
                        data-duration="30"
                        style="display: block; margin-top: 73px"
                      >
                        <span
                          class="price-block-inside"
                          style="line-height: 0px"
                        >
                          <span class="price-currency">₦</span>
                          <span class="bold-txt price-value">
                            {{ Number(
                              investmentPortfolio[0].REQUEST_PRINCIPAL).toLocaleString()
                               }}</span
                          >
                          <span class="price-right-block">
                            <span class="price-month font-weight-bold"
                              >.00</span
                            >
                          </span>
                        </span>
                        <p>
                          Maturity Date:
                          {{
                            new Date(
                              investmentPortfolio[0].MATURITY_DATE
                            ).toDateString()
                          }}
                        </p>
                      </div>
                    </v-card>
                  </v-col>
                  <!-- <v-col cols="auto">
                    <div class="plan2">
                      <div class="plan2-header">
                        <h3>Plan 1</h3>
                        <button class="paused-button">PAUSED</button>
                      </div>
                      <div
                        class="price-block"
                        data-id="1"
                        data-save_percent=""
                        data-duration="30"
                        style="display: block; margin-top: 73px"
                      >
                        <span
                          class="price-block-inside"
                          style="line-height: 0px"
                        >
                          <span class="price-currency">₦</span>
                          <span class="bold-txt price-value"> 60,000 </span>
                          <span class="price-right-block">
                            <span class="price-month font-weight-bold"
                              >.00</span
                            >
                          </span>
                        </span>
                        <p>Maturity Date: 14, May 2020</p>
                      </div>
                    </div>
                  </v-col> -->
                  <div class="investment-btn">
                    <router-link
                      to="/investments"
                      style="text-decoration: none;"
                    >
                      <button class="see-investment">See all investment</button>
                    </router-link>
                    <router-link
                      to="/investments"
                      style="text-decoration: none;"
                    >
                      <button class="new-investment">NEW INVESTMENT</button>
                    </router-link>
                  </div>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </section>
      </v-col>
      <v-col lg="3" cols="12">
        <v-card
          class="pa-5 pt-10 d-flex flex-column align-start justify-end"
          min-height="300"
        >
          <h5 class="text-subtitle-1">Wallet Balance</h5>
          <h3>
            <h6 class="d-inline">₦</h6>
            {{ wallet == null ? "0" : wallet.wallet_balance }}
            <h6 class="d-inline">.00</h6>
          </h3>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            depressed
            small
            @click.stop="walletDialog = true"
            >Fund</v-btn
          >
          <v-btn
            class="mt-2"
            color="secondary"
            dark
            depressed
            small
            @click.stop="withdrawWalletDialog = true"
            >Withdraw</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
    <section class="portfolio">
      <v-row class="pt-6">
        <v-col cols="12" md="8" sm="12">
          <v-card class="pa-7" flat min-height="355">
            <Tabs>
              <Tab name="Current Loan" selected="true" v-if="userType == true">
                <v-container>
                  <v-row v-if="userType == true && currentLoan.length > 0">
                    <v-col cols="12" sm="12" md="6">
                      <div
                        class="price-block"
                        data-id="1"
                        data-save_percent=""
                        data-duration="30"
                        style="display: block; position: absolute; top: 50%; left: 20%"
                      >
                        <span
                          class="price-block-inside"
                          style="line-height: 0px"
                        >
                          <span class="price-currency">₦</span>
                          <span class="bold-txt price-value">
                            {{ Number(currentLoan[0].HOW_MUCH_WAS_GIVEN).toLocaleString() }}
                          </span>
                          <span class="price-right-block">
                            <span
                              class="price-month font-weight-bold"
                              style="font-size: 10px"
                              >.00</span
                            >
                          </span>
                        </span>
                      </div>
                      <p
                        style="margin-bottom: 0px; position: absolute; top: 60%; left: 30%"
                      >
                        Total
                      </p>
                      <svg
                        width="221"
                        height="221"
                        viewBox="0 0 221 221"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M220.645 110.269C220.645 170.949 171.454 220.139 110.774 220.139C50.0949 220.139 0.904297 170.949 0.904297 110.269C0.904297 49.5895 50.0949 0.39917 110.774 0.39917C171.454 0.39917 220.645 49.5895 220.645 110.269ZM180.359 110.269C180.359 148.7 149.205 179.854 110.774 179.854C72.3439 179.854 41.1901 148.7 41.1901 110.269C41.1901 71.8388 72.3439 40.6846 110.774 40.6846C149.205 40.6846 180.359 71.8388 180.359 110.269Z"
                          fill="#E1E4E8"
                        />
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="221"
                          height="221"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M220.645 110.269C220.645 170.949 171.454 220.139 110.774 220.139C50.0949 220.139 0.904297 170.949 0.904297 110.269C0.904297 49.5895 50.0949 0.39917 110.774 0.39917C171.454 0.39917 220.645 49.5895 220.645 110.269ZM180.359 110.269C180.359 148.7 149.205 179.854 110.774 179.854C72.3439 179.854 41.1901 148.7 41.1901 110.269C41.1901 71.8388 72.3439 40.6846 110.774 40.6846C149.205 40.6846 180.359 71.8388 180.359 110.269Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0)">
                          <path
                            d="M220.645 0.39917H0.904297V220.139H220.645V0.39917Z"
                            fill="#F44B4E"
                          />
                          <mask
                            id="mask1"
                            mask-type="alpha"
                            maskUnits="userSpaceOnUse"
                            x="-15"
                            y="102"
                            width="127"
                            height="129"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M78.2328 230.919L8.41673 193.766L-14.8506 103.117L111.189 102.392L78.2328 230.919Z"
                              fill="#E4BCBC"
                            />
                          </mask>
                          <g mask="url(#mask1)">
                            <path
                              d="M220.645 0.39917H0.904297V220.139H220.645V0.39917Z"
                              fill="#63C132"
                            />
                          </g>
                          <mask
                            id="mask2"
                            mask-type="alpha"
                            maskUnits="userSpaceOnUse"
                            x="72"
                            y="-17"
                            width="164"
                            height="258"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M110.835 -16.2845L110.775 110.269L72.7727 240.26C72.7727 240.26 195.138 215.887 223.307 172.352C251.477 128.818 223.307 12.1581 223.307 12.1581L110.835 -16.2845Z"
                              fill="#B38888"
                            />
                          </mask>
                          <g mask="url(#mask2)">
                            <path
                              d="M220.645 0.39917H0.904297V220.139H220.645V0.39917Z"
                              fill="#E8F2E9"
                            />
                            <path
                              opacity="0.3"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M110.775 187.178C153.25 187.178 187.684 152.745 187.684 110.269C187.684 67.7939 153.25 33.3602 110.775 33.3602C68.2992 33.3602 33.8655 67.7939 33.8655 110.269C33.8655 152.745 68.2992 187.178 110.775 187.178Z"
                              fill="#63C132"
                            />
                          </g>
                          <path
                            d="M95.7037 142.36H94.2286L90.4449 136.337V142.36H88.9697V133.871H90.4449L94.2402 139.917V133.871H95.7037V142.36ZM99.64 142.477C98.7428 142.477 98.0139 142.195 97.4542 141.631C96.8978 141.064 96.62 140.309 96.62 139.369V139.194C96.62 138.564 96.7402 138.002 96.9815 137.509C97.2262 137.011 97.5686 136.625 98.0081 136.349C98.4468 136.073 98.9368 135.935 99.4766 135.935C100.336 135.935 100.999 136.209 101.465 136.757C101.935 137.305 102.171 138.08 102.171 139.083V139.655H98.0487C98.091 140.176 98.2643 140.588 98.5678 140.89C98.8746 141.194 99.2594 141.346 99.7221 141.346C100.371 141.346 100.9 141.083 101.308 140.558L102.071 141.287C101.819 141.664 101.481 141.958 101.057 142.167C100.638 142.373 100.165 142.477 99.64 142.477ZM99.4708 137.072C99.0828 137.072 98.7677 137.208 98.5264 137.48C98.2892 137.752 98.1383 138.131 98.072 138.617H100.771V138.511C100.74 138.038 100.614 137.68 100.392 137.439C100.171 137.194 99.8639 137.072 99.4708 137.072ZM104.603 134.518V136.051H105.716V137.101H104.603V140.623C104.603 140.863 104.65 141.038 104.743 141.147C104.84 141.252 105.012 141.304 105.256 141.304C105.42 141.304 105.585 141.285 105.752 141.246V142.342C105.429 142.432 105.118 142.477 104.819 142.477C103.73 142.477 103.187 141.875 103.187 140.675V137.101H102.148V136.051H103.187V134.518H104.603ZM115.678 140.261L116.984 133.871H118.446L116.488 142.36H115.077L113.462 136.162L111.812 142.36H110.395L108.436 133.871H109.9L111.217 140.249L112.838 133.871H114.074L115.678 140.261ZM118.489 139.147C118.489 138.529 118.611 137.973 118.856 137.48C119.101 136.982 119.445 136.601 119.888 136.337C120.331 136.068 120.84 135.935 121.416 135.935C122.267 135.935 122.956 136.209 123.486 136.757C124.018 137.305 124.306 138.031 124.348 138.938L124.354 139.269C124.354 139.891 124.233 140.448 123.992 140.937C123.756 141.427 123.413 141.806 122.966 142.074C122.524 142.342 122.01 142.477 121.427 142.477C120.537 142.477 119.824 142.181 119.287 141.59C118.755 140.996 118.489 140.205 118.489 139.217V139.147ZM119.906 139.269C119.906 139.918 120.039 140.428 120.308 140.797C120.576 141.162 120.949 141.346 121.427 141.346C121.905 141.346 122.277 141.159 122.541 140.786C122.809 140.413 122.943 139.866 122.943 139.147C122.943 138.51 122.805 138.005 122.529 137.632C122.257 137.258 121.886 137.072 121.416 137.072C120.953 137.072 120.586 137.256 120.314 137.626C120.042 137.991 119.906 138.539 119.906 139.269ZM128.408 137.345C128.221 137.315 128.029 137.299 127.83 137.299C127.181 137.299 126.743 137.548 126.518 138.045V142.36H125.102V136.051H126.454L126.489 136.757C126.831 136.209 127.306 135.935 127.912 135.935C128.114 135.935 128.281 135.962 128.414 136.016L128.408 137.345ZM130.921 134.518V136.051H132.035V137.101H130.921V140.623C130.921 140.863 130.968 141.038 131.061 141.147C131.158 141.252 131.33 141.304 131.574 141.304C131.738 141.304 131.903 141.285 132.07 141.246V142.342C131.748 142.432 131.437 142.477 131.137 142.477C130.049 142.477 129.505 141.875 129.505 140.675V137.101H128.467V136.051H129.505V134.518H130.921ZM134.071 136.739C134.534 136.203 135.118 135.935 135.826 135.935C137.171 135.935 137.853 136.702 137.872 138.238V142.36H136.455V138.29C136.455 137.855 136.361 137.548 136.17 137.369C135.983 137.186 135.707 137.095 135.342 137.095C134.774 137.095 134.351 137.347 134.071 137.853V142.36H132.654V133.404H134.071V136.739Z"
                            fill="#576169"
                          />
                        </g>
                      </svg>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <div class="portfolio-details">
                        <ul>
                          <li>
                            <div class="investment"></div>
                            Current Loan
                          </li>
                          <div
                            class="price-block"
                            data-id="1"
                            data-save_percent=""
                            data-duration="30"
                            style="display: block;"
                          >
                            <span
                              class="price-block-inside"
                              style="line-height: 0px"
                            >
                              <span class="price-currency">₦</span>
                              <span
                                class="bold-txt price-value"
                                style="font-size: 18.34px"
                              >
                                {{ Number(currentLoan[0].HOW_MUCH_WAS_GIVEN).toLocaleString() }}
                              </span>
                              <span class="price-right-block">
                                <span
                                  class="price-month font-weight-bold"
                                  style="font-size: 10px"
                                  >.00</span
                                >
                              </span>
                            </span>
                          </div>

                          <li>
                            <div class="return"></div>
                            Amount Paid
                          </li>
                          <div
                            class="price-block"
                            data-id="1"
                            data-save_percent=""
                            data-duration="30"
                            style="display: block;"
                          >
                            <span
                              class="price-block-inside"
                              style="line-height: 0px"
                            >
                              <span class="price-currency">₦</span>
                              <span
                                class="bold-txt price-value"
                                style="font-size: 18.34px"
                              >
                                {{ Number(currentLoan[0].HMP).toLocaleString() }}
                              </span>
                              <span class="price-right-block">
                                <span
                                  class="price-month font-weight-bold"
                                  style="font-size: 10px"
                                  >.00</span
                                >
                              </span>
                            </span>
                          </div>
                          <li>
                            <div class="lifetime"></div>
                            Amount Left
                          </li>
                          <div
                            class="price-block"
                            data-id="1"
                            data-save_percent=""
                            data-duration="30"
                            style="display: block;"
                          >
                            <span
                              class="price-block-inside"
                              style="line-height: 0px"
                            >
                              <span class="price-currency">₦</span>
                              <span
                                class="bold-txt price-value"
                                style="font-size: 18.34px"
                              >
                               {{ Number(currentLoan[0].HMR).toLocaleString() }}
                                
                              </span>
                              <span class="price-right-block">
                                <span
                                  class="price-month font-weight-bold"
                                  style="font-size: 10px"
                                  >.00</span
                                >
                              </span>
                            </span>
                          </div>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                  <div
                    v-else
                    class="pa-5 d-flex flex-column align-center justify-end"
                  >
                    <v-icon
                      color="secondary"
                      size="100"
                      class="fas fa-ban mb-6"
                    ></v-icon>
                    <span>No active loans</span>
                    <div style="display: flex">
                      <router-link to="/loans/apply">
                        <v-btn
                          class="mt-2"
                          color="primary"
                          depressed
                          small
                          style="margin-right: 20px"
                          >NEW LOAN</v-btn
                        ></router-link
                      >
                      <router-link to="/loans" style="text-decoration: none;">
                        <v-btn
                          class="mt-2"
                          depressed
                          small
                          style="background-color: #E8F2E9"
                          color="#002D04"
                          >Portfolio</v-btn
                        ></router-link
                      >
                    </div>
                  </div>
                </v-container>
              </Tab>
              <Tab name="Portfolio" selected="true" v-if="userType == false">
                <v-container>
                  <v-row
                    v-if="userType == false && investmentPortfolio.length > 0"
                  >
                    <v-col cols="12" sm="12" md="6">
                      <div
                        class="price-block"
                        data-id="1"
                        data-save_percent=""
                        data-duration="30"
                        style="display: block; position: absolute; top: 50%; left: 20%"
                      >
                        <span
                          class="price-block-inside"
                          style="line-height: 0px"
                        >
                          <span class="price-currency">₦</span>
                          <span class="bold-txt price-value">
                            {{
                              Number(
                                investmentPortfolio[0].MATURITY_VALUE
                              ).toLocaleString()
                            }}</span
                          >
                          <span class="price-right-block">
                            <span
                              class="price-month font-weight-bold"
                              style="font-size: 10px"
                              >.00</span
                            >
                          </span>
                        </span>
                      </div>
                      <p
                        style="margin-bottom: 0px; position: absolute; top: 60%; left: 30%"
                      >
                        Total
                      </p>
                      <svg
                        width="221"
                        height="221"
                        viewBox="0 0 221 221"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M220.645 110.269C220.645 170.949 171.454 220.139 110.774 220.139C50.0949 220.139 0.904297 170.949 0.904297 110.269C0.904297 49.5895 50.0949 0.39917 110.774 0.39917C171.454 0.39917 220.645 49.5895 220.645 110.269ZM180.359 110.269C180.359 148.7 149.205 179.854 110.774 179.854C72.3439 179.854 41.1901 148.7 41.1901 110.269C41.1901 71.8388 72.3439 40.6846 110.774 40.6846C149.205 40.6846 180.359 71.8388 180.359 110.269Z"
                          fill="#E1E4E8"
                        />
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="221"
                          height="221"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M220.645 110.269C220.645 170.949 171.454 220.139 110.774 220.139C50.0949 220.139 0.904297 170.949 0.904297 110.269C0.904297 49.5895 50.0949 0.39917 110.774 0.39917C171.454 0.39917 220.645 49.5895 220.645 110.269ZM180.359 110.269C180.359 148.7 149.205 179.854 110.774 179.854C72.3439 179.854 41.1901 148.7 41.1901 110.269C41.1901 71.8388 72.3439 40.6846 110.774 40.6846C149.205 40.6846 180.359 71.8388 180.359 110.269Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0)">
                          <path
                            d="M220.645 0.39917H0.904297V220.139H220.645V0.39917Z"
                            fill="#F44B4E"
                          />
                          <mask
                            id="mask1"
                            mask-type="alpha"
                            maskUnits="userSpaceOnUse"
                            x="-15"
                            y="102"
                            width="127"
                            height="129"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M78.2328 230.919L8.41673 193.766L-14.8506 103.117L111.189 102.392L78.2328 230.919Z"
                              fill="#E4BCBC"
                            />
                          </mask>
                          <g mask="url(#mask1)">
                            <path
                              d="M220.645 0.39917H0.904297V220.139H220.645V0.39917Z"
                              fill="#63C132"
                            />
                          </g>
                          <mask
                            id="mask2"
                            mask-type="alpha"
                            maskUnits="userSpaceOnUse"
                            x="72"
                            y="-17"
                            width="164"
                            height="258"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M110.835 -16.2845L110.775 110.269L72.7727 240.26C72.7727 240.26 195.138 215.887 223.307 172.352C251.477 128.818 223.307 12.1581 223.307 12.1581L110.835 -16.2845Z"
                              fill="#B38888"
                            />
                          </mask>
                          <g mask="url(#mask2)">
                            <path
                              d="M220.645 0.39917H0.904297V220.139H220.645V0.39917Z"
                              fill="#E8F2E9"
                            />
                            <path
                              opacity="0.3"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M110.775 187.178C153.25 187.178 187.684 152.745 187.684 110.269C187.684 67.7939 153.25 33.3602 110.775 33.3602C68.2992 33.3602 33.8655 67.7939 33.8655 110.269C33.8655 152.745 68.2992 187.178 110.775 187.178Z"
                              fill="#63C132"
                            />
                          </g>
                          <path
                            d="M95.7037 142.36H94.2286L90.4449 136.337V142.36H88.9697V133.871H90.4449L94.2402 139.917V133.871H95.7037V142.36ZM99.64 142.477C98.7428 142.477 98.0139 142.195 97.4542 141.631C96.8978 141.064 96.62 140.309 96.62 139.369V139.194C96.62 138.564 96.7402 138.002 96.9815 137.509C97.2262 137.011 97.5686 136.625 98.0081 136.349C98.4468 136.073 98.9368 135.935 99.4766 135.935C100.336 135.935 100.999 136.209 101.465 136.757C101.935 137.305 102.171 138.08 102.171 139.083V139.655H98.0487C98.091 140.176 98.2643 140.588 98.5678 140.89C98.8746 141.194 99.2594 141.346 99.7221 141.346C100.371 141.346 100.9 141.083 101.308 140.558L102.071 141.287C101.819 141.664 101.481 141.958 101.057 142.167C100.638 142.373 100.165 142.477 99.64 142.477ZM99.4708 137.072C99.0828 137.072 98.7677 137.208 98.5264 137.48C98.2892 137.752 98.1383 138.131 98.072 138.617H100.771V138.511C100.74 138.038 100.614 137.68 100.392 137.439C100.171 137.194 99.8639 137.072 99.4708 137.072ZM104.603 134.518V136.051H105.716V137.101H104.603V140.623C104.603 140.863 104.65 141.038 104.743 141.147C104.84 141.252 105.012 141.304 105.256 141.304C105.42 141.304 105.585 141.285 105.752 141.246V142.342C105.429 142.432 105.118 142.477 104.819 142.477C103.73 142.477 103.187 141.875 103.187 140.675V137.101H102.148V136.051H103.187V134.518H104.603ZM115.678 140.261L116.984 133.871H118.446L116.488 142.36H115.077L113.462 136.162L111.812 142.36H110.395L108.436 133.871H109.9L111.217 140.249L112.838 133.871H114.074L115.678 140.261ZM118.489 139.147C118.489 138.529 118.611 137.973 118.856 137.48C119.101 136.982 119.445 136.601 119.888 136.337C120.331 136.068 120.84 135.935 121.416 135.935C122.267 135.935 122.956 136.209 123.486 136.757C124.018 137.305 124.306 138.031 124.348 138.938L124.354 139.269C124.354 139.891 124.233 140.448 123.992 140.937C123.756 141.427 123.413 141.806 122.966 142.074C122.524 142.342 122.01 142.477 121.427 142.477C120.537 142.477 119.824 142.181 119.287 141.59C118.755 140.996 118.489 140.205 118.489 139.217V139.147ZM119.906 139.269C119.906 139.918 120.039 140.428 120.308 140.797C120.576 141.162 120.949 141.346 121.427 141.346C121.905 141.346 122.277 141.159 122.541 140.786C122.809 140.413 122.943 139.866 122.943 139.147C122.943 138.51 122.805 138.005 122.529 137.632C122.257 137.258 121.886 137.072 121.416 137.072C120.953 137.072 120.586 137.256 120.314 137.626C120.042 137.991 119.906 138.539 119.906 139.269ZM128.408 137.345C128.221 137.315 128.029 137.299 127.83 137.299C127.181 137.299 126.743 137.548 126.518 138.045V142.36H125.102V136.051H126.454L126.489 136.757C126.831 136.209 127.306 135.935 127.912 135.935C128.114 135.935 128.281 135.962 128.414 136.016L128.408 137.345ZM130.921 134.518V136.051H132.035V137.101H130.921V140.623C130.921 140.863 130.968 141.038 131.061 141.147C131.158 141.252 131.33 141.304 131.574 141.304C131.738 141.304 131.903 141.285 132.07 141.246V142.342C131.748 142.432 131.437 142.477 131.137 142.477C130.049 142.477 129.505 141.875 129.505 140.675V137.101H128.467V136.051H129.505V134.518H130.921ZM134.071 136.739C134.534 136.203 135.118 135.935 135.826 135.935C137.171 135.935 137.853 136.702 137.872 138.238V142.36H136.455V138.29C136.455 137.855 136.361 137.548 136.17 137.369C135.983 137.186 135.707 137.095 135.342 137.095C134.774 137.095 134.351 137.347 134.071 137.853V142.36H132.654V133.404H134.071V136.739Z"
                            fill="#576169"
                          />
                        </g>
                      </svg>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <div class="portfolio-details">
                        <ul>
                          <li>
                            <div class="investment"></div>
                            Current Investment
                          </li>
                          <div
                            class="price-block"
                            data-id="1"
                            data-save_percent=""
                            data-duration="30"
                            style="display: block;"
                          >
                            <span
                              class="price-block-inside"
                              style="line-height: 0px"
                            >
                              <span class="price-currency">₦</span>
                              <span
                                class="bold-txt price-value"
                                style="font-size: 18.34px"
                              >
                                {{
                                  Number(
                                    investmentPortfolio[0].FINAL_INVESTMENT
                                  ).toLocaleString()
                                }}
                              </span>
                              <span class="price-right-block">
                                <span
                                  class="price-month font-weight-bold"
                                  style="font-size: 10px"
                                  >.00</span
                                >
                              </span>
                            </span>
                          </div>

                          <li>
                            <div class="return"></div>
                            Current Returns
                          </li>
                          <div
                            class="price-block"
                            data-id="1"
                            data-save_percent=""
                            data-duration="30"
                            style="display: block;"
                          >
                            <span
                              class="price-block-inside"
                              style="line-height: 0px"
                            >
                              <span class="price-currency">₦</span>
                              <span
                                class="bold-txt price-value"
                                style="font-size: 18.34px"
                              >
                                {{
                                  Number(
                                    investmentPortfolio[0].CURRENT_BALANCE
                                  ).toLocaleString()
                                }}
                              </span>
                              <span class="price-right-block">
                                <span
                                  class="price-month font-weight-bold"
                                  style="font-size: 10px"
                                  >.00</span
                                >
                              </span>
                            </span>
                          </div>
                          <li>
                            <div class="lifetime"></div>
                            Lifetime Returns
                          </li>
                          <div
                            class="price-block"
                            data-id="1"
                            data-save_percent=""
                            data-duration="30"
                            style="display: block;"
                          >
                            <span
                              class="price-block-inside"
                              style="line-height: 0px"
                            >
                              <span class="price-currency">₦</span>
                              <span
                                class="bold-txt price-value"
                                style="font-size: 18.34px"
                              >
                                {{
                                  Number(
                                    investmentPortfolio[0].MATURITY_VALUE
                                  ).toLocaleString()
                                }}
                              </span>
                              <span class="price-right-block">
                                <span
                                  class="price-month font-weight-bold"
                                  style="font-size: 10px"
                                  >.00</span
                                >
                              </span>
                            </span>
                          </div>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                  <div
                    v-else
                    class="pa-5 d-flex flex-column align-center justify-end"
                  >
                    <v-icon
                      color="secondary"
                      size="100"
                      class="fas fa-ban mb-6"
                    ></v-icon>
                    <span>No active investment</span>
                    <div style="display: flex">
                      <router-link to="/investments">
                        <v-btn
                          class="mt-2"
                          color="primary"
                          depressed
                          small
                          style="margin-right: 20px"
                          >NEW INVESTMENT</v-btn
                        ></router-link
                      >
                      <router-link
                        to="/investments"
                        style="text-decoration: none;"
                      >
                        <v-btn
                          class="mt-2"
                          depressed
                          small
                          style="background-color: #E8F2E9"
                          color="#002D04"
                          >MARKETPLACE</v-btn
                        ></router-link
                      >
                    </div>
                  </div>
                </v-container>
              </Tab>
              <Tab name="Transactions">
                <div v-if="transactions.length == 0">
                  <div class="text-center">
                    <h3>No Transactions!</h3>
                  </div>
                </div>
                <div v-else-if="transactions.length > 0">
                  <h5 class="text-subtitle-1 font-weight-bold">Transactions</h5>
                  <v-list two-line>
                    <v-list-item v-for="item in transactions" :key="item.id">
                      <v-list-item-avatar>
                        <v-icon
                          v-if="item.TRANS_TYPE == 1"
                          class="lighten-1 white--text primary "
                          >fas fa-bolt</v-icon
                        >
                        <v-icon v-else class="lighten-1 white--text secondary "
                          >fas fa-bolt</v-icon
                        >
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.NARRATION_CUSTOMER"
                        ></v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-action>
                        <!-- <v-btn icon>
                          <v-icon color="grey lighten-1"
                            >mdi-information</v-icon
                          >
                        </v-btn> -->
                        <v-list-item-title
                          class="headline mb-1"
                          v-text="item.TRANS_AMOUNT"
                        >
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          <timeago
                            :datetime="item.TRANS_DATE"
                            :auto-update="60"
                          ></timeago>
                        </v-list-item-subtitle>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>
                </div>
              </Tab>
            </Tabs>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4">
          <v-card class="pa-7" flat height="355">
            <Tabs>
              <Tab name="Cards" selected="true">
                <div class="cards-banks">
                  <div v-if="cards.length > 0" class="fake-card">
                    <v-img
                      max-height="100"
                      max-width="300"
                      :src="require('@/assets/card.png')"
                    >
                      <h4
                        style="position: absolute; bottom: 40%; left: 5%; color: #fff;"
                      >
                        {{
                          cards[0].LAST_FOUR_DIGITS != null &&
                            "xxxx xxxx xxxx " +
                              cards[0].LAST_FOUR_DIGITS.replace(
                                /.(?=.{4})/g,
                                "x"
                              )
                        }}
                      </h4>
                      <p
                        style="position: absolute; bottom: 0; left: 5%; color: #fff;"
                      >
                        Expires {{ cards[0].EXPIRY_DATE }}
                      </p>
                      <v-img
                        max-height="30"
                        max-width="50"
                        :src="require('@/assets/mastercard.png')"
                        style="position: absolute; bottom: 10%; right: 5%"
                      ></v-img>
                    </v-img>
                  </div>

                  <!-- <v-card
                    class="upload-card pa-5 d-flex flex-column align-center justify-end v-card v-card--flat v-sheet theme--light"
                    flat
                    @click.stop="carddialog = true"
                  >
                    <v-icon
                      color="primary"
                      size="30"
                      class="fas fa-plus mt-4"
                    ></v-icon>
                    <span>Add new card</span>
                  </v-card> -->
                  <paystack
                    :amount="500"
                    :email="email"
                    :paystackkey="paystackkey"
                    :reference="reference"
                    :callback="callback"
                    :close="close"
                    :embed="false"
                  >
                    <v-card
                      class="upload-card pa-9 d-flex flex-column align-center justify-end v-card v-card--flat v-sheet theme--light"
                      flat
                    >
                      <v-icon
                        color="primary"
                        size="30"
                        class="fas fa-plus "
                      ></v-icon>
                      <span>Add new card</span>
                    </v-card>
                  </paystack>
                </div>
              </Tab>
              <Tab name="Banks">
                <div class="cards-banks">
                  <div v-if="bankAccounts.length > 0" class="fake-card">
                    <v-img
                      max-height="100"
                      max-width="300"
                      :src="require('@/assets/card.png')"
                    >
                      <p
                        style="position: absolute; top: 0; left: 5%; color: #fff;"
                      >
                        {{ bankAccounts[0].account_name }}
                      </p>
                      <h2
                        style="position: absolute; bottom: 40%; left: 5%; color: #fff;"
                      >
                        {{
                          bankAccounts[0].account_number.replace(
                            /.(?=.{4})/g,
                            "x"
                          )
                        }}
                      </h2>
                      <p
                        style="position: absolute; bottom: 0; left: 5%; color: #fff;"
                      >
                        {{ bankAccounts[0].bank_name }}
                      </p>
                      <v-img
                        max-height="30"
                        max-width="50"
                        :src="require('@/assets/icons/home.svg')"
                        style="position: absolute; bottom: 10%; right: 5%"
                      ></v-img>
                    </v-img>
                  </div>

                  <v-card
                    class="upload-card pa-5 d-flex flex-column align-center justify-end v-card v-card--flat v-sheet theme--light"
                    flat
                    @click="bankdialog = true"
                  >
                    <v-icon
                      color="primary"
                      size="30"
                      class="fas fa-plus mt-4"
                    ></v-icon>
                    <span>Add new Bank Account</span>
                  </v-card>
                </div>
              </Tab>
              <a
                href="/cards_and_banks"
                style="position: absolute; top: 10%; right: 5%; color: #cc3e39;"
                >See All</a
              >
            </Tabs>
            <v-dialog v-model="bankdialog" max-width="500px">
              <v-card>
                <v-card-title>
                  <span>Add Bank Account</span>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="bankdialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-text>
                  <v-text-field
                    v-model="accountNo"
                    :rules="[v => !!v || 'Account Number is required']"
                    label="Account Number"
                    required
                    value=""
                  ></v-text-field>

                  <v-select
                    :items="banks"
                    v-model="bankCode"
                    name="bank_name"
                    item-text="bank_name"
                    :rules="[v => !!v || 'Bank Name is required']"
                    label="Select Bank"
                    item-value="bank_code"
                    @change="resolveAccount"
                  ></v-select>
                  <v-text-field
                    v-if="userDetails"
                    v-model="userDetails.account_name"
                    :rules="[v => !!v || 'Account Name is required']"
                    label="Account Name"
                    required
                    disabled
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" text @click="bankdialog = false">
                    Close
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="secondary">
                    Reset
                    <v-icon right>
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                  <v-btn @click="saveAccount" color="primary">
                    Add Bank Account
                    <v-icon right>
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <v-dialog v-model="walletDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span>Fund Wallet</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="walletDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="amount"
            :rules="[v => !!v || 'Amount is required']"
            label="Amount"
            required
          ></v-text-field>
          <!-- <v-select
            :items="select"
            v-model="paymentMethod"
            :rules="[v => !!v || 'Payment Method is required']"
            label="Select Payment Method"
            item-value="text"
          ></v-select> -->
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="walletDialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>

          <paystack
            :amount="amount * 100"
            :email="email"
            :paystackkey="paystackkey"
            :reference="reference"
            :callback="walletCallback"
            :close="close"
            :embed="false"
            style="background-color: #E8F2E9"
            color="#002D04"
            class="mt-2 v-btn v-btn--depressed theme--light v-size--small primary"
          >
            Fund Wallet
            <v-icon right>
              mdi-chevron-right
            </v-icon>
          </paystack>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="withdrawWalletDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span> Withdraw wallet funds </span>
          <v-spacer></v-spacer>
          <v-btn icon @click="withdrawWalletDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="amount"
            :rules="[v => !!v || 'Amount is required']"
            label="Amount"
            required
          ></v-text-field>
          <v-select
            :items="$store.state.banks.bankAccounts"
            v-model="accountId"
            name="bank_name"
            item-text="bank_name"
            :rules="[v => !!v || 'Bank Account is required']"
            label="Select Bank Account"
            item-value="account_id"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="withdrawWalletDialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :loading="bankLoading"
            :disabled="bankLoading"
            @click="withdrawWalletFund"
            color="primary"
          >
            Withdraw Wallet Funds
            <v-icon right>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      absolute
      top
      color="secondary"
      elevation="24"
      v-model="$store.state.banks.error"
      :timeout="5000"
      class="snackbar"
    >
      {{ $store.state.banks.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="black"
          text
          v-bind="attrs"
          @click="$store.state.banks.error = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      absolute
      top
      color="success"
      elevation="24"
      v-model="$store.state.banks.success"
      :timeout="5000"
      class="snackbar"
    >
      {{ $store.state.banks.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="$store.state.banks.success = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import Vue from "vue";
import Tab from "./components/Tabs/Tab.vue";
import Tabs from "./components/Tabs/Tabs.vue";
import router from "@/router";
import paystack from "vue-paystack";
import { mapActions, mapState } from "vuex";
import VueTimeago from "vue-timeago";
Vue.use(VueTimeago, {
  name: "Timeago", // Component name, `Timeago` by default
  locale: "en", // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    "zh-CN": require("date-fns/locale/zh_cn"),
    ja: require("date-fns/locale/ja")
  }
});

export default Vue.extend({
  name: "Dashboard",
  components: {
    Tab,
    Tabs,
    paystack
  },
  data: () => ({
    paystackkey: "pk_test_564016ad5c85950dbb2af2e6a14957faa89adb28", //paystack public key
    bankdialog: false,
    carddialog: false,
    dialog: false,
    walletDialog: false,
    cancelModal: false,
    withdrawWalletDialog: false,
    borrower: true,
    investor: false,
    duration: null,
    durations: null,
    valueDeterminate: 50,
    paymentMethod: "",
    amount: "",
    name: "",
    email: "",
    cardNumber: "",
    expDate: "",
    cvc: "",
    accountId: "",
    accountName: "",
    accountNo: "",
    bankCode: "",
    bankId: [],
    investmentDialog: false,
    errors: false,
    items: [
      {
        id: 1,
        icon: "fas fa-bolt",
        iconClass: "primary lighten-1 white--text",
        title: "Loan repayment",
        subtitle: "Jan 9, 2014"
      },
      {
        id: 2,
        icon: "fas fa-bolt",
        iconClass: "secondary lighten-1 white--text",
        title: "Wallet withdrawal",
        subtitle: "Jan 17, 2014"
      },
      {
        id: 3,
        icon: "fas fa-bolt",
        iconClass: "primary lighten-1 white--text",
        title: "Loan repayment",
        subtitle: "Jan 28, 2014"
      }
    ],
    select: [{ text: "Paystack" }, { text: "Paypal" }],
    tab: null,
    tabItems: ["Cards", "Banks"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }),
  watch: {
    loanCancelled: function() {
      router.push("/loans");
    }
  },
  mounted() {
    // console.log(this.state);
  },
  created() {
    //created methods
    this.email = this.$store.state.account.user.data.email;
    this.getWallet();
    this.getCards();
    this.getBankAccounts();
    this.getPendingInvestments();
    this.getInvestmentPortfolio();
    this.getLoans();
    this.getTransactions();
  },
  computed: {
    reference() {
      let text = "";
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    ...mapState("banks", [
      "userDetails",
      "banks",
      "cards",
      "wallet",
      "bankAccounts",
      "error",
      "success",
      "message",
      "bankLoading"
    ]),
    ...mapState("account", ["status", "user", "userData", "userType"]),
    ...mapState("loans", [
      "currentLoan",
      "recentPayment",
      "loanHistory",
      "loansDetails",
      "loanCancelled"
    ]),
    ...mapState("investments", [
      "investments",
      "pendingInvestments",
      "investmentPortfolio",
      "investmentHistory",
      "authorizationUrl"
    ]),
    ...mapState("transactions", ["transactions"])
    // ...mapState("alert", "isLoading")
  },
  methods: {
    ...mapActions("banks", [
      "getBanks",
      "resolveBankAccount",
      "saveBankAccount",
      "saveCard",
      "getBankAccounts",
      "getCards",
      "getWallet",
      "withdrawWalletFunds",
      "fundWallet"
    ]),
    ...mapActions("investments", [
      "getPendingInvestments",
      "getInvestmentPortfolio"
    ]),
    ...mapActions("savings", ["getSavings"]),
    ...mapActions("loans", ["getLoans", "cancelLoanRequest"]),
    ...mapActions("transactions", ["getTransactions"]),
    ...mapState("account", ["getUserDetails"]),
    callback: function(response) {
      if (response.status == "success") {
        this.addCard(response.trxref);
      } else {
        alert("Something went wrong! Please try again");
      }
    },
    walletCallback: function(response) {
      if (response.status == "success") {
        const ref = response.trxref;
        this.fundWallet({ ref });
      } else {
        alert("Something went wrong! Please try again.");
      }
    },
    close: function() {
      console.log("Payment closed");
    },
    resolveAccount() {
      if (this.accountNo && this.bankCode) {
        const accountNo = this.accountNo;
        const bankCode = this.bankCode;
        this.resolveBankAccount({ accountNo, bankCode });
      }
    },
    getBank() {
      this.bankId = this.$store.state.banks.banks.filter(bank => {
        return bank.bank_code == this.bankCode;
      });
    },
    withdrawWalletFund() {
      const amount = this.amount;
      const accountId = this.accountId;
      this.withdrawWalletDialog = false;
      return this.withdrawWalletFunds({ accountId, amount });
    },
    // getBankMyAccounts() {
    //   this.getBankAccounts();
    // },
    saveAccount() {
      this.getBank();
      // console.log(
      //   this.$store.state.banks.userDetails.account_name,
      //   this.accountNo,
      //   this.bankId
      // );
      if (
        this.$store.state.banks.userDetails.account_name &&
        this.accountNo &&
        this.bankId
      ) {
        const accountName = this.$store.state.banks.userDetails.account_name;
        const accountNo = this.accountNo;
        const bankId = this.bankId[0]["bank_id"];
        this.saveBankAccount({ accountName, accountNo, bankId });
        this.bankdialog = false;
      } else {
        this.errors = true;
        this.message = "Please Fill In all Fields";
      }
    },
    addCard(ref) {
      this.saveCard({ ref });
    },
    alertDisplay(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Cancel it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true
      })
        .then(result => {
          if (result) {
            this.cancelLoanRequest({ id: id });
          }
        })
        .catch(error => console.log(error));
    }
  }
});
</script>
<style>
.dash-success {
  background-color: #e6f6e9 !important;
  color: var(--v-primary-base) !important;
  caret-color: #e6f6e9 !important;
}
input[type="range"] {
  margin: auto;
  -webkit-appearance: none;
  position: relative;
  overflow: hidden;
  height: 7px;
  width: 200px;
  cursor: pointer;
  border-radius: 30px; /* iOS */
  outline: none;
}

::-webkit-slider-runnable-track {
  background: #e9e9e9;
}
::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px; /* 1 */
  height: 40px;
  /* background: #fff; */
  box-shadow: -100vw 0 0 100vw #63c132;
  /* border: 2px solid #e65151; */
}

::-moz-range-track {
  height: 40px;
  background: #e9e9e9;
}

::-moz-range-thumb {
  /* background: #fff; */
  height: 40px;
  width: 20px;
  /* border: 3px solid #999; */
  border-radius: 0 !important;
  box-shadow: -100vw 0 0 100vw #63c132;
  box-sizing: border-box;
}

::-ms-fill-lower {
  background: #63c132;
}

::-ms-thumb {
  background: #fff;
  border: 2px solid #999;
  height: 40px;
  width: 20px;
  box-sizing: border-box;
}

::-ms-ticks-after {
  display: none;
}

::-ms-ticks-before {
  display: none;
}

::-ms-track {
  background: #e9e9e9;
  color: transparent;
  height: 40px;
  border: none;
}

::-ms-tooltip {
  display: none;
}

.loan-details .make-payment {
  background-color: #63c132;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  font-size: 9px;
}
.loan-details .make-payment span i {
  margin-left: 23px;
}
.loan-details .apply {
  background-color: #e8f2e9;
  color: #002d04;
  padding: 10px;
  border-radius: 4px;
  font-size: 9px;
  margin: 0 10px;
}
.loan-details .apply span i {
  margin-left: 30px;
}
.loan-details p,
.amount-left p,
.amount-paid p {
  font-size: 12.85px;
}

.loan-details {
  margin-top: -20px;
}
.loan-details .current-loan {
  padding-top: 30px;
}
/* .amount-left .price-block {
  padding-top: 46px;
} */
.price-block-inside .price-currency {
  font-size: 10px;
  vertical-align: text-top;
}
.price-block-inside .price-value {
  font-size: 16.7px !important;
  font-weight: 600;
  line-height: 1;
}
.investment h4 {
  font-weight: 600;
  margin-bottom: 0px;
  font-size: 19.28px;
}

.investment .investment-btn {
  display: flex;
}

.investment .investment-btn .see-investment {
  border: 2px solid #63c132;
    padding: 15px 42px;
    margin: 10px 20px 0 10px;
    border-radius: 5px;
    outline: none;
    color: #002d04;
    font-size: 10.28px;
}
.investment .investment-btn .new-investment {
 background-color: #63c132;
    padding: 16px 55px;
    margin: 10px 20px 0 5px;
    border-radius: 5px;
    outline: none;
    color: #fff;
    font-size: 10.28px;
}
.loan-apply {
  background-color: #660303;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  min-width: 150px;
}
.loan-apply span i {
  margin-left: 23px;
}
.plan1 {
  background-color: #e8f2e9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 3px rgba(0, 48, 2, 0.08);
  min-width: 180px;
}
.plan1 .plan1-header,
.plan2 .plan2-header {
  display: flex;
  /* margin-bottom: 100px; */
}
.plan1-header .active-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #63c132;
  color: #fff;
  border-radius: 4px;
  padding: 0px 14px;
  font-size: 6.85px;
}
.plan1 .price-block p,
.plan2 .price-block p {
  margin-bottom: -12px !important;
  font-size: 7.71px;
}
.dashboard .v-card {
  box-shadow: 0px 2px 3px rgba(0, 48, 2, 0.08) !important;
}
.plan2 {
  background-color: #f0e2e2;
  padding: 20px;
  border-radius: 8px;
}
.plan2 .paused-button {
  background-color: #cc3639;
  color: #fff;
  margin-left: 80px;
  border-radius: 4px;
  padding: 0px 13px;
  font-size: 6.85px;
}
.portfolio-details .investment {
  background-color: #e8f2e9;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details .return {
  background-color: #63c132;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details .lifetime {
  background-color: #f44b4e;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details ul li {
  display: flex;
  padding-top: 18px;
}

.cards-banks .upload-card i {
  cursor: pointer;
}
.v-slide-group__content {
  margin-bottom: 20px;
}

.cards-banks .bank-card {
  height: 130px;
  width: 300px;
  background-color: var(--v-primary-lighten1) !important;
  margin: 0 auto;
  border-radius: 8px;
}
.cards-banks .upload-card {
  border: 2px solid var(--v-primary-lighten1) !important;
  margin: 20px auto;
  height: 100px;
  width: 250px;
  border-radius: 8px;
}
.cards-banks .upload-card i {
  cursor: pointer;
}
.card-title {
  display: flex;
}
.card-title a {
  color: red !important;
  text-decoration: none;
  font-size: 9px;
  position: absolute;
  right: 5%;
}
.price-block-inside .price-currency {
  font-size: 10px;
  vertical-align: text-top;
}
.price-block-inside .price-value {
  font-size: 25.7px;
  font-weight: 600;
  line-height: 1;
}

.portfolio-details .investment {
  background-color: #e8f2e9;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details .return {
  background-color: #63c132;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details .lifetime {
  background-color: #f44b4e;
  height: 8.79px;
  width: 27.83px;
  margin: 6px 13px 15px 0;
}
.portfolio-details ul li {
  display: flex;
  padding-top: 18px;
}
</style>
