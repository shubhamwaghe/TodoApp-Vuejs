<template>
  <div class="container col-md-8" align="left">
    <todo-editor :todo="todo" @sevent="createTodo"></todo-editor>
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
    createTodo (ctodo) {
      store.commit('createTodo', ctodo)
    }
  },
  data () {
    return {
      heading: 'New TODO',
      todo: { title: null, body: null }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
