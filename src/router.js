import Dashboard from '@/components/pages/Dashboard.vue';
import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';
import Profile from '@/components/auth/Profile.vue';
import SignOut from '@/components/auth/SignOut.vue';
import Navbar from '@/components/includes/Navbar.vue';
import Sidebar from '@/components/includes/Sidebar.vue';
import Footer from '@/components/includes/Footer.vue';

import Test from '@/components/pages/Test.vue';
import Student from '@/components/pages/Student.vue';

import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/',
        name: 'Dashboard',
        components: {
            navbar: Navbar,
            sidebar: Sidebar,
            footer: Footer,
            default: Dashboard,
        },
        meta: { guarded: true },
    },
    {
        path: '/profile',
        name: 'Profile',
        components: {
            navbar: Navbar,
            sidebar: Sidebar,
            footer: Footer,
            default: Profile,
        },
        meta: { guarded: true },
    },
    {
        path: '/tests',
        name: 'Tests',
        components: {
            navbar: Navbar,
            sidebar: Sidebar,
            footer: Footer,
            default: Test,
        },
        meta: { guarded: true },
    },
    {
        path: '/students',
        name: 'Students',
        components: {
            navbar: Navbar,
            sidebar: Sidebar,
            footer: Footer,
            default: Student,
        },
        meta: { guarded: true },
    },
    { path: '/:pathMatch(.*)*', redirect: { name: 'SignIn' } },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;