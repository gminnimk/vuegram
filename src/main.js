import {createApp} from 'vue'
import App from './App.vue'
import { emitter } from './plugins/mitt.js'
import axios from "axios"

const app = createApp(App)

// 전역 속성 및 플러그인 설정
app.config.globalProperties.emitter = emitter
app.config.globalProperties.axios = axios
app.provide('emitter', emitter)

// 마운트는 모든 설정이 완료된 후에 실행
app.mount('#app')