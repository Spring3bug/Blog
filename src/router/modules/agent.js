const agent = [
    {
        path: '/agentList',
        name: 'agentList',
        meta: {
            title: '登录'
        },
        component: () => import(/* webpackChunkName: "login" */'../../views/agent/agentList.vue')
    },
    {
        path: '/Home',
        name: 'Home',
        meta: {
            title: '登录'
        },
        component: () => import(/* webpackChunkName: "login" */'../../views/Home.vue')
    },
]
export default agent