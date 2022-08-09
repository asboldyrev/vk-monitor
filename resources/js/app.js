import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'
import routes from './routes'
import App from './App'

const VueRouter = require('vue-router')

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})
const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
