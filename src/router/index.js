import Vue from 'vue'
import Router from 'vue-router'
import login from '@/admin/login'
const Blog = resolve => require(['@/pages/Blog'], resolve)
const About = resolve => require(['@/pages/About'], resolve)
const Article = resolve => require(['@/pages/Article'], resolve)
const Message =resolve => require(['@/pages/Message'],resolve)
const Management = resolve => require(['@/admin/management'], resolve)
const Articlesmanage = resolve => require(['@/admin/articlesmanage'], resolve)
const Messagemanage = resolve => require(['@/admin/messagemanage'], resolve)
const Updatearticle = resolve => require(['@/admin/updatearticle'], resolve)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: './',
  routes: [
    
   {
    path: '/',

    name: 'Blog',

    component: Blog
   },
   {

    path: '/about',

    name: 'About',

    component: About

  },
  {

    path:'/article',

    name:'Article',

    component: Article
  },
  {
    path:'/message',

    name:'Message',

    component:Message
  },
  {

    path: '/login',

    name: 'Login',

    component: login,

  },
  {

    path: '/Management',

    name: 'Management',

    component:Management,
  },
  {
    path: '/Articlesmanage',

    name: 'Articlesmanage',

    component :Articlesmanage
  },
  {
    path: '/Messagemanage',

    name:'Messagemanage',

    component:Messagemanage
  },
 {
   path:'/Updatearticle',

   name:'Updatearticle',

   component:Updatearticle
 }
  ]
})
