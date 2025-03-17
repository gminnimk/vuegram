import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

const app = createApp()
app.config.globalProperties.axios = axios

createApp(App).mount('#app')
