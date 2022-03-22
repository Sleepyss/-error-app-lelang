<template>
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <button class="btn btn-sm btn-warning btn-icon-split" @click='logout'>
                    <span class="icon text-white-50">
                        <i class="fas fa-sign-out-alt"></i>
                    </span>
                    <span class="text">Logout</span>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    created(){
        this.axios.get('http://localhost/lelangOn/public/api/login/check').then((res) => {
            console.log(res.data)
            if (!(res.data.success)) {
                this.$store.commit('clearToken')
                this.$store.commit('clearUser')
                this.$swal("Error","Sesi Anda sudah habis", "error")
                this.$router.push('/login')
            }
        })
    },
    methods : {
        logout() {
            this.axios.post('http://localhost/lelangOn/public/api/logout').then( () => {
                this.$store.commit('clearToken')
                this.$store.commit('clearUser')
                this.$router.push('/login')
            })
        }
    }
}
</script>