<template>
    <v-card>
        <v-card-title>Registration Form</v-card-title>
        <v-card-text>
            <v-form v-model="isValid">
                <v-text-field
                        label="Email"
                        v-model="email"
                        :rules="emailRules"
                        required>
                </v-text-field>
                <v-text-field label="Password"
                              v-model="password"
                              :rules="passwordRules"
                              error-count="5"
                              type="password"
                              required="">

                </v-text-field>

            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" :disabled="!isValid">Register</v-btn>
        </v-card-actions>

    </v-card>
</template>

<script>
    export default {
        name: "RegistrationForm",
        data: () => ({
            email: null,
            password: null,
            isValid: true,
            emailRules: [v => !!v || 'Email is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'],
            passwordRules: [v => !!v || 'Password is required',
                v => (v && v.length >= 5) || 'Password must have at least 5 characters',
                v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
                v => /(?=.*\d)/.test(v) || 'Must have one number',
                v => /([!@#$%])/.test(v) || 'Must have one special character [!@#$%]'],

        })
    }
</script>

<style scoped>

</style>