<template>
        <div class="container">
        <v-container class="profileContent">
            <v-card-title class="justify-start">Edit Profile</v-card-title>
            <v-card v-if="showPersonal">

                <v-row>
                    <v-col>
                        <v-text-field
                                label="Name"
                                filled
                                v-model="firstName"
                                :rules="[v => !!v || 'Name is required']"
                                required>
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                                label="Last Name" hint="First last name"
                                v-model="lastName"
                                filled
                                :rules="[v => !!v || 'Last Name is required']"
                                required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-autocomplete
                                ref="country"
                                v-model="country"
                                :rules="[() => !!country || 'This field is required']"
                                :items="countries"
                                label="Country"
                                filled
                                placeholder="Peru..."
                                required
                        ></v-autocomplete>
                    </v-col>
                    <v-col>
                        <v-text-field
                                label="City" hint="It could be any city of your country"
                                v-model="city"
                                filled
                                :rules="[v => !!v || 'City is required']"
                                required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                                label="Phone Number" hint="If we need to call you"
                                v-model="phone"
                                filled
                                :rules="[v => !!v || 'Phone number is required']"
                                required>
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                                label="Postal Code" hint="General information required"
                                v-model="postalCode"
                                filled
                                :rules="[v => !!v || 'Postal code is required']"
                                required>
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-card>
            <v-card v-if="showAcademic">
                <p>Academic Info</p>
                <v-row>
                    <v-col cols="12" sm="5">
                        <v-text-field
                                label="University"
                                filled
                                v-model="university"
                                :rules="[v => !!v || 'University Name is required']"
                                required>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="5">
                        <v-text-field
                                label="Degree"
                                filled
                                v-model="degree"
                                :rules="[v => !!v || 'Degree is required']"
                                required>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="2">
                        <v-select
                                v-model="select"
                                filled
                                :items="items"
                                color="pink"
                                label="Semester"
                                required
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                                label="Extra info"
                                filled
                                v-model="field"
                                required>
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-card>
            <v-card-actions>
                <v-btn v-if="showAcademic" @click="backClick">Back</v-btn>
                <v-col class="text-right">
                    <v-btn v-if="showPersonal" :class="saveButton" @click="nextClick" bottom center class="white--text"
                           color="#de9c3a">Next
                    </v-btn>
                    <v-btn v-if="showAcademic" :class="saveButton" @click="saveClick" bottom center class="white--text"
                           color="#dbbc3c">Save Changes
                    </v-btn>
                </v-col>
            </v-card-actions>
        </v-container>
    </div>

</template>

<script>
    export default {
        name: "EditProfile",
        props: {
            articles: Array
        },

        data: () => ({
                email: null,
                password: null,
                firstName: null,
                lastName: null,
                isValid: true,
                saveButton: "saveButton",
                university: null,
                country: null,
                city: null,
                phone: null,
                postalCode: null,
                degree: null,
                select: ['1'],
                showPersonal: true,
                showAcademic: false,
                items: [
                    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
                ],
                countries: ['Argentina', 'Chile', 'Colombia', 'Mexico', 'Paraguay', 'Peru', 'Uruguay'],
            }
        ),
        methods: {
            saveClick() {
                this.showAcademic = false;
            },
            nextClick() {
                this.showPersonal = false;
                this.showAcademic = true;
            },
            backClick() {
                this.showPersonal = true;
                this.showAcademic = false;
            }
        }
    }
</script>

<style scoped>
    .profileContent {
        font-family: 'HelvLight', sans-serif;
    }

    p {
        color: black;
    }

    .saveButton {
        background-color: #586467;

    }

    .v-btn {
        text-transform: none !important;
    }

    .v-text-field {

    }

    .v-card {
        box-shadow: none;
    }

</style>
