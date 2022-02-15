<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>   
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Tambah Transaksi</h6>
                                </div>
                                <div class="card-body">
                                    <form @submit.prevent="edit">
                                        <div class="form-group">
                                            <label>Users</label>
                                            <select v-model="transaksi.id_masyarakat">
                                                <option v-for="(m, index) in masyarakat" :key="index" value="m.id_masyarakat">
                                                    {{m.nama}}
                                                </option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer-component></footer-component>
        </div>
    </div> 
</template>

<script>
export default {
    data() {
        return {
            users : {},
            transaksi : {}
        }
    },
    created() {
        this.axios.get('http://localhost/lelangOn/public/api/user').then(res =>{
            this.member = res.data
        }).catch(err => console.log(err))
        this.axios.get(`http://localhost/lelangOn/public/api/transaksi/${this.$route.params.id}`).then(res => {
            this.transaksi = res.data
        }).catch(err => console.log(err))
    },
    methods : {
        edit() {
            this.axios.post(`http://localhost/lelangOn/public/api/transaksi/${this.transaksi.id}`, this.transaksi).then(() => {
                this.$router.push('/transaksi')
            }).catch(err => console.log(err))
        }
    }
}
</script>