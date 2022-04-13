import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
import axios from 'axios'
App.prototype.$http = axios;