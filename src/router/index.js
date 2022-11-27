import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name:'home',
            component: ()=> import('../views/Home.vue')
        },
        {
            path: '/dentist',
            name:'dentist',
            component: ()=> import('../views/DentistList.vue')
        }
    ]
})

export default router
