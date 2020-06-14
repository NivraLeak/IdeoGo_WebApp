<template>
  <div class="submit-form">
    <div v-if="!submited">
      <div class="form-group">
        <label for="name">name</label>
        <input type="text" class="form-control" id="name"
               required v-model="project.name" name="name">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
               required v-model="project.description" name="description">
      </div>
      <button @click="saveProject" class="btn btn-success">publish</button>
    </div>
    <div v-else>
      <h4>Project succesfuly published</h4>
      <button class="btn btn-success" @click="newProject">Add</button>
    </div>
  </div>
</template>

<script>
  import  ProjectDataService from '../domain/services/projects'

  export default {
    name: "AddProject",
    data() {
      return {
        project: {
          id: null,
          name: "",
          description: "",
          date: ""
        },
      };
    },
    methods: {
      saveProject() {
        const data = {
          title: this.project.name,
          description: this.project.description,
          date: this.project.date,
        };

        ProjectDataService.create(data)
          .then(response => {
            this.project.id = response.data.id;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      newProject() {
        this.project = {};
      }
    }
  }
</script>

<style scoped>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
</style>

