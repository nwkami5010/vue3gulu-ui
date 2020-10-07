import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import xiang from './components/xiang.vue'
import xiang2 from './components/xiang2.vue'
const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:xiang},
        {path:'/xxx',component:xiang2}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
