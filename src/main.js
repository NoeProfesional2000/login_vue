import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import axios from 'axios'

const app = createApp(App)

app.use(route)

app.mount('#app')

if(localStorage.getItem('token') != undefined && localStorage.getItem('token') != "" && localStorage.getItem('token') !== null){
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token')
}