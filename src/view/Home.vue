<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-light bg-info ">
            <di class="navbar-nav mr-lg-0">
                <a href="/">
                    <img class="logo" :src="require('../assets/logo2.png')" alt=""/>
                </a>
            </di>
            <div class="navbar-nav mr-lg-0">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">
                        <font-awesome-icon icon="home"/>
                           Home
                    </router-link>
                </li>
                <li v-if="currentUser" class="nav-item">
                    <router-link to="/users" class="nav-link">Users</router-link>
                </li>
            </div>
            <div class="navbar-nav mr-lg-0">
                <li class="nav-item">
                    <router-link to="/Dashboard" class="nav-link">
                        <font-awesome-icon icon="dashboard"/>
                          Dashboard
                    </router-link>
                </li>
            </div>


            <div v-if="!currentUser" class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="/register" class="nav-link">
                        <font-awesome-icon icon="user-plus"/>
                        Sign Up
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">
                        <font-awesome-icon icon="sign-in-alt"/>
                        Sign In
                    </router-link>
                </li>
            </div>
            <div v-if="currentUser" class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="/profile" class="nav-link">
                        <font-awesome-icon icon="user"/>
                        {{ currentUser.username }}
                    </router-link>
                </li>
                <li class="nav-item"><a class="nav-link" href @click.prevent="logout">
                    <font-awesome-icon icon="sign-out-alt"/>
                    Sign Out</a></li>
            </div>
        </nav>
     <Login></Login>
        <div>
            <v-card height="150">
                <v-footer
                        absolute
                        class="font-weight-medium"
                >
                    <div class="footer">
                        <v-card
                                flat
                                tile
                                class="indigo lighten-1 white--text text-center"
                        >

                            <v-col
                                    class="text-center"
                                    cols="12"
                            >
                                {{ new Date().getFullYear() }} — <strong>Ideogo</strong>
                            </v-col>
                            <v-card-text class="white--text pt-0">

                                Nosotros queremos que tus proyectos logren ser sostenibles y exitosos &
                                Ser tu primera opcion es nuestra finalidad, por ello nuestro modelo de
                                internacionalización es un modelo inclusivo para responder a las necesidades locales.
                            </v-card-text>
                            <v-btn
                                    v-for="icon in icons"
                                    :key="icon"
                                    class="mx-4 white--text"
                                    icon
                            >
                                <v-icon size="20px">{{ icon }}</v-icon>
                            </v-btn>


                        </v-card>
                    </div>


                </v-footer>
            </v-card>

        </div>

    </div>
</template>

<script>

    import User from "../models/user";
    import Login from "./Login";
    export default {
        name: 'Home',
        components: {Login},
        data: () => ({

            user: new User('', ''),
            loading: false,
            message: '',
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }),

        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        methods: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            },
            logout() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login');
                this.$router.push('/Dashboard');
            },
            created() {
                if (this.loggedIn) {
                    this.$router.push('/profile');
                }
            },
            methods: {
                handleLogin() {
                    this.loading = true;
                    console.log("Starting Login Handling");
                    this.$validator.validateAll().then(isValid => {
                        if (!isValid) {
                            this.loading = false;
                            return;
                        }
                        if (this.user.username && this.user.password) {
                            this.$store.dispatch('auth/login', this.user).then(
                                () => { this.$router.push('/profile'); },
                                error => {
                                    this.loading = false;
                                    this.message = (error.response && error.response.data) || error.message || error.toString();
                                }
                            );
                        }
                    });
                }
            }
        }
    }
</script>


<style scoped>
    .footer {
        position: fixed;
        bottom: 0;
    }


</style>
