// router.js

// Routes definitions for Application

import Vue from 'vue';
import Router from 'vue-router';
import Home from "./view/Home";
import Register from "./view/Register";
import Profile from "./view/Profile";
import UsersList from "./view/UsersList";
import Login from "./view/Login";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";
import Project from "./view/Project";


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {path: '/', alias: '/home', name: 'home', component: Home},
        {path: '/login', name: 'login', component: Login},
        {path: '/register', name: 'register', component: Register},
        {path: '/profile', name: 'profile', component: Profile},
        {path: '/users', name: 'users', component: UsersList},
        {path: '/EditProfile', name: 'editProfile', component: EditProfile},
        {path: '/Project', name: 'project', component: Project},
        {path: '/Dashboard', name:'dashboard', component: Dashboard},
    ]
});

export default router;
