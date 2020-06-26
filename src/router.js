import Vue from 'vue';
import  Router from 'vue-router'

Vue.use(Router);

export default  new Router({
    mode: "history",
    routes: [
        { path: "/", name:"Dashboard", component: () => import("./components/Dashboard")},
        { path: "/Dashboard", name:"dashboard", component: () => import("./components/Dashboard")},
        { path: "/Login", name:"login",component: () => import("./view/Login")},
        { path: "/profile", name:"profile",component: () => import("./view/Profile")},

    ]
});
