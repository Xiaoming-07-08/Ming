import { createRouter, createWebHashHistory } from "vue-router";

import Home from '@/pages/Home.vue'
const routes = [
    { path: '/', redirect: '/home/project' },
    {
        path: '/home', component: Home, children: [
            { path: 'index', component: () => import('@/pages/Index/Index.vue') },
            { path: 'project', component: () => import('@/pages/Project/Project.vue') },
            { path: 'blog', component: () => import('@/pages/Blog/Blog.vue') },
            { path: 'contact', component: () => import('@/pages/Contact/Contact.vue') },

        ]
    },
    { path: '/addblog/:id', component: () => import('@/pages/Blog/AddBlog.vue') }

    // { path: '/blog', component: () => import('@/pages/Blog/Blog.vue') }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
