<template>
<div class="card" align="left">
  <div class="card-block px-0 pb-0">
    <h4 class="card-title px-3"> {{ todo.title}} </h4>
    <p class="card-text px-3"> {{ todo.body}} </p>
    <div class="card-footer">
      <div class="btn btn-warning" @click="editTodo(id, todo)"> <icon name="pencil"></icon> Edit </div> 
      <div class="btn btn-danger" @click="deleteTodo(todo)"> <icon name="trash"></icon> Delete </div>
    </div>
  </div>
</div>
</template>

<script>
import store from '../store'
export default {
  name: 'todo-card',
  props: [ 'todo', 'id' ],
  methods: {
    deleteTodo (todo) {
      store.commit('deleteTodo', todo)
    },
    editTodo (id, todo) {
      this.$router.push({ name: 'edit', params: { id: id, todo: todo } })
      // this.$router.push('/edit')
    }
  },
  data () {
    return {
      heading: 'All TODOs'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-wrapper {
  margin-top: 30px;
}
#card-wrapper {
  column-count: 4;
}
.todo-card-body {
  min-height: 140px;
}
.btn {
  cursor: pointer;
}
</style>
