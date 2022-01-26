import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

//member
import IndexMember from '../components/Member/Index.vue'
import TambahMember from '../components/Member/Tambah.vue'
import EditMember from '../components/Member/Edit.vue'
import DetailMember from '../components/Member/Detail.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/user',
        name: 'indexmember',
        component: IndexMember,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/user/add',
        name: 'tambahmember',
        component: TambahMember,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/user/edit/:id',
        name: 'editmember',
        component : EditMember,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/user/detail/:id',
        name: 'detailmember',
        component: DetailMember,
        meta : {
            requiresAuth : true
        }
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    if(to.matched.some((record) => record.meta.requiresAuth)) {
        if(localStorage.getItem('auth')) {
            next()
        } else {
            next('/login')
        }
    }
    next()
})

export default router