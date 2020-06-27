// App.vue

// Application Main View
<template>

    <router-view/>

</template>

<script>
  export default {
    name: 'App',
    components: {},
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  }
</script>
