import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '@/views/MainBox.vue'
import RoutesConfig from './config'
import store from '@/store'
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/mainbox",
    name: "mainbox",
    component: MainBox
  }
  //mainbox嵌套路由，根据权限动态添加
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.name == "login") {
    next()
  } else {
    if (!localStorage.getItem("token")) {
      next({
        path: "/login"
      })
    } else {
      if(!store.state.isGetterRouter){
        ConfigRouter();
        next({
          path: to.fullPath//刷新路由
        })
        
      }else{
        next()
      }
       
    
    }
  }
})
const ConfigRouter = () => {
  RoutesConfig.forEach(item => {
    router.addRoute("mainbox", item)
  })
  store.commit("changeGetterRouter", true)
}

export default router;
