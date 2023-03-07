import { createApp } from 'vue'
// 引入antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import './style.css'

import App from './App.vue'
import router from '@/router/index'

// 主题切换
import { addColor } from '@/hooks/addColor';
addColor(true)

import axios from 'axios'




const app = createApp(App)


app.use(router)
app.use(Antd)
app.mount('#app')
app.use(axios);
