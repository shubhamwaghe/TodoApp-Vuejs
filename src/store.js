import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [{
      'title': 'Livepath',
      'body': 'Programmable value-added matrices'
    }, {
      'title': 'Edgeblab',
      'body': 'Business-focused bottom-line matrix'
    }, {
      'title': 'Cogilith',
      'body': 'Ergonomic high-level architecture'
    }, {
      'title': 'Aimbu',
      'body': 'Upgradable next generation task-force'
    }, {
      'title': 'Blogspan',
      'body': 'Ameliorated homogeneous hardware'
    }, {
      'title': 'Bubblemix',
      'body': 'Focused national installation'
    }, {
      'title': 'Yamia',
      'body': 'Universal mobile standardization'
    }, {
      'title': 'Yakitri',
      'body': 'Fundamental 24/7 customer loyalty'
    }, {
      'title': 'Yodel',
      'body': 'User-centric eco-centric software'
    }, {
      'title': 'Minyx',
      'body': 'Total empowering contingency'
    }, {
      'title': 'Katz',
      'body': 'Inverse optimal model'
    }, {
      'title': 'Oyope',
      'body': 'Re-contextualized executive knowledge base'
    }, {
      'title': 'Yozio',
      'body': 'Switchable cohesive collaboration'
    }, {
      'title': 'Edgetag',
      'body': 'Public-key homogeneous contingency'
    }, {
      'title': 'Photobean',
      'body': 'Decentralized stable workforce'
    }, {
      'title': 'Twimbo',
      'body': 'Business-focused 3rd generation orchestration'
    }, {
      'title': 'Plajo',
      'body': 'Advanced regional Graphic Interface'
    }, {
      'title': 'Realfire',
      'body': 'Ameliorated bandwidth-monitored process improvement'
    }, {
      'title': 'Dynabox',
      'body': 'Seamless dynamic complexity'
    }, {
      'title': 'Twimbo',
      'body': 'Team-oriented hybrid core'
    }]
  },
  mutations: {
    deleteTodo (state, todo) {
      const todoIndex = state.todos.indexOf(todo)
      console.log(todoIndex)
      state.todos.splice(todoIndex, 1)
    },
    createTodo (state, ctodo) {
      // console.log('created!')
      state.todos.push(ctodo.todo)
      router.push('/')
    },
    editTodo (state, ctodo) {
      console.log(ctodo)
      Vue.set(state.todos, ctodo.id, ctodo.todo)
      console.log('edited!')
      router.push('/')
    }
  }
})
