import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
import '@/util/axios.config'

createApp(App).
use(Particles, {
    init: async engine => {
       await loadFull(engine);  
    },
}).
use(Particles).
use(ElementPlus).
use(store).
use(router).
mount('#app')
