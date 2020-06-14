<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control"
               placeholder="Search by Name" v-model="name">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
                  @click="searchName">Search</button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Project List</h4>
      <ul class="list-group">
        <li class="list-group-item"
            :class="{ active: index === currentIndex }"
            v-for="(project, index) in projects"
            :key="index"
            @click="setActiveProject(project, index)">
          {{ project.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentProject">
        <h4>Project</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentProject.name }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentProject.description }}
        </div>
        <div>
          <label><strong>Date:</strong></label> {{ currentProject.date }}
        </div>
        <a class="badge badge-warning" :href="'/projects/' + currentProject.id">Edit</a>
      </div>
      <div v-else>
        <br/>
        <p>Please click on a Project.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import  ProjectDataService from '../domain/services/projects'

  export default {
    name: "ProjectsList",
    data() {
      return {
        projects: [],
        currentProject: null,
        currentIndex: -1,
        name: ""
      };
    },
    methods: {
      retrieveProjects() {
        ProjectDataService.getAll()
          .then(response => {
            this.projects = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      refreshList() {
        this.retrieveProjects();
        this.currentProject = null;
        this.currentIndex = -1;
      },
      setActiveProject(tutorial, index) {
        this.currentTutorial = tutorial;
        this.currentIndex = index;
      },
      searchName() {
        ProjectDataService.findByName(this.name)
          .then(response => {
            this.projects = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrieveProjects();
    }
  }
</script>

<style scoped>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
</style>
