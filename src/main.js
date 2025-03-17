import {createApp} from 'vue'
import App from './App.vue'
import axios from 'axios'
import mitt from 'mitt'

const app = createApp(App)
const emitter = mitt()
app.config.globalProperties.axios = axios
app.config.globalProperties.emitter = emitter
app.provide('emitter', emitter)
app.mount('#app')
