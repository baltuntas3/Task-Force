import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Posts from '../views/Posts.vue'
import PostDetails from '../views/PostDetails.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/posts',
    name:'Posts',
    component: Posts
  },
  {
    path:'/posts/:postId',
    name:'PostsDetails',
    component: PostDetails
  }/*
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( webpackChunkName: "about"  ../views/About.vue)
  }
  */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
