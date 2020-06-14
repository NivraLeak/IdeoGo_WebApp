<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title">Name</label>
        <input type="text" class="form-control" id="title"
               v-model="currentProject.name"/>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
               v-model="currentProject.description"/>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="date created"
               v-model="currentProject"/>
      </div>
    </form>
    <button class="badge badge-danger mr-2"
            @click="deleteProject">Delete</button>
    <button class="badge badge-success" type="submit"
            @click="updateProject">Update</button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a Tutorial.</p>
    <p> {{ message }}</p>
  </div>
</template>

<script>
  import  ProjectDataService from '../domain/services/projects'


    export default {
        name: "Project",
      data() {
        return {
          currentProject: null,
          message: ''
        };
      },
      methods: {
        getProject(id) {
          ProjectDataService.get(id)
            .then(response => {
              this.currentProject = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            })
        },
        updateProject() {
          ProjectDataService.update(this.currentProject.id, this.currentProject)
            .then(response => {
              console.log(response.data);
              this.message = 'Project successfully updated.';
            })
            .catch(e => {
              console.log(e);
            })
        },
        deleteProject() {
          ProjectDataService.delete(this.currentProject.id)
            .then(response => {
              console.log(response.data);
              this.$router.push({name: "projects"});
            })
        }
      },
      mounted() {
        this.message = '';
        this.getProject(this.$route.params.id);

      }
    }
</script>

<style scoped>

</style>
