import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Button from '@/pages/button'
import Layout from '@/pages/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }
  ]
})
