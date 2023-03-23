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


const heartDirective = {
    mounted(el) {
        onMounted(() => {
            el.addEventListener("click", (event) => {
                const heart = document.createElement("div");
                heart.classList.add("heart");
                heart.style.left = `${event.clientX}px`;
                heart.style.top = `${event.clientY}px`;
                document.body.appendChild(heart);
                setTimeout(() => {
                    heart.remove();
                }, 1000);
            });
        });
    },
};

app.directive('heart', heartDirective)