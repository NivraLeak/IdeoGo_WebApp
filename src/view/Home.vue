<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark ">

            <div class="navbar-nav mr-auto">
                <li class="nav-item"><router-link to="/home" class="nav-link"><font-awesome-icon icon="home"/> Home</router-link></li>
                <li v-if="currentUser" class="nav-item"><router-link to="/users" class="nav-link">Users</router-link></li>
            </div>
            <div class="navbar-nav mr-auto">
                <li class="nav-item"><router-link to="/Dashboard" class="nav-link"><font-awesome-icon icon="dashboard"/> Dashboard</router-link></li>
            </div>
            <di class="navbar-nav ml-auto">
                <h1 href class="navbar-brand" @click.prevent >Ideo GO</h1>
            </di>

            <div v-if="!currentUser" class="navbar-nav ml-auto">
                <li class="nav-item"><router-link to="/register" class="nav-link"><font-awesome-icon icon="user-plus"/> Sign Up</router-link></li>
                <li class="nav-item"><router-link to="/login" class="nav-link"><font-awesome-icon icon="sign-in-alt"/> Sign In</router-link></li>
            </div>
            <div v-if="currentUser" class="navbar-nav ml-auto">
                <li class="nav-item"><router-link to="/profile" class="nav-link"><font-awesome-icon icon="user"/> {{ currentUser.username }}</router-link></li>
                <li class="nav-item"><a class="nav-link" href @click.prevent="logout"><font-awesome-icon icon="sign-out-alt"/> Sign Out</a></li>
            </div>
        </nav>
        <div class="container">


        </div>
        <v-footer
                dark
                padless
                class="footer"
        >
            <v-card
                    flat
                    tile
                    class="indigo lighten-1 white--text text-center"
            >
                <v-card-text>
                    <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4 white--text"
                            icon
                    >
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                    LA MEJOR PLATAFORMA PARA PODER SUBIR TUS PROYECTOS
                    Nosotros queremos que tus proyectos logren ser sostenibles y exitosos &
                    Ser tu primera opcion es nuestra finalidad, por ello nuestro modelo de internacionalización es un modelo inclusivo para responder a las necesidades locales.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>IdeoGo</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>


    export default {
        name: 'Home',
        data: () => ({
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
            logout() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login');
                this.$router.push('/Dashboard');
            }
        }
    }
</script>


<style scoped>
    .footer{
        position: fixed;
        bottom: 0;
    }


</style>
