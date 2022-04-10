import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    { 
        path: '/',
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/produk/:slug',
        component: () => import('./pages/ProductDetail.vue')
    },
    {
        path: '/berita',
        component: () => import('./pages/News.vue')
    },
    {
        path: '/berita/:slug',
        component: () => import('./pages/NewsDetail.vue')
    },
    {
        path: '/ajukan-kredit',
        component: () => import('./pages/CreditRequest.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;