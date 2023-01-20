import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './style.css'

import App from './App.vue'
import router from '@/router/index'

import { addColor } from '@/hooks/addColor';
addColor(true)

const app = createApp(App)


app.use(router)
app.use(Antd)
app.mount('#app')
