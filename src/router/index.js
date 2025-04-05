import {createRouter, createWebHistory} from 'vue-router'
import LandingView from "@/views/LandingView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: LandingView,
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash, // 🔹 Прокрутка до елемента з таким ID
                behavior: 'smooth' // Додає плавний скрол
            };
        }
        return {top: 0};
    }
})

export default router
