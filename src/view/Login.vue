<template>
<di>
    <v-app-bar app dark color="primary">
        <v-toolbar-title>IDEO GO</v-toolbar-title>
    </v-app-bar>
    <v-content>
        <v-tabs v-model="tab" centered>
            <v-tab>Login</v-tab>
            <v-tab>Registration</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item>
                <login-form></login-form>
            </v-tab-item>
            <v-tab-item>
                <RegistrationForm></RegistrationForm>
            </v-tab-item>
        </v-tabs-items>
    </v-content>
</di>


</template>

<script>
    import LoginForm from "../components/LoginForm";
    import RegistrationForm from "../components/RegistrationForm";

    export default {
        name: "login",
        components: {RegistrationForm, LoginForm},
        data: () => ({
            tab: null
        }),
    }
</script>

<style scoped>

</style>
