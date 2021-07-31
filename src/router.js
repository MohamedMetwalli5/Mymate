import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Results from './components/Results.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/results',
            name: 'Results',
            component: Results
        }]
})
