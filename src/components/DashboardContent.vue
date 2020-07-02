<template>
        <div class="col pa-md-4 mx-lg-auto">
            <div v-for="project in projects" :key="project.id">
            <v-card class="d-inline-block mx-auto">
                <v-container>
                    <v-row justify="space-between">

                        <v-col cols="auto">
                            <h5 class="text-center ">{{ project.name}}</h5>
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
                                <h5 class="text-center ">{{project.description}}</h5>
                                <v-col>
                                    <v-btn style="min-width:200px">
                                        Editar proyecto
                                    </v-btn>
                                </v-col>

                                <v-col>
                                    <v-btn style="min-width:200px">
                                        Ver colaboradores
                                    </v-btn>
                                </v-col>

                                <v-col>
                                    <v-btn style="min-width:200px">
                                        Ver solicitudes
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DashboardContent",
        props: {
            projects: Array
        }
    }
</script>

<style scoped>

</style>
