import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../layout/Index"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "/user",
        meta: {auth: true}
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/user/User"),
        meta: {auth: true}
      },
      {
        path: "/account",
        name: "account",
        component: () => import("@/views/account/Account"),
        meta: {auth: true}
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/error/404"),
        meta: {auth: true}
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/error/500"),
        meta: {auth: true}
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: ()=> import("@/views/Login"),
    meta: {auth: false}
  },
  {
    path: "*",
    redirect: "/404"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
