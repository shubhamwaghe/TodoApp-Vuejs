import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewTodo from '@/components/NewTodo'
import EditTodo from '@/components/EditTodo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new',
      component: NewTodo
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditTodo
    }
  ]
})
