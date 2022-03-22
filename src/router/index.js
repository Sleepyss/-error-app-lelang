import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

//member
import IndexMember from '../components/Member/Index.vue'
import TambahMember from '../components/Member/Tambah.vue'
import EditMember from '../components/Member/Edit.vue'
import DetailMember from '../components/Member/Detail.vue'

//transaksi
import IndexTransaksi from '../components/Transaksi/Index.vue'
import TambahTransaksi from '../components/Transaksi/Tambah.vue'
import EditTransaksi from '../components/Transaksi/Edit.vue'

//barang
import IndexBarang from '../components/Barang/Index.vue'
import TambahBarang from '../components/Barang/Tambah.vue'
import EditBarang from '../components/Barang/Edit.vue'
import DetailBarang from '../components/Barang/Detail.vue'

//lelang
import IndexLelang from '../components/Lelang/Index.vue'
import TambahLelang from '../components/Lelang/Tambah.vue'
import DetailLelang from '../components/Lelang/Detail.vue'

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
    },
    // Transaksi
    {
        path: '/transaksi',
        name: 'indextransaksi',
        component: IndexTransaksi,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/transaksi/edit/:id',
        name: 'edittransaksi',
        component: EditTransaksi,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/transaksi/tambah',
        name: 'tambahtransaksi',
        component: TambahTransaksi,
        meta : {
            requiresAuth : true
        }
    },
    // Barang
    {
        path: '/barang',
        name: 'indexbarang',
        component: IndexBarang,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/barang/tambah',
        name: 'tambahbarang',
        component: TambahBarang,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/barang/edit/:id',
        name: 'editbarang',
        component: EditBarang,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/barang/detail/:id',
        name: 'detailbarang',
        component: DetailBarang,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/lelang',
        name: 'indexlelang',
        component: IndexLelang,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/lelang/add',
        name: 'tambahlelang',
        component: TambahLelang,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/lelang/detail/:id',
        name: 'detaillelang',
        component: DetailLelang,
        meta : {
            requiresAuth : true
        }
    },
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