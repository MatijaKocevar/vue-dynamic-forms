import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createPinia } from '@pinia/store'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
