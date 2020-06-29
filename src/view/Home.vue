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

            <div class="row mt-2">
                <div class="col">
                    <h4 class="text-center ">Proyectos nuevos</h4>

                    <div class="row " >
                        <div class="col pa-md-4 mx-lg-auto">
                            <v-card class="d-inline-block mx-auto">
                                <v-container>

                                    <v-row justify="space-between">

                                        <v-col cols="auto">
                                            <h5 class="text-center ">Computacion</h5>
                                            <v-img
                                                    height="200"
                                                    width="200"
                                                    src="https://www.gruponw.com/nwlib6/includes/phpthumb/phpThumb.php?src=/imagenes/programm.png&w=700&f=png"
                                            ></v-img>
                                        </v-col>

                                        <v-col
                                                cols="auto"
                                                class="text-center pl-0"
                                        >
                                            <v-row
                                                    class="flex-column ma-5 fill-height"
                                                    justify="center"
                                            >
                                                <h5 class="text-center ">Componentes</h5>
                                                <v-col >
                                                    <v-btn style="min-width:200px">
                                                        Aplicaciones
                                                    </v-btn>
                                                </v-col>

                                                <v-col >
                                                    <v-btn style="min-width:200px">
                                                        Redes
                                                    </v-btn>
                                                </v-col>

                                                <v-col >
                                                    <v-btn style="min-width:200px">
                                                        Performance
                                                    </v-btn>
                                                </v-col>

                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>

                        <div class="col pa-md-4 mx-lg-auto">
                            <v-card class="d-inline-block mx-auto">
                                <v-container>

                                    <v-row justify="space-between">

                                        <v-col cols="auto">
                                            <h5 class="text-center ">Industria</h5>
                                            <v-img
                                                    height="200"
                                                    width="200"
                                                    src="https://www.limawell.edu.pe/wp-content/uploads/2018/02/industria-4.0.jpg"
                                            ></v-img>
                                        </v-col>

                                        <v-col
                                                cols="auto"
                                                class="text-center pl-0"
                                        >
                                            <v-row
                                                    class="flex-column ma-5 fill-height"
                                                    justify="center"
                                            >
                                                <h5 class="text-center ">Procesos</h5>
                                                <v-col >
                                                    <v-btn style="min-width:200px">
                                                        Produccion
                                                    </v-btn>
                                                </v-col>

                                                <v-col >
                                                    <v-btn style="min-width:200px">
                                                        Calidad
                                                    </v-btn>
                                                </v-col>

                                                <v-col style="min-width:200px">
                                                    <v-btn >
                                                        Productos Nuevos
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col pa-md-4 mx-lg-auto">
                            <v-card class="d-inline-block mx-auto">
                                <v-container>

                                    <v-row justify="space-between">

                                        <v-col cols="auto">
                                            <h5 class="text-center ">Ambiente</h5>
                                            <v-img
                                                    height="200"
                                                    width="200"
                                                    src="https://cde.laprensa.e3.pe/ima/0/0/2/3/5/235222.jpg"
                                            ></v-img>
                                        </v-col>

                                        <v-col
                                                cols="auto"
                                                class="text-center pl-0"
                                        >
                                            <v-row
                                                    class="flex-column ma-5 fill-height"
                                                    justify="center"
                                            >
                                                <h5 class="text-center ">Contaminacion</h5>
                                                <v-col >
                                                    <v-btn style="min-width:200px">
                                                        Glaciares
                                                    </v-btn>
                                                </v-col>

                                                <v-col >
                                                    <v-btn style="min-width:200px">
                                                        Playas
                                                    </v-btn>
                                                </v-col>

                                                <v-col >
                                                    <v-btn style="min-width:200px">
                                                        Bosques
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>

                        <div class="col pa-md-4 mx-lg-auto">
                            <v-card class="d-inline-block mx-auto">
                                <v-container>

                                    <v-row justify="space-between">

                                        <v-col cols="auto">
                                            <h5 class="text-center ">Musica</h5>
                                            <v-img
                                                    height="200"
                                                    width="200"
                                                    src="https://previews.123rf.com/images/abstract412/abstract4121711/abstract412171100008/89064788-dise%C3%B1o-de-carteles-de-m%C3%BAsica-con-cerebro-humano-con-cremallera-y-notas-musicales-coloridas-concepto-de-crea.jpg"
                                            ></v-img>
                                        </v-col>

                                        <v-col
                                                cols="auto"
                                                class="text-center pl-0"
                                        >
                                            <v-row
                                                    class="flex-column ma-5 fill-height"
                                                    justify="center"
                                            >
                                                <h5 class="text-center ">Electronica</h5>
                                                <v-col >
                                                    <v-btn style="min-width:200px">
                                                        Clasica
                                                    </v-btn>
                                                </v-col>

                                                <v-col >
                                                    <v-btn style="min-width:200px">
                                                        Banda
                                                    </v-btn>
                                                </v-col>

                                                <v-col >
                                                    <v-btn style="min-width:200px">
                                                        Orquesta
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        <div >
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
                                Ser tu primera opcion es nuestra finalidad, por ello nuestro modelo de internacionalización es un modelo inclusivo para responder a las necesidades locales.
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
