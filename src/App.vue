<template>
  <html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>TodoApp - Shubham Waghe</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div id="app">
      <nav-bar></nav-bar>
      <div class="container" id="main-wrapper">
        <router-view :todos="todos"></router-view>
      </div>
    </div>
    <my-footer></my-footer>

  
  </body>
  </html>
</template>

<script>
import Navbar from '@/components/Navbar'
import MyFooter from '@/components/MyFooter'
export default {
  name: 'app',
  components: { Navbar, MyFooter },
  data () {
    return {
      todos: this.$root.$store.state.todos
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#main-wrapper {
  margin-top: 30px;
  min-height: 490px;
}
.fa-icon {
  vertical-align: middle;
  line-height: 100%;
}
.router-link-exact-active {
  color: white !important;
  background: #3939c5;
  border-radius: 3px !important;
}
html, body {
    height: 100%;
}
</style>
