import Vue from 'vue'
import VueRouter from 'vue-router'
/** Layouts */
import DefaultLayout from '@/layout/DefaultLayout.vue';
import BlankLayout from '@/layout/BlankLayout.vue';
import BuyFlowLayout from '@/layout/BuyFlowLayout.vue';

/** Views */
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: DefaultLayout,
    children:[{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: function () {return import(/* webpackChunkName: "about" */ '../views/About.vue')}
    },
    {
      path: '/saaas',
      name: 'saaas',
      component: function () {return import(/* webpackChunkName: "about" */ '../views/saaas.vue')}
    }
  ]
  },
  {
    path: '/ssnap',
/*     redirect: 'ssnap', */
    component: BlankLayout,
    children:[{
        path: '/ssnap',
        name: 'ssnap',
        component: function () {return import(/* webpackChunkName: "about" */ '../views/Ssnap.vue')}
    }]
  },
  {
    path: '/buy',
/*     redirect: 'ssnap', */
    component: BuyFlowLayout,
    children:[{
        path: '/buy',
        name: 'buy',
        component: function () {return import(/* webpackChunkName: "about" */ '../views/BuyFlow.vue')}
    }]
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
