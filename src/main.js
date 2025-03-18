import {createApp} from 'vue'
import App from './App.vue'
import axios from 'axios'
import {createPinia} from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.axios = axios

app.use(pinia)
app.mount('#app')
