<template>
  <v-container class="profile" fluid>
    <v-overlay class="justify-center" :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
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
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="error = false">
          Close
        </v-btn>
      </template>
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
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="success = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <div class="wrapper">
      <v-container>
        <Tabs>
          <Tab name="Profile" selected="true">
            <!-- <div class="upload-image">
                    <span>
                      <i class="fas fa-pencil-alt"></i>
                    </span>
                  </div> -->

            <v-row justify="center" v-if="step == 0">
              <v-col cols="12" md="3" sm="12" class="mx-auto">
                <div style="width:150px;" @click="$refs.file.click()">
                  <v-badge icon="mdi-pencil" bottom overlap>
                    <v-avatar size="150">
                      <img
                        id="avatar"
                        :src="profileData.profilePic"
                        :alt="user.full_name"
                      /> </v-avatar
                  ></v-badge>
                </div>
                <!-- image input: style is set to hidden and assigned a ref so that it can be triggered -->
                <input
                  type="file"
                  ref="file"
                  :name="uploadFieldName"
                  @change="
                    onFileChange($event.target.name, $event.target.files)
                  "
                  style="display:none"
                />
              </v-col>
              <v-col cols="12" md="8" sm="12">
                <v-card flat>
                  <v-card-title>
                    <span class="headline" style="font-weight: bold;"
                      >Bio Information</span
                    >

                    <v-spacer></v-spacer>

                    <v-btn
                      @click="step = 1"
                      class="ma-2"
                      outlined
                      color="indigo"
                    >
                      <v-icon>mdi-pencil</v-icon>
                      Edit
                    </v-btn>
                  </v-card-title>

                  <v-list>
                    <v-list-item>
                      <v-list-item-title color="grey">Name</v-list-item-title>

                      <v-list-item-title>
                        {{ profileData.fullName }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                      <v-list-item-title color="grey">Bio</v-list-item-title>

                      <v-list-item-title>
                        {{ profileData.gender == 0 ? "Male" : "Female" }} ||
                        {{ profileData.age }} years old
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title color="grey"
                        >Contact</v-list-item-title
                      >

                      <v-list-item-title>
                        {{ profileData.phone }} ||
                        {{ profileData.email }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title color="grey"
                        >Address</v-list-item-title
                      >

                      <v-list-item-title>
                        {{ profileData.homeAddress }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                  </v-list>
                </v-card>
                <v-card flat>
                  <v-card-title>
                    <span class="headline" style="font-weight: bold;"
                      >Work Summary</span
                    >

                    <v-spacer></v-spacer>

                    <v-btn
                      @click="step = 2"
                      class="ma-2"
                      outlined
                      color="indigo"
                    >
                      <v-icon>mdi-pencil</v-icon>
                      Edit
                    </v-btn>
                  </v-card-title>

                  <v-list>
                    <v-list-item>
                      <v-list-item-title color="grey"
                        >Company</v-list-item-title
                      >

                      <v-list-item-title>
                        {{ profileData.companyName }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                      <v-list-item-title color="grey"
                        >Sector / Role</v-list-item-title
                      >

                      <v-list-item-title>
                        {{ profileData.workSectorText }} ||
                        {{ profileData.designationText }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title color="grey"
                        >Work Address</v-list-item-title
                      >

                      <v-list-item-title>
                        {{ profileData.workAddress }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title color="grey"
                        >Work Email</v-list-item-title
                      >

                      <v-list-item-title>
                        {{ profileData.officialEmail }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title color="grey"
                        >Start Year</v-list-item-title
                      >

                      <v-list-item-title>
                        {{ new Date(profileData.startYear).toDateString() }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                  </v-list>
                </v-card>
                <v-card flat>
                  <v-card-title>
                    <span class="headline" style="font-weight: bold;"
                      >NOK Information</span
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                      @click="step = 3"
                      class="ma-2"
                      outlined
                      color="indigo"
                    >
                      <v-icon>mdi-pencil</v-icon>
                      Edit
                    </v-btn>
                  </v-card-title>

                  <v-list>
                    <v-list-item>
                      <v-list-item-title color="grey">Name</v-list-item-title>

                      <v-list-item-title>
                        {{ profileData.kinName }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item>
                      <v-list-item-title color="grey">Email</v-list-item-title>

                      <v-list-item-title>
                        {{ profileData.kinEmail }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title color="grey"
                        >Address</v-list-item-title
                      >

                      <v-list-item-title>
                        {{ profileData.kinAddress }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title color="grey">Phone</v-list-item-title>

                      <v-list-item-title>
                        {{ profileData.kinPhone }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-title color="grey"
                        >Relationship</v-list-item-title
                      >

                      <v-list-item-title>
                        {{ profileData.relationship }}
                      </v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>
                  </v-list>
                </v-card>
              </v-col>
              <!-- <v-col cols="12" md="8" sm="12">
               
              </v-col>
              <v-col cols="12" md="8" sm="12">
               
              </v-col> -->
            </v-row>
            <!-- <v-row justify="center" v-if="step == 0">
              
            </v-row>
            <v-row justify="center" v-if="step == 0">
             
            </v-row> -->
            <ValidationObserver ref="observer">
              <form @submit.prevent="updateProfil">
                <div class="mt-5" v-if="step === 1">
                  <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="First Name"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>First Name</label>
                        <input
                          disabled
                          v-model="profileData.firstName"
                          type="text"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>

                    <div class="item">
                      <ValidationProvider
                        name="Last Name"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Last Name</label>
                        <input
                          disabled
                          v-model="profileData.lastName"
                          type="text"
                          name="name"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="Date of Birth"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Date of Birth</label>
                        <input
                          v-model="profileData.dob"
                          type="date"
                          name="bdate"
                        />
                        <i class="fas fa-calendar-alt"></i>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="item">
                      <ValidationProvider
                        name="Marital Status"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label>Marital Status</label>
                        <select
                          v-if="maritalStatuses.length > 0"
                          v-model="profileData.maritalStatus"
                          name="name"
                        >
                          <option value="">Select</option>
                          <option
                            v-for="(option, index) in maritalStatuses"
                            :key="index"
                            v-bind:value="option.id"
                          >
                            {{ option.name }}
                          </option>
                        </select>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="question">
                    <div class="question-answer">
                      <ValidationProvider
                        name="Gender"
                        rules="required"
                        v-slot="{ errors }"
                        v-if="genders.length > 0"
                      >
                        <label style="margin-right: 30px;">Gender</label>
                        <input
                          type="radio"
                          :value="genders[0].id"
                          :id="genders[0].name"
                          name="gender"
                          v-model="profileData.gender"
                        />
                        <label :for="genders[0].name" class="radio"
                          ><span>{{ genders[0].name }}</span></label
                        >
                        <input
                          type="radio"
                          :value="genders[1].id"
                          :id="genders[1].name"
                          name="gender"
                          v-model="profileData.gender"
                        />
                        <label :for="genders[1].name" class="radio"
                          ><span>{{ genders[1].name }}</span></label
                        >
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <!-- <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="Phone Number"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Phone Number</label>
                        <input
                          v-model="profileData.phone"
                          type="number"
                          name="name"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div> 
                    <div class="item">
                      <ValidationProvider
                        name="Date of Birth"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label>Date of Birth</label>
                        <input
                          v-model="profileData.dob"
                          type="date"
                          name="bdate"
                        />
                        <i class="fas fa-calendar-alt"></i>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>-->
                  <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="State of residence"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label>State of Residence</label>
                        <select
                          v-if="states.length > 0"
                          @change="getLga(profileData.state)"
                          v-model="profileData.state"
                          name="name"
                        >
                          <option value="">Select</option>
                          <option
                            v-for="(option, index) in states"
                            :key="index"
                            v-bind:value="option.id"
                          >
                            {{ option.name }}
                          </option>
                        </select>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="item">
                      <ValidationProvider
                        name="Local Government of Residence"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label>Local Government of Residence</label>
                        <select
                          v-if="lgas.length > 0"
                          v-model="profileData.lga"
                          name="name"
                        >
                          <option value="">Select</option>
                          <option
                            v-for="(option, index) in lgas"
                            :key="index"
                            v-bind:value="option.id"
                          >
                            {{ option.name }}
                          </option>
                        </select>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="Number of years in resident"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label>Number of Years in Resident</label>
                        <input
                          v-model="profileData.noOfYears"
                          type="number"
                          name="name"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>

                    <div class="item">
                      <ValidationProvider
                        name="Home Address"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Home Address</label>
                        <textarea
                          rows="3"
                          v-model="profileData.homeAddress"
                        ></textarea>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>

                  <div class="btn-block">
                    <v-btn
                      :loading="loading"
                      :disabled="loading"
                      @click="submitFirst"
                      type="button"
                      style="font-size: 14.26px; outline: none"
                      color="primary"
                    >
                      SAVE CHANGES
                      <span>
                        <v-icon
                          icon="chevron-right"
                          class="card-icons"
                        ></v-icon>
                      </span>
                    </v-btn>
                  </div>
                </div>
                <div class="mt-5" v-if="step === 2">
                  <h4>Work details</h4>
                  <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="Resident Type"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label>Occupation</label>
                        <select
                          v-if="occupations.length > 0"
                          v-model="profileData.occupation"
                          name="name"
                        >
                          <option value="">Select</option>
                          <option
                            v-for="(option, index) in occupations"
                            :key="index"
                            v-bind:value="option.id"
                          >
                            {{ option.name }}
                          </option>
                        </select>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="item">
                      <ValidationProvider
                        name="Work Sector"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label>Work Sector</label>
                        <select
                          v-if="workSectors.length > 0"
                          v-model="profileData.workSector"
                          name="name"
                        >
                          <option value="">Select</option>
                          <option
                            v-for="(option, index) in workSectors"
                            :key="index"
                            v-bind:value="option.id"
                          >
                            {{ option.name }}
                          </option>
                        </select>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="Net Monthly Income"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label>Net monthly income</label>
                        <input
                          v-model="profileData.monthlyIncome"
                          type="number"
                          name="name"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="item">
                      <ValidationProvider
                        name="Company Name"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Company Name</label>
                        <input
                          v-model="profileData.companyName"
                          type="text"
                          name="name"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="Start Date"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label>Start Date</label>
                        <input
                          v-model="profileData.startYear"
                          type="date"
                          name="name"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="item">
                      <ValidationProvider
                        name="Work Email"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Work Email</label>
                        <input
                          v-model="profileData.officialEmail"
                          type="email"
                          name="name"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="Work Address"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Work Address</label>
                        <textarea
                          rows="3"
                          v-model="profileData.workAddress"
                        ></textarea>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="item">
                      <ValidationProvider
                        name="Designation"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <label>Designation</label>
                        <select
                          v-if="designations.length > 0"
                          v-model="profileData.designation"
                          name="name"
                        >
                          <option value="">Select</option>
                          <option
                            v-for="(option, index) in designations"
                            :key="index"
                            v-bind:value="option.id"
                          >
                            {{ option.name }}
                          </option>
                        </select>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>

                  <!-- <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="Phone Number"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Phone Number</label>
                        <input
                          v-model="profileData.kinPhone"
                          type="number"
                          name="name"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="item">
                      <ValidationProvider
                        name="Relationship"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Relationship</label>
                        <input
                          v-model="profileData.relationship"
                          type="text"
                          name="name"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div> -->
                  <div style="display: flex; margin-top: 50px">
                    <v-btn
                      color="primary"
                      @click="step = step - 1"
                      class="back"
                      type="button"
                    >
                      BACK

                      <span>
                        <v-icon dark>
                          mdi-chevron-right
                        </v-icon>
                      </span>
                    </v-btn>

                    <v-spacer></v-spacer>
                    <v-btn
                      :loading="loading"
                      :disabled="loading"
                      @click="submitSecond"
                      type="button"
                      style="font-size: 14.26px; outline: none"
                      color="primary"
                    >
                      SAVE CHANGES
                      <span>
                        <v-icon
                          icon="chevron-right"
                          class="card-icons"
                        ></v-icon>
                      </span>
                    </v-btn>
                  </div>
                </div>
                <div class="mt-5" v-if="step === 3">
                  <h4>Next of kin details</h4>
                  <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="First Name"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>First Name</label>
                        <input
                          v-model="profileData.kinFirstName"
                          type="text"
                          name="name"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="item">
                      <ValidationProvider
                        name="Last Name"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Last Name</label>
                        <input
                          v-model="profileData.kinLastName"
                          type="text"
                          name="name"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="Email Address"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Email Address</label>
                        <input
                          v-model="profileData.kinEmail"
                          type="email"
                          name="email"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="item">
                      <ValidationProvider
                        name="Phone Number"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Phone Number</label>
                        <input
                          v-model="profileData.kinPhone"
                          type="number"
                          name="name"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>

                  <div class="contact-item">
                    <div class="item">
                      <ValidationProvider
                        name="Relationship"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Relationship</label>
                        <input
                          v-model="profileData.relationship"
                          type="text"
                          name="name"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="item">
                      <ValidationProvider
                        name="Address"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>Address</label>
                        <textarea
                          rows="3"
                          v-model="profileData.kinAddress"
                        ></textarea>
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div style="display: flex; margin-top: 50px">
                    <v-btn
                      color="primary"
                      @click="step = step - 1"
                      class="back"
                      type="button"
                    >
                      BACK

                      <span>
                        <v-icon dark>
                          mdi-chevron-right
                        </v-icon>
                      </span>
                    </v-btn>

                    <v-spacer></v-spacer>
                    <v-btn
                      :loading="loading"
                      :disabled="loading"
                      type="submit"
                      style="font-size: 14.26px; outline: none"
                      color="primary"
                      class="text-right"
                    >
                      SAVE CHANGES
                      <span>
                        <v-icon
                          icon="chevron-right"
                          class="card-icons"
                        ></v-icon>
                      </span>
                    </v-btn>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </Tab>
          <Tab name="Security">
            <ValidationObserver ref="observer">
              <form
                @submit.prevent="
                  updateProfil();
                  validateBvn({ otp: profileData.otp, txnRef: txnRef });
                "
              >
                <div v-if="bvnStep === 1">
                  <div class="contact-item">
                    <div class="item" style="margin: 25px 0">
                      <ValidationProvider
                        name="Bvn"
                        rules="required|min:3"
                        v-slot="{ errors }"
                      >
                        <label>BVN</label>
                        <input
                          disabled
                          type="number"
                          v-model="profileData.bvn"
                          name="number"
                          required
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </form>
              <form @submit.prevent="changePasswords">
                <h4 class="mt-5">Change password</h4>
                <div class="contact-item">
                  <div class="item">
                    <ValidationProvider
                      name="Password"
                      rules="min:6"
                      v-slot="{ errors }"
                    >
                      <label>New Password</label>
                      <input v-model="profileData.password" type="password" />
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="item">
                    <ValidationProvider
                      name="Confirm Password"
                      rules="min:6"
                      v-slot="{ errors }"
                    >
                      <label>Repeat New Password</label>
                      <input
                        v-model="profileData.confirmPassword"
                        type="password"
                      />
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
                <div class="btn-block">
                  <v-btn
                    :loading="loading"
                    :disabled="loading"
                    type="submit"
                    style="font-size: 14.26px; outline: none"
                    color="primary"
                  >
                    Save Changes

                    <span>
                      <v-icon dark>
                        mdi-chevron-right
                      </v-icon>
                    </span>
                  </v-btn>
                </div>
              </form>
            </ValidationObserver>
          </Tab>
        </Tabs>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import { authHeader } from "@/_helpers/auth-header";
import { mapState, mapActions } from "vuex";
import Vue from "vue";
import Tab from "./components/Tabs/Tab.vue";
import Tabs from "./components/Tabs/Tabs.vue";
import {
  ValidationProvider,
  ValidationObserver
} from "vee-validate/dist/vee-validate.full";
import axios from "axios";
export default Vue.extend({
  name: "Profile",
  components: {
    Tab,
    Tabs,
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    errorDialog: false,
    errorText: "",
    uploadFieldName: "file",
    maxSize: 1024,
    saveBtn: false,
    avatar: "",
    saving: false,
    saved: false,
    files: [],
    tab: null,
    tabItems: ["Profile", "Security"],
    errorMessages: "",
    name: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    formHasErrors: false,
    step: 0,
    profileData: {
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
      officialEmail: ""
    }
  }),
  props: {
    // Use "value" here to enable compatibility with v-model
    value: Object
  },
  watch: {
    name() {
      this.errorMessages = "";
    }
  },
  mounted() {
    //mouned event
    // console.log(this.userData);
  },
  created() {
    //comment
    this.getUserDetail();
    this.getResidentTypes();
    this.getStates();
    this.getMaritalStatus();
    this.getWorkSectors();
    this.getGenders();
    this.getOccupations();
    this.getDesignations();
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
    form() {
      return {
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country
      };
    }
  },

  methods: {
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
    getLga(stateId) {
      return this.getLgas({ stateId });
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
            this.profileData.fullName = userData.profile.legal_name;
            this.profileData.firstName = userName[0];
            this.profileData.lastName = userName[1];
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
            this.getLga(userData.home_address.home_state);
            this.overlay = false;
          }
        })
        .catch(error => {
          // this.loading = false;
          // this.error = true;
          // this.message = error;
          console.log(error);
        });
    },
    verifyBvnNo() {
      const bvn = this.profileData.bvn;
      console.log(bvn);
      // return this.verifyBvn(bvn);
    },
    async submitFirst() {
      const valid = this.$refs.observer.validate();
      if (this.profileData.firstName) {
        if (!valid) return;
        // this.loading = true;
        this.step++;
      } else {
        // this.loading = true;
      }
    },

    async submitSecond() {
      const valid = this.$refs.observer.validate();

      if (this.profileData.firstName) {
        if (!valid) return;

        this.step++;
      } else {
        // this.loading = true;
        // this.$store.commit("changeUserType", this.userType);
      }
    },
    async updateProfil() {
      const valid = this.$refs.observer.validate();
      if (this.profileData.firstName) {
        if (!valid) return;
        const legalName =
          this.profileData.firstName + " " + this.profileData.lastName;
        const dob = this.profileData.dob;
        const gender = this.profileData.gender;
        const maritalStatus = this.profileData.maritalStatus;
        const homeAddress = this.profileData.homeAddress;
        const homeState = this.profileData.state;
        const homeLga = this.profileData.lga;
        const noOfYears = this.profileData.noOfYears;
        const occupation = this.profileData.occupation;
        const workSector = this.profileData.workSector;
        const monthlyIncome = this.profileData.monthlyIncome;
        const companyName = this.profileData.companyName;
        const workAddress = this.profileData.workAddress;
        const startYear = this.profileData.startYear;
        const designation = this.profileData.designation;
        const officialEmail = this.profileData.officialEmail;
        const nokName =
          this.profileData.kinFirstName + " " + this.profileData.kinLastName;
        const nokEmail = this.profileData.kinEmail;
        const nokPhone = this.profileData.kinPhone;
        const nokAddress = this.profileData.kinAddress;
        const nokRelationship = this.profileData.relationship;
        const profilePic = this.profileData.profilePic;

        this.step = 0;
        return this.updateProfile({
          legalName,
          dob,
          gender,
          maritalStatus,
          homeAddress,
          homeState,
          homeLga,
          noOfYears,
          occupation,
          workSector,
          monthlyIncome,
          companyName,
          workAddress,
          startYear,
          designation,
          officialEmail,
          nokName,
          nokEmail,
          nokPhone,
          nokAddress,
          nokRelationship,
          profilePic
        });
      } else {
        // this.loading = true;
        this.$store.commit("error", "Please fill in the required fields");
      }
    },

    async changePasswords() {
      const valid = this.$refs.observer.validate();
      console.log(valid);
      const password = this.profileData.password;
      const confirmPassword = this.profileData.confirmPassword;

      return this.changePassword({ password, confirmPassword });
    },

    async onFileChange(fieldName, file) {
      const { maxSize } = this;
      const imageFile = file[0];

      //check if user actually selected a file
      if (file.length > 0) {
        const size = imageFile.size / maxSize / maxSize;
        if (!imageFile.type.match("image.*")) {
          // check whether the upload is an image
          this.errorDialog = true;
          this.errorText = "Please choose an image file";
        } else if (size > 1) {
          // check whether the size is greater than the size limit
          this.errorDialog = true;
          this.errorText =
            "Your file is too big! Please select an image under 1MB";
        } else {
          // Append file into FormData & turn file into image URL
          const formData = new FormData();
          this.profileData.profilePic = URL.createObjectURL(imageFile);
          this.saveBtn = true;
          console.log(imageFile);
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
      // this.postId = data.id;
      console.log(data);
      this.savedAvatar();
    },
    savedAvatar() {
      this.saving = false;
      this.saved = true;
    }
  }
});
</script>
<style scoped>
.wrapper {
  background-color: #fff;
  margin-top: 0;
  padding: 12px;
}
/* form */
.text-danger {
  color: #cc3639;
}
.testbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 20px;
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
form button {
  text-align: left;
  width: 169px;
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
