import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';
import Dashboard from '@/components/pages/Dashboard.vue';

import Navbar from '@/components/includes/navbar.vue';
import Sidebar from '@/components/includes/sidebar.vue';
import Footer from '@/components/includes/fouter.vue';


import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        components: {
            navbar: Navbar,
            sidebar: Sidebar,
            footer: Footer,
            default: Dashboard,
        },
    },
    { path: '/:pathMatch(.*)*', redirect: { name: 'SignIn' } },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;

