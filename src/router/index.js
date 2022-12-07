import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name:'intro',
            component: ()=> import('../views/intro.vue')
        },
        {
            path: '/home',
            name:'home',
            component: ()=> import('../views/home.vue')
        },
        {
            path: '/menu',
            name:'menu',
            component: ()=> import('../views/menu.vue')
        },

        {
            path: '/aboutus',
            name:'aboutus',
            component: ()=> import('../views/Aboutus.vue')
        },

        {
            path: '/dentist',
            name:'dentist',
            component: ()=> import('../views/DentistList.vue')
        },

        {
            path: '/patient',
            name:'patient',
            component: ()=> import('../views/LoginPatient.vue')
        },
        
        {
            path: '/afiliate',
            name:'afiliate',
            component: ()=> import('../views/Afiliate.vue')
        }
    ]
})

export default router
