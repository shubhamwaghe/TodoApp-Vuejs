<template>
<div class="container editor-wrapper">
  <form class="form" @submit.prevent="sevent">
    <div class="form-group">
      <label for="title">Title: </label>
      <input type="text" class="form-control" id="title" placeholder="Title" v-model:value="title" required />
    </div>
    <div class="form-group">
      <label for="body">Body: </label>
      <textarea class="form-control" id="body" placeholder="Body" rows="5" v-model:body="body" required>{{body}}</textarea>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary"> <icon name="list-alt"></icon> Submit </button>
      <button type="button" class="btn btn-danger" @click="gotoHome"> <icon name="times"></icon> Cancel</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'todo-editor',
  title: null,
  body: null,
  props: [ 'id', 'todo' ],
  methods: {
    gotoHome () {
      this.$router.push('/')
    },
    sevent () {
      var ctodo = { id: this.id, todo: { title: this.title, body: this.body } }
      this.$emit('sevent', ctodo)
    }
  },
  data () {
    return {
      title: this.todo.title,
      body: this.todo.body
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editor-wrapper {
  border: solid #ccc 1px;
  padding: 20px;
  border-radius: 2px;
}
button {
  cursor: pointer;
}
label {
  font-weight: bold;
}
</style>
