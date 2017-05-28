<template>
  <div class="container">
      <div class="card-columns" id="card-wrapper">
          <todo-card v-for="(todo, id) in todos" :todo="todo" :id="id" :key="id"></todo-card>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: [ 'todos' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card-wrapper {
  column-count: 4;
}
</style>
