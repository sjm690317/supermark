import { createApp } from 'vue'
import App from './App.vue'
import store from '../store/store.js'
import router from '../router/route.js'
import axios from 'axios'
createApp(App).use(router).use(store).mount('#app')

//
axios({
	url:'/home/multidata',
	method:'GET'
}).then(res => {
	console.log(res)
})

const instance1 = axios.create({
	baseURL: 'http://123.207.32.32:8000',
	timeout: 5000
})

instance1.interceptors.request.use()


