<template>
  <div class="container col-md-8" align="left">
    <todo-editor :todo="todo" :id="$route.params.id" @sevent="editTodo"></todo-editor>
  </div>
</template>

<script>
import TodoEditor from './TodoEditor'
import store from '../store'
export default {
  name: 'new-todo',
  todo: { title: null, body: null },
  components: { TodoEditor },
  methods: {
    editTodo (ctodo) {
      console.log('editing now!' + ctodo.id)
      console.log(ctodo.todo)
      store.commit('editTodo', ctodo)
    }
  },
  data () {
    return {
      heading: 'Edit TODO',
      todo: this.$route.params.todo,
      id: this.$route.params.id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
