<template>
  <v-app>
    <v-app-bar app dark color="primary">
      <v-toolbar-title centered>IdeoGo</v-toolbar-title>
    </v-app-bar>
    <v-content>
    <router-view></router-view>
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
