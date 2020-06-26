<template>
  <v-app>
    <v-app-bar app dark color="primary">
      <v-toolbar-title ccentered>IdeoGo</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-tabs v-model="tab" centered>
        <v-tab>Home</v-tab>
        <v-tab>About</v-tab>
        <v-tab>Contact Us</v-tab>
        <v-tab>Premium</v-tab>
        <v-tab>Login</v-tab>
        <v-tab></v-tab>

      </v-tabs>

    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
