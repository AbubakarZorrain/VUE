<template>
  <div class="tasks_container">
    <div class="tasks_content">
      <h1>Tasks</h1>
      <ul class="tasks_list">
        {{message}}
        <li v-for="task in tasks" :key="task.id">
          <h3>{{task.username}}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      // tasks
      tasks: "",
      message:""
    };
  },
  methods: {
    async getData() {
      try {
        // fetch tasks
        const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({ title: "Vue POST Request Example" })
  };
  fetch("https://fantasy-botique.herokuapp.com/app/users", requestOptions)
    .then(response => response.json())
    .then(data1 => (
      this.message=data1.message,
    this.tasks = data1.data
    ));
      } catch (error) {
        // log the error
       this.message= error;
      }
    },
  },
  created() {
    // Fetch tasks on page load
    this.getData();
  },
};
</script>