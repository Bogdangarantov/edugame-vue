import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createBootstrap} from 'bootstrap-vue-next'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const app = createApp(App)
app.use(router)
app.use(createBootstrap())

app.mount('#app')
