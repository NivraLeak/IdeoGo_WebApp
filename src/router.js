import Vue from 'vue'
import Router from 'vue-router'
export default new Router({
  mode: "history",
  routes: [
    { path: "/", alias: "/projects", name: "tutorials", component: () => import("./components/project/ProjectList") },
    { path: "/projects/:id", name: "project-details", component: () => import("./components/project/Project") },
    { path: "/add", name: "add", component: () => import("./components/project/AddProject") }
  ]
});
