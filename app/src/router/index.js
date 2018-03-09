import Vue from 'vue'
import Router from 'vue-router'
import index from '../components'
import login from '../components/login'
import all from '../components/all'
import intro from '../components/intro'
import personal from '../components/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component: index,
      children:[
        {
          path:'all',
          name:'all',
          component:all
        },{
          path:'intro',
          name:'intro',
          component:intro
        },{
          path:'login',
          name:'login',
          component:login
        },{
          path:'personal/:id',
          name:'personal',
          component:personal
        },
        {path:"/",redirect:"intro"},
      ]
    }
  ]
})
