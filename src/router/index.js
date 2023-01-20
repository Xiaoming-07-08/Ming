import { createRouter, createWebHistory } from "vue-router";

import Home from '@/pages/Home.vue'
const routes = [
    { path: '/', redirect: '/home/project' },
    {
        path: '/home', component: Home, children: [
            { path: 'index', component: () => import('@/pages/Index/Index.vue') },
            { path: 'project', component: () => import('@/pages/Project/Project.vue') },
            { path: 'experience', component: () => import('@/pages/Experience/Experience.vue') },
            { path: 'contact', component: () => import('@/pages/Contact/Contact.vue') },
        ]
    },
    { path: '/blog', component: () => import('@/pages/Blog/Blog.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
