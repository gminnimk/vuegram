import {createApp} from 'vue'
import App from './App.vue'
import axios from 'axios'
import mitt from 'mitt'
import {createPinia} from 'pinia'

const emitter = mitt()
const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.axios = axios
app.config.globalProperties.emitter = emitter
app.provide('emitter', emitter)
app.use(pinia)
app.mount('#app')
