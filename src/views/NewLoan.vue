<template>
  <v-container
    class="profile d-flex justify-space-around"
    style="background: white"
  >
    <v-snackbar
      fixed
      top
      color="secondary"
      elevation="24"
      v-model="thisError"
      :timeout="3000"
      class="snackbar"
    >
      {{ thisMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="thisError = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      fixed
      top
      color="success"
      elevation="24"
      v-model="thisSuccess"
      :timeout="3000"
      class="snackbar"
    >
      {{ thisMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="thisSuccess = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-col cols="12" md="10" sm="12">
      <v-card class="py-5 px-10 mt-16" elevation="0" v-if="step === 0">
        <v-list-item-content class="mb-5">
          <v-list-item-title
            class="display-1 font-weight-bold green--text text--lighten-1"
          >
            Loan Amount And Duration
          </v-list-item-title>
        </v-list-item-content>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="next">
            <v-row justify="space-around">
              <v-col md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="How much do you want to borrow?"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="profileData.amount"
                    :error-messages="errors"
                    type="number"
                    label="How much do you want to borrow?"
                    @input="setInstallments"
                    required
                    outlined
                  ></v-text-field>
                </validation-provider>
              </v-col>

              <v-col md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="For how long"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="profileData.duration"
                    :error-messages="errors"
                    type="number"
                    label="For how long"
                    @input="setInstallments"
                    required
                    outlined
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>
            <v-card elevation="0">
              <div class="d-flex justify-end align-items-center text-center">
                <!-- <div class="item flex-fill border-right">
                    <h3 class="title is-4 mb-0">
                      {{ profileData.amount > 0 ? "&#8358;" : "" }}
                      {{ profileData.amount ? profileData.amount : 0 }}
                    </h3>
                    <small v-if="profileData.duration == ''" class="text-danger"
                      >Amount</small>
                    <small v-else class="text-danger"
                      >For {{ profileData.duration }} months</small>
                  </div> -->
                <div class="item">
                  <h1 class="display-1 font-weight-bold mb-0">
                    {{ installments > 0 ? "&#8358;" : "" }}
                    {{ installments ? installments : 0 }}
                  </h1>
                  <small class="text-danger">Monthly Repayment</small>
                </div>
              </div>
            </v-card>

            <div class="btn-block d-flex justify-end mt-8">
              <v-btn
                :loading="thisLoading"
                :disabled="invalid || thisLoading"
                type="submit"
                style="font-size: 14.26px; outline: none px-0"
                color="primary"
                elevation="0"
              >
                NEXT
                <v-icon right dark>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </form>
        </validation-observer>
      </v-card>
      <v-card class="py-5 px-10 mt-16" elevation="0" v-if="step === 1">
        <v-list-item-content class="mb-5">
          <v-list-item-title
            class="display-1 font-weight-bold green--text text--lighten-1"
          >
            Has Any Of These Changed
          </v-list-item-title>
        </v-list-item-content>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="next">
            <v-row justify="space-around">
              <v-col md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="Full name"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="profileData.fullName"
                    :error-messages="errors"
                    label="Full name"
                    required
                    disabled
                    outlined
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col md="6">
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
                    disabled
                    outlined
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <v-row justify="space-around">
              <v-col md="6">
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
              </v-col>
              <v-col md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="Date of birth"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="profileData.dob"
                    :error-messages="errors"
                    required
                    label="Date of Birth"
                    outlined
                    type="date"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <v-row justify="space-around">
              <v-col md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="Address"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="profileData.homeAddress"
                    :error-messages="errors"
                    required
                    label="Address"
                    outlined
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col md="6">
                <validation-provider
                  name="State of residence"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-select
                    v-model="profileData.state"
                    :items="states"
                    :error-messages="errors"
                    label="State of Residence"
                    item-text="name"
                    item-value="id"
                    required
                    outlined
                  ></v-select>
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </v-col>
            </v-row>
            <div style="display: flex; margin-top: 50px">
              <v-btn
                @click="stepBack"
                type="button"
                class="form-back-btn back"
                elevation="0"
              >
                BACK
                <v-icon> mdi-chevron-right </v-icon>
              </v-btn>

              <v-spacer></v-spacer>
              <v-btn
                :loading="loading"
                :disabled="invalid || loading"
                type="submit"
                style="font-size: 14.26px; outline: none"
                color="primary"
                elevation="0"
              >
                NEXT
                <v-icon> mdi-chevron-right </v-icon>
              </v-btn>
            </div>
          </form>
        </validation-observer>
      </v-card>
      <v-card class="py-5 px-10 mt-16" elevation="0" v-if="step === 2">
        <v-list-item-content class="mb-5">
          <v-list-item-title
            class="display-1 font-weight-bold green--text text--lighten-1"
          >
            Upload Documents
          </v-list-item-title>
        </v-list-item-content>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="next" style="height: 400px">
            <v-row gutters>
              <v-col cols="12" sm="12" md="5">
                <div style="position: relative">
                  <div style="position: absolute; z-index: 1">
                    <v-card
                      class="upload-card d-flex flex-column align-center justify-center"
                      flat
                      height="113"
                      color="#63c132"
                    >
                      <v-icon color="white" size="40" class="mt-4"
                        >mdi-file-document-outline</v-icon
                      >
                      <p class="pt-8 bank_statement" style="color: white">
                        {{
                          profileData.bankStatementFile === ""
                            ? "Bank Statement.pdf"
                            : profileData.bankStatementFile
                        }}
                      </p>
                    </v-card>
                  </div>

                  <div
                    style="
                      position: absolute;
                      z-index: 2;
                      opacity: 0;
                      width: 100%;
                    "
                  >
                    <v-file-input
                      height="113"
                      placeholder="Upload bank statement"
                      outlined
                      @change="handleFileChange('bank_statement', $event)"
                    />
                  </div>
                </div>
              </v-col>

              <v-col cols="12" sm="12" md="5">
                <div style="position: relative">
                  <div style="position: absolute; z-index: 1">
                    <v-card
                      class="upload-card d-flex flex-column align-center justify-center"
                      flat
                      height="113"
                    >
                      <v-icon
                        color="primary"
                        size="40"
                        class="fas fa-plus mt-4"
                      ></v-icon>
                      <p class="pt-8">
                        {{
                          profileData.validIdFile === ""
                            ? "Add a Valid ID"
                            : profileData.validIdFile
                        }}
                      </p>
                    </v-card>
                  </div>

                  <div
                    style="
                      position: absolute;
                      z-index: 2;
                      opacity: 0;
                      width: 100%;
                    "
                  >
                    <v-file-input
                      height="113"
                      placeholder="Add a Valid ID"
                      outlined
                      @change="handleFileChange('valid_id', $event)"
                    />
                  </div>
                </div>
              </v-col>

              <v-col cols="12" sm="12" md="5">
                <div style="position: relative; top: 130px">
                  <div style="position: absolute; z-index: 1">
                    <v-card
                      class="upload-card d-flex flex-column align-center justify-center"
                      flat
                      height="113"
                    >
                      <v-icon
                        color="primary"
                        size="40"
                        class="fas fa-plus mt-4"
                      ></v-icon>
                      <p class="pt-8">
                        {{
                          profileData.utilityFile === ""
                            ? "Utility Bill / Proof of Address"
                            : profileData.utilityFile
                        }}
                      </p>
                    </v-card>
                  </div>

                  <div
                    style="
                      position: absolute;
                      z-index: 2;
                      opacity: 0;
                      width: 100%;
                    "
                  >
                    <v-file-input
                      height="113"
                      placeholder="Utility Bill / Proof of Address"
                      outlined
                      @change="handleFileChange('utility', $event)"
                    />
                  </div>
                </div>
              </v-col>
            </v-row>

            <div style="display: flex; margin-top: 280px">
              <v-btn
                outlined
                @click="stepBack"
                type="button"
                class="form-back-btn back"
                elevation="0"
              >
                BACK
                <v-icon> mdi-chevron-right </v-icon>
              </v-btn>

              <v-spacer></v-spacer>
              <v-btn
                :loading="thisLoading"
                :disabled="invalid || thisLoading"
                type="submit"
                style="font-size: 14.26px; outline: none"
                color="primary"
                class="form-next-btn"
                elevation="0"
              >
                NEXT
                <v-icon> mdi-chevron-right </v-icon>
              </v-btn>
            </div>
          </form>
        </validation-observer>
      </v-card>
      <!-- <v-card class="py-5 px-10 mt-16" elevation="0" v-if="step === 3">
        <v-list-item-content class="mb-5">
          <v-list-item-title class="title">
            Upload your profile picture
          </v-list-item-title>
          <v-list-item-subtitle
            >Please upload a picture or <strong>skip</strong> this
            step</v-list-item-subtitle
          >
        </v-list-item-content>
        <validation-observer ref="observer">
          <form @submit.prevent="next">
            <v-row justify="center" class="ma-14">
              <div style="width: 150px" @click="$refs.file.click()">
                <v-badge icon="mdi-pencil" bottom overlap>
                  <v-avatar size="150">
                    <img
                      id="avatar"
                      :src="profileData.profilePic"
                      :alt="user.full_name"
                    /> </v-avatar
                ></v-badge>
              </div>
              image input: style is set to hidden and assigned a ref so that it can be triggered
              <input
                type="file"
                ref="file"
                :name="uploadFieldName"
                @change="onFileChange($event.target.name, $event.target.files)"
                style="display: none"
              />
            </v-row>

            <div style="display: flex; margin-top: 50px">
              <v-btn
                color="primary"
                @click="stepBack"
                class="back"
                type="button"
              >
                <span>
                  <v-icon dark> mdi-chevron-left </v-icon>
                </span>
                BACK
              </v-btn>

              <v-spacer></v-spacer>
              <v-btn
                :loading="loading"
                :disabled="loading"
                type="submit"
                style="font-size: 14.26px; outline: none"
                color="primary"
              >
                NEXT
                <span>
                  <v-icon icon="chevron-right" class="card-icons"></v-icon>
                </span>
              </v-btn>
            </div>
          </form>
        </validation-observer>
      </v-card> -->
      <v-card class="py-5 px-10 mt-16" elevation="0" v-if="step === 3">
        <v-list-item-content class="mb-5">
          <v-list-item-title
            class="display-1 font-weight-bold green--text text--lighten-1"
          >
            Next Of Kin
          </v-list-item-title>
        </v-list-item-content>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="next">
            <v-row justify="space-around">
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="Full Name"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="profileData.kinName"
                    :error-messages="errors"
                    label="Full Name"
                    required
                    outlined
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="profileData.kinEmail"
                    :error-messages="errors"
                    label="E-mail"
                    required
                    outlined
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <v-row justify="space-around">
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="phoneNumber"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="profileData.kinPhone"
                    :error-messages="errors"
                    label="Phone Number"
                    required
                    outlined
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="Relationship"
                  :rules="{
                    required: true
                  }"
                >
                  <v-select
                    v-model="profileData.relationship"
                    :items="relationships"
                    :error-messages="errors"
                    :label="profileData.relationship"
                    data-vv-name="select"
                    required
                    outlined
                  ></v-select>
                </validation-provider>
                <!-- <validation-provider
                  v-slot="{ errors }"
                  name="Address"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="profileData.kinAddress"
                    :error-messages="errors"
                    required
                    label="Address"
                    outlined
                  ></v-text-field>
                </validation-provider> -->
              </v-col>
            </v-row>

            <div style="display: flex; margin-top: 50px">
              <v-btn
                @click="stepBack"
                type="button"
                class="form-back-btn back"
                elevation="0"
              >
                BACK
                <v-icon> mdi-chevron-right </v-icon>
              </v-btn>

              <v-spacer></v-spacer>
              <v-btn
                :loading="thisLoading"
                :disabled="invalid || thisLoading"
                type="submit"
                style="font-size: 14.26px; outline: none"
                color="primary"
                elevation="0"
              >
                NEXT
                <v-icon> mdi-chevron-right </v-icon>
              </v-btn>
            </div>
          </form>
        </validation-observer>
      </v-card>
      <v-card class="py-5 px-10 mt-16" elevation="0" v-if="step === 4">
        <v-list-item-content class="mb-5">
          <v-list-item-title
            class="display-1 font-weight-bold green--text text--lighten-1"
          >
            Work And Income
          </v-list-item-title>
        </v-list-item-content>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="next">
            <v-row justify="space-around">
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="Occupation"
                  :rules="{
                    required: true
                  }"
                >
                  <v-select
                    v-model="profileData.occupation"
                    :items="occupations"
                    :error-messages="errors"
                    label="Select occupation"
                    item-text="name"
                    item-value="id"
                    data-vv-name="select"
                    required
                    outlined
                  ></v-select>
                </validation-provider>
              </v-col>
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="Net monthly income"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="profileData.monthlyIncome"
                    :error-messages="errors"
                    label="Net monthly income"
                    type="number"
                    required
                    outlined
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <v-row justify="space-around">
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="Sector"
                  :rules="{
                    required: true
                  }"
                >
                  <v-select
                    v-model="profileData.workSector"
                    :items="workSectors"
                    :error-messages="errors"
                    label="Select work sector"
                    item-text="name"
                    item-value="id"
                    data-vv-name="select"
                    required
                    outlined
                  ></v-select>
                </validation-provider>
              </v-col>
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="Work Address"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="profileData.workAddress"
                    :error-messages="errors"
                    required
                    label="Work Address"
                    outlined
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>
            <div style="display: flex; margin-top: 20px">
              <v-btn
                @click="stepBack"
                type="button"
                class="form-back-btn back"
                elevation="0"
              >
                BACK
                <v-icon> mdi-chevron-right </v-icon>
              </v-btn>

              <v-spacer></v-spacer>
              <v-btn
                :loading="thisLoading"
                :disabled="invalid || thisLoading"
                type="submit"
                style="font-size: 14.26px; outline: none"
                color="primary"
                elevation="0"
              >
                NEXT
                <v-icon> mdi-chevron-right </v-icon>
              </v-btn>
            </div>
          </form>
        </validation-observer>
      </v-card>

      <v-card class="py-5 px-10 mt-16" elevation="0" v-if="step === 5">
        <v-list-item-content class="mb-5">
          <v-list-item-title
            class="display-1 font-weight-bold green--text text--lighten-1"
          >
            Debit Card
          </v-list-item-title>
        </v-list-item-content>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="next">
            <div class="text-center pt-4">
              <p class="title">
                Click the button below to add a new repayment card, a fee of ₦5
                will be debited from your card
              </p>
              <div class="py-2 display-1">
                <!-- <h3>&#8358; {{ profileData.amount }}</h3> -->
              </div>

              <v-row>
                <v-col cols="12" sm="12" md="4" offset-md="4" class="mt-2">
                  <div class="d-flex flex-column align-center justify-center">
                    <paystack
                      :amount="100"
                      :email="$store.state.account.user.data.email"
                      :paystackkey="paystackkey"
                      :reference="reference"
                      :callback="callback"
                      :close="close"
                      :embed="false"
                      class="mx-2 px-4 white--text"
                    >
                      <v-img
                        height="113"
                        max-width="300"
                        :src="require('@/assets/card.png')"
                      >
                        <v-icon
                          color="white"
                          size="40"
                          class="fas fa-plus mt-4"
                        ></v-icon>
                        <p
                          class="pt-8"
                          style="text-align: center; font-size: 14px; font-weight: 600; color: #fff;"
                        >
                          Add new card
                        </p>

                        <v-img
                          max-height="30"
                          max-width="50"
                          :src="require('@/assets/mastercard.png')"
                          style="position: absolute; bottom: 10%; right: 5%"
                        ></v-img>
                      </v-img>
                    </paystack>
                  </div>
                </v-col>
              </v-row>
            </div>
            <div style="display: flex; margin-top: 50px">
              <v-btn
                @click="stepBack"
                type="button"
                class="form-back-btn back"
                elevation="0"
              >
                BACK
                <v-icon> mdi-chevron-right </v-icon>
              </v-btn>

              <v-spacer></v-spacer>
              <v-btn
                :loading="thisLoading"
                :disabled="invalid || thisLoading"
                type="submit"
                style="font-size: 14.26px; outline: none"
                color="primary"
                elevation="0"
              >
                NEXT
                <v-icon> mdi-chevron-right </v-icon>
              </v-btn>
            </div>
          </form>
        </validation-observer>
      </v-card>

      <v-card class="py-5 px-10 mt-16" elevation="0" v-if="step === 6">
        <v-list-item-content class="mb-5">
          <v-list-item-title
            class="display-1 font-weight-bold green--text text--lighten-1"
          >
            Account Information
          </v-list-item-title>
        </v-list-item-content>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="validateBank">
            <v-row justify="space-around">
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="BVN"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="profileData.bvn"
                    :error-messages="errors"
                    label="BVN"
                    required
                    outlined
                    type="number"
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col>
                <validation-provider
                  v-slot="{ errors }"
                  name="select"
                  :rules="{
                    required: true
                  }"
                >
                  <v-select
                    v-model="profileData.bankCode"
                    :items="banks"
                    :error-messages="errors"
                    label="Bank"
                    name="bank_name"
                    item-text="bank_name"
                    item-value="bank_code"
                    data-vv-name="banks"
                    required
                    outlined
                    @change="getBank"
                  ></v-select>
                </validation-provider>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="Account Number"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="profileData.accountNo"
                    :error-messages="errors"
                    label="Account Number"
                    required
                    outlined
                    type="number"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <div style="display: flex; margin-top: 20px">
              <v-btn
                @click="stepBack"
                type="button"
                class="form-back-btn back"
                elevation="0"
              >
                BACK
                <v-icon> mdi-chevron-right </v-icon>
              </v-btn>

              <v-spacer></v-spacer>
              <v-btn
                :loading="loading"
                :disabled="invalid || loading"
                @click="applyNow"
                style="font-size: 14.26px; outline: none"
                color="primary"
                elevation="0"
              >
                Apply
                <span>
                  <v-icon icon="chevron-right" class="card-icons"></v-icon>
                </span>
              </v-btn>
            </div>
          </form>
        </validation-observer>
      </v-card>

      <v-card class="py-5 px-10 mt-16" elevation="0" v-if="step === 7">
        <div class="text-center p-5">
          <div class="success-image">
            <v-img
              alt="SUCCESS"
              contain
              height="300"
              :src="require('../assets/finishloan.png')"
              transition="scale-transition"
              width="auto"
            />
          </div>
          <v-list-item-content class="mb-5">
            <v-list-item-title class="title">
              Application successful
            </v-list-item-title>
            <v-list-item-subtitle
              >Your application has been sent successfully and is currently
              under review.</v-list-item-subtitle
            >
          </v-list-item-content>
        </div>

        <div style="display: flex; margin-top: 50px" justify="center">
          <v-spacer></v-spacer>
          <v-btn
            to="/"
            style="font-size: 14.26px; outline: none"
            color="primary"
          >
            Go to dashboard
            <span>
              <v-icon icon="chevron-right" class="card-icons"></v-icon>
            </span>
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import { authHeader } from "@/_helpers/auth-header";
import { mapState, mapActions } from "vuex";
import Vue from "vue";
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";
import paystack from "vue-paystack";
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
  name: "Loan",
  components: {
    ValidationProvider,
    ValidationObserver,
    paystack
  },
  data: () => ({
    relationships: [
      "Brother",
      "Sister",
      "Spouse",
      "Sibling",
      "Child",
      "Relative",
      "Friend"
    ],

    paystackkey: "pk_live_6bd665db887a196cda5b93ab85551c20990cfe07", //"pk_test_564016ad5c85950dbb2af2e6a14957faa89adb28", //paystack public key
    thisLoading: false,
    manageType: 1,
    interestType: 1,
    walletFundType: false,
    installments: 0,
    errorDialog: false,
    uploadFieldName: "file",
    maxSize: 1024,
    saveBtn: false,
    avatar: "",
    saving: false,
    saved: false,
    files: [],
    thisError: false,
    thisSuccess: false,
    thisMessage: "",
    step: 0,
    profileData: {
      // fullName: "",
      duration: 0,
      amount: 0,
      fullName: "",
      firstName: "",
      lastName: "",
      email: "",
      profilePic: "",
      phone: "",
      dob: "",
      age: "",
      gender: "",
      residentType: "",
      homeAddress: "",
      state: "",
      lga: "",
      maritalStatus: "",
      employmenyStatus: "",
      jobSector: "",
      companyName: "",
      monthlyIncome: "",
      workAddress: "",
      bvn: "",
      kinName: "",
      kinFirstName: "",
      kinLastName: "",
      kinEmail: "",
      kinPhone: "",
      kinAddress: "",
      relationship: "",
      password: "",
      confirmPassword: "",
      noOfYears: "",
      designation: "",
      designationText: "",
      workSector: "",
      workSectorText: "",
      occupation: "",
      startYear: "",
      officialEmail: "",
      bankCode: "",
      bankId: "",
      accountNo: "",
      userId: "",
      bankStatement: false,
      bankStatementFile: "",
      validId: false,
      validIdFile: "",
      utility: false,
      utilityFile: ""
    }
  }),
  props: {
    // Use "value" here to enable compatibility with v-model
    value: Object
  },
  watch: {
    loanSuccess: function() {
      this.step++;
    }
  },
  mounted() {
    // console.log(this.user.user_id);
  },
  created() {
    //comment
    this.getUserDetail();
    this.getBankAccounts();
    this.getWallet();
    this.getStates();
    this.getOccupations();
    this.getWorkSectors();
  },

  computed: {
    ...mapState("loanMenu", ["showLoanMenu"]),
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
    ]),
    ...mapState("banks", [
      "userDetails",
      "loading",
      "banks",
      "cards",
      "wallet",
      "bankAccounts",
      "error",
      "success",
      "message"
    ]),
    ...mapState("general", [
      "residentTypes",
      "states",
      "lgas",
      "maritalStatuses",
      "workSectors",
      "genders",
      "occupations",
      "designations"
    ]),
    ...mapState("investments", ["invLoading", "InvestmentSuccess"]),
    ...mapState("loans", ["lnLoading", "loanSuccess"]),
    reference() {
      let text = "";
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },

  methods: {
    setInstallments() {
      if (this.profileData.duration > 0 && this.profileData.amount > 0) {
        const num = this.profileData.amount / this.profileData.duration;
        if (num > 5) {
          this.installments = Math.round((num + Number.EPSILON) * 100) / 100;
        } else {
          this.installments = 5;
        }
      }
    },
    ...mapActions("loanMenu", [
      "setLoanMenu",
      "setViewedLoanPages",
      "setCurrentLoanPage",
      "setResetData"
    ]),
    ...mapActions("account", [
      "login",
      "logout",
      "changePassword",
      "updateProfile",
      "verifyBvn",
      "validateBvn",
      "getUserDetails"
    ]),
    ...mapActions("general", [
      "getResidentTypes",
      "getStates",
      "getLgas",
      "getMaritalStatus",
      "getWorkSectors",
      "getGenders",
      "getOccupations",
      "getDesignations"
    ]),
    ...mapActions("banks", [
      "resolveBankAccount",
      "saveBankAccount",
      "saveCard",
      "initialiseCard",
      "getBankAccounts",
      "getCards",
      "getWallet",
      "withdrawFunds",
      "fundWallet"
    ]),
    ...mapActions("loans", ["loanApply"]),

    callback: function(response) {
      if (response.status == "success") {
        const ref = response.trxref;
        this.fundWallet({ ref });
      } else {
        alert("Something went wrong! Please try again");
      }
    },
    close: function() {
      console.log("Payment closed");
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
    getBank() {
      const bank = this.$store.state.banks.banks.find(bank => {
        return bank.bank_code == this.profileData.bankCode;
      });
      this.profileData.bankId = bank.bank_id;
      console.log(this.profileData.bankId);
    },

    async handleFileChange(fieldName, file) {
      const imageFile = file;
      console.log(imageFile);
      //check if user actually selected a file
      // Append file into FormData & turn file into image URL
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("user_id", this.user.user_id);
      formData.append("doctype", fieldName);
      formData.append("doctype_", undefined);
      const requestOptions = {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
          "x-api-key":
            "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
        },
        body: formData
      };
      const response = await fetch(
        "https://mobile.creditclan.com/webapi/v1/uploadFile",
        requestOptions
      );
      const data = await response.json();
      if (data.status) {
        if (fieldName == "bank_statement") {
          this.profileData.bankStatement = true;
          this.profileData.bankStatementFile = data.data.upload_data.file_name;
        }
        if (fieldName == "valid_id") {
          this.profileData.validId = true;
          this.profileData.validIdFile = data.data.upload_data.file_name;
        }
        if (fieldName == "utility") {
          this.profileData.utility = true;
          this.profileData.utilityFile = data.data.upload_data.file_name;
        }
        this.thisMessage = "File uploaded successfully";
        this.thisSuccess = true;
      }
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
            const userName = userData.profile.legal_name.split(" ");
            const userProfile = userData.profile;
            const kinProfile = userData.next_of_kin;
            const kinName = kinProfile.nok_name
              ? kinProfile.nok_name.split(" ")
              : ["", ""];
            // this.profileData.fullName = userData.profile.legal_name;
            this.profileData.firstName = userName[0];
            this.profileData.lastName = userName[1];
            this.profileData.fullName = userName[0] + " " + userName[1];
            this.profileData.email = userProfile.email;
            this.profileData.profilePic = userProfile.file_name;
            this.profileData.phone = userProfile.phone;
            this.profileData.dob = userProfile.date_of_birth;
            this.profileData.age = userProfile.age;
            this.profileData.gender = userProfile.gender;
            this.profileData.residentType =
              userData.home_address.nature_of_accomodation;
            this.profileData.homeAddress = userData.home_address.home_address;
            this.profileData.state = userData.home_address.home_state;
            this.profileData.lga = userData.home_address.home_lga;
            this.profileData.maritalStatus = userProfile.marital_status;
            this.profileData.jobSector = userData.work.work_sector;
            this.profileData.companyName = userData.work.company_name;
            this.profileData.monthlyIncome = userData.work.net_monthly_income;
            this.profileData.workAddress = userData.work.work_address;
            this.profileData.bvn = userProfile.bvn;
            this.profileData.kinName = kinProfile.nok_name;
            this.profileData.kinFirstName = kinName[0];
            this.profileData.kinLastName = kinName[1];
            this.profileData.kinEmail = kinProfile.nok_email;
            this.profileData.kinPhone = kinProfile.nok_phone;
            this.profileData.kinAddress = kinProfile.nok_address;
            this.profileData.relationship = kinProfile.nok_relationship;
            this.profileData.noOfYears = userData.home_address.resident_years;
            this.profileData.designation = userData.work.designation_id;
            this.profileData.designationText = userData.work.designation_text;
            this.profileData.workSector = userData.work.work_sector;
            this.profileData.workSectorText = userData.work.work_sector_text;
            this.profileData.occupation = userData.work.occupation_id;
            this.profileData.startYear = userData.work.start_year;
            this.profileData.officialEmail = userData.work.official_email;
            this.profileData.userId = response.data.data.people_id;
            this.getLga(userData.home_address.home_state);
            this.overlay = false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getLga(stateId) {
      return this.getLgas({ stateId });
    },
    verifyBvnNo() {
      const bvn = this.profileData.bvn;
      // console.log(bvn);
      return this.verifyBvn(bvn);
    },
    stepBack() {
      this.step--;
      this.setViewedLoanPages({ pageNumber: this.step + 5 });
      this.setCurrentLoanPage({ pageNumber: this.step + 4 });
    },

    async next() {
      const validate = this.$refs.observer.validate();
      validate.then(valid => {
        if (valid) {
          if (
            this.profileData.amount < 100000 ||
            this.profileData.amount > 5000000
          ) {
            this.thisMessage =
              "Amount must be at least 100000 and not more than 5000000";
            this.thisError = true;
          } else {
            this.setViewedLoanPages({ pageNumber: this.step + 5 });
            this.setCurrentLoanPage({ pageNumber: this.step + 5 });
            if (this.step === 8) return;
            this.step++;
          }
        } else {
          this.thisMessage = "Please fill in all fields";
          this.thisError = true;
        }
      });
    },

    async validateBank() {
      const validate = this.$refs.observer.validate();
      const accountNo = this.profileData.accountNo;
      const bankCode = this.profileData.bankCode;
      validate.then(valid => {
        if (valid) {
          this.thisLoading = true;
          axios
            .post(
              "https://mobile.creditclan.com/api/v3/user/account/resolve",
              {
                token: authHeader(),
                // eslint-disable-next-line @typescript-eslint/camelcase
                account_number: accountNo,
                // eslint-disable-next-line @typescript-eslint/camelcase
                bank_code: bankCode
              },
              {
                headers: {
                  "x-api-key":
                    "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
                }
              }
            )
            .then(res => {
              this.thisLoading = false;
              if (res.data.status) {
                this.thisSuccess = true;
                this.thisMessage = res.data.message;
                // this.profileData.fullName = res.data.data.account_name;
                this.step++;
              } else {
                this.thisMessage = res.data.message;
                this.thisError = true;
              }
            })
            .catch(error => {
              this.thisLoading = false;
              this.thisMessage = error;
              this.thisError = true;
            });
        }
      });
    },
    async applyNow() {
      const validate = this.$refs.observer.validate();
      validate.then(valid => {
        if (valid) {
          this.loanApply({ data: this.profileData });
        } else {
          this.thisMessage = "Please fill in all fields";
          this.thisError = true;
        }
      });
    },

    async onFileChange(fieldName, file) {
      const { maxSize } = this;
      const imageFile = file[0];

      //check if user actually selected a file
      if (file.length > 0) {
        const size = imageFile.size / maxSize / maxSize;
        if (!imageFile.type.match("image.*")) {
          // check whether the upload is an image
          this.thisError = true;
          this.thisMessage = "Please choose an image file";
        } else if (size > 1) {
          // check whether the size is greater than the size limit
          this.thisError = true;
          this.thisMessage =
            "Your file is too big! Please select an image under 1MB";
        } else {
          // Append file into FormData & turn file into image URL
          const formData = new FormData();
          this.profileData.profilePic = URL.createObjectURL(imageFile);
          this.saveBtn = true;
          // console.log(imageFile);
          formData.append("file", imageFile);
          formData.append("token", authHeader());
          // const imageURL = URL.createObjectURL(imageFile);
          // this.$emit("input", { formData, imageURL });
          // Emit FormData & image URL to the parent component
          // this.$emit("input", { formData, this.avatar.imageURL });
          const requestOptions = {
            method: "POST",
            headers: {
              // "Content-Type": "multipart/form-data",
              "x-api-key":
                "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
            },
            body: formData
          };
          const response = await fetch(
            "https://mobile.creditclan.com/api/v3/customer/upload/picture",
            requestOptions
          );
          const data = await response.json();
          this.getUserDetails();
          // this.postId = data.id;
          console.log(data);
        }
      }
    },
    async uploadImage() {
      this.saving = true;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-keys":
            "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
        },
        body: JSON.stringify({
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJQRU9QTEVfSUQiOiIxMDQxMjMiLCJFTUFJTCI6Im9rdW51Z2Eub3JpeW9taUBnbWFpbC5jb20iLCJMRU5ERVJfSUQiOiI0MDAyMiJ9.W4ZT76eq1TFrJ7J-GnZHEkmioKnsL9OH95Gurrb6CU"
          // file: this.$refs.file.files
        })
      };
      const response = await fetch(
        "https://mobile.creditclan.com/api/v3/customer/upload/picture",
        requestOptions
      );
      const data = await response.json();
      this.savedAvatar();
    },
    async uploadDocs(file, doctype) {
      axios.post(
        "https://mobile.creditclan.com/webapi/v1/uploadFile",
        { token: authHeader() },
        {
          headers: {
            "x-api-key":
              "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
          }
        }
      );
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-keys":
            "xIpuUk5JY1gnePohE2qOei0WRMkbwdEzZ9LQDVDpHjWaHvy8qtlSAFwvOTfGzric"
        },
        body: JSON.stringify({
          file: file,
          doctype: doctype,
          // eslint-disable-next-line @typescript-eslint/camelcase
          user_id: this.user.user_id,
          doctype_: ""
        })
      };
      const response = await fetch(
        "https://mobile.creditclan.com/webapi/v1/uploadFile",
        requestOptions
      );
      const data = await response.json();
      // this.postId = data.id;
      console.log(data);
      this.savedAvatar();
    },
    savedAvatar() {
      this.saving = false;
      this.saved = true;
    }
  },
  beforeMount() {
    this.initialiseCard();
    this.setLoanMenu(true);
    console.log("beforeMount");
    console.log(this.showLoanMenu);
  },
  destroyed() {
    this.setLoanMenu();
    this.setResetData();
    console.log("destroyed");
    console.log(this.showLoanMenu);
  }
});
</script>
<style scoped>
/* form */
.text-danger {
  color: #cc3639;
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
input,
select,
textarea {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
input {
  width: calc(100% - 10px);
  padding: 10px;
  cursor: pointer;
}
select {
  width: 100%;
  padding: 10px;
  background: transparent;
}
textarea {
  width: calc(100% - 12px);
  padding: 5px;
}
.item:hover p,
.item:hover label,
.item:hover i,
.question:hover p,
.question label:hover,
input:hover::placeholder {
  color: #63c132;
}
.item input:hover,
.item select:hover,
.item textarea:hover {
  border: 1px solid transparent;
  box-shadow: 0 0 8px 0 #8ebf42;
  color: #8ebf42;
}
.item {
  position: relative;
  margin: 10px 0;
}
input[type="date"]::-webkit-inner-spin-button {
  display: none;
}
.item i,
input[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  font-size: 20px;
  color: #a9a9a9;
}
.item i {
  right: 8%;
  top: 33px;
  z-index: 1;
}
[type="date"]::-webkit-calendar-picker-indicator {
  right: 1%;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
}
input[type="radio"] {
  width: 0;
  visibility: hidden;
}
label.radio {
  position: relative;
  display: inline-block;
  margin: 5px 20px 25px 0;
  cursor: pointer;
}
.question {
  width: 50%;
}
.question span {
  margin-left: 30px;
}
label.radio:before {
  content: "";
  position: absolute;
  left: 0;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #8ebf42;
}
label.radio:after {
  content: "";
  position: absolute;
  width: 8px;
  height: 4px;
  top: 6px;
  left: 5px;
  background: transparent;
  border: 3px solid #8ebf42;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  opacity: 0;
}
input[type="radio"]:checked + label:after {
  opacity: 1;
}
.btn-block {
  margin-top: 10px;
  text-align: left;
}

.upload-card {
  border: 2px solid var(--v-primary-lighten1) !important;
  margin: 0px auto;
  height: 150px;
  width: 300px;
  border-radius: 8px;
}

.form-next-btn {
  text-align: left;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #fff !important;
  cursor: pointer;
  background: #63c132;
}

.form-back-btn {
  background: #fff;
  text-align: left;
  padding: 10px;
  border: 1px solid #757373;
  border-radius: 5px;
  font-size: 16px;
  color: #504e4e !important;
  cursor: pointer;
}

form button span {
  padding-left: 15px;
}

form h4 {
  color: #6d6d6d;
  font-weight: 500;
  margin: 0 0 20px;
  font-size: 15px;
}
form p {
  font-size: 10px;
  margin-top: -24px;
}

form .upload-image {
  height: 100px;
  width: 100px;
  border: 2px solid #63c132;
  border-radius: 50%;
  margin: 30px 0;
  color: #63c132;
}

form .upload-image span i {
  margin: 72% 0 0 78%;
  font-size: 20px;
  transform: rotate(15deg);
}
@media (min-width: 568px) {
  .name-item,
  .contact-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .name-item input {
    width: calc(50% - 20px);
  }
  /* .city-item select {
    width: calc(50% - 8px);
  } */
  .contact-item .item {
    width: calc(50% - 8px);
  }
  .contact-item input {
    width: calc(100% - 12px);
  }
}

@media (max-width: 960px) {
  .wrapper {
    padding: 0;
  }
}
</style>
