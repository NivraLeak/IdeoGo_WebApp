<template>
    <v-app id="style-1">
        <v-card>
            <v-navigation-drawer permanent fixed app clipped-left width="300px">
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/men/81.jpg">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>Luis Canaval</v-list-item-title>
                        <v-list-item-subtitle>Gerente</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-tabs vertical v-model="tab" class="title1">
                    <v-tab :class="title1" @click="setSelected('Dashboard')">
                        <v-icon left size="25">dashboard</v-icon>
                        <v-list-item-title class="hidden">Dashboard</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title2" @click="setSelected('Projects')">
                        <v-icon left size="25">business_center</v-icon>
                        <v-list-item-title class="hidden">My Projects</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title3" @click="setSelected('CreateProject')">
                        <v-icon left size="25">add</v-icon>
                        <v-list-item-title class="hidden">Create Project</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title4" @click="setSelected('Edit_Profile')">
                        <v-icon left size="25">account_circle</v-icon>
                        <v-list-item-title class="hidden">Edit Profile</v-list-item-title>
                    </v-tab>
                    <v-tab :class="title5" @click="setSelected('Edit_Project')">
                        <v-icon left size="25">edit</v-icon>
                        <v-list-item-title class="hidden">Edit Project</v-list-item-title>
                    </v-tab>
                </v-tabs>
                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn href="/" block>Logout</v-btn>
                    </div>
                </template>
            </v-navigation-drawer>
        </v-card>
        <v-main>
            <v-tabs-items v-model="tab">

                <v-tab-item>
                    <find-project></find-project>
                </v-tab-item>
                <v-tab-item>
                    <DashboardContent :projects="projects"></DashboardContent>
                </v-tab-item>
                <v-tab-item>
                    <CreateProject></CreateProject>
                </v-tab-item>
                <v-tab-item>
                    <EditProfile></EditProfile>
                </v-tab-item>

                <v-tab-item>
                    <EditProject></EditProject>
                </v-tab-item>
            </v-tabs-items>
        </v-main>
    </v-app>
</template>
<script>
    import axios from 'axios'
    import EditProfile from "@/components/EditProfile";
    import CreateProject from "@/components/CreateProject";
    import Projects from "@/components/Projects";
    //import ProfileContent from "./ProfileContent";
    import EditProject from "./EditProject";
    //import Home from "../view/Home";
   // import BaseTable from "./BaseTable";
   // import Profile from "../view/Profile";
    import FindProject from "@/components/FindProject";
    import DashboardContent from "./DashboardContent";

    export default {
        name: "Dashboard",
        components: {
            DashboardContent,
            //ProfileContent,
            //BaseTable,
           // Home,
            Projects,
            FindProject,
            CreateProject,
            EditProfile,
            EditProject,
        },
        props: {},
        data: () => ({
            drawer: true,
            selected: '',
            projects:[],
            title1: 'title',
            title2: 'title',
            title3: 'title',
            title4: 'title',
            title5: 'title',
            errors: [],
            tab: null,
            isHidden: true,
            users: []
        }),
        created() {
            this.setProject();
            this.allProjects();
        },
        methods: {
            setProject(){
               axios.get('')
            },
            allProjects(){
                axios.get('https://ideogoapi20200702063738.azurewebsites.net/api/Project')
                    .then(response => {
                        this.projects=response.data;
                        console.log('Source Projects: ');
                        console.log(response.data);

                    })
            },
            show(title) {
                if (title === 'Projects') this.isHidden = !this.isHidden
            },
            setSelected(info) {
                this.selected = info;

                if (info === 'CreateProject') {
                    this.title1 = "title";
                    this.title2 = "title";
                    this.title3 = "title-selected";
                    this.title4 = "title";
                    this.title5 = "title";
                }
                if (info === 'Dashboard') {
                    this.title1 = "title-selected";
                    this.title2 = "title";
                    this.title3 = "title";
                    this.title4 = "title";
                    this.title5 = "title";
                }

                if (info === 'My Projects') {
                    this.title1 = "title";
                    this.title2 = "title-selected";
                    this.title3 = "title";
                    this.title4 = "title";
                    this.title5 = "title";

                }

                if (info === 'Edit_Profile') {
                    this.title1 = "title";
                    this.title2 = "title";
                    this.title3 = "title";
                    this.title4 = "title-selected";
                    this.title5 = "title";

                }
                if (info === 'Edit_Project') {
                    this.title1 = "title";
                    this.title2 = "title";
                    this.title3 = "title";
                    this.title4 = "title";
                    this.title5 = "title-selected";

                }
                return this.selected;
            },

        }
    }
</script>

<style scoped>
    #style-1 {
        font-family: 'Khula', sans-serif;
    }
    .logo{
        max-width:60%;
        height:45%;
        margin-left: 2.5em;
    }
    .title {
        background-color: white;
        color: gray;
        font-weight: 300;
    }

    .title:hover {
        background-color: lightgray;
    }

    .title-selected {
        background-color: #456665;
        color: white;
        font-weight: 300;
    }
    .title-item {
        font-weight: 700;
    }
    .hidden {
        text-transform:none !important;
    }

    @media screen and (max-width: 780px){
        .hidden {
            display: none;
        }
        .size {
            width: 100px !important;
        }
    }

</style>


