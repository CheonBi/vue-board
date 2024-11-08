// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/**
 * BootStrap Import
 */

import "@/assets/css/main.css"
import "bootstrap"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
