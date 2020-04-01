
import agent from './modules/agent.js'

import VueRouter from 'vue-router'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Login',
            meta: {
                title: '登录'
            },
            component: () => import(/* webpackChunkName: "login" */'../views/Login.vue')
        },
        ...agent
    ]
})
export default router