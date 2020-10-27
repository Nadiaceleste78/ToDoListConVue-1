import Vue from 'vue';
import Router from 'vue-router';


import Home from './views/Home';
import About from './views/About';
import Login from './views/Login';
import Error from './views/Error';
import User from './views/User';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: "*",
            name: 'error',
            component: Error
        }
    ]
})