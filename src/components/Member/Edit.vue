<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Edit Data Member</h6>
                            </div>
                            <div class="card-body">
                                <form @submit.prevent="edit">
                                    <div class="form-group">
                                        <label>Nama</label>
                                        <input type="text" class="form-control" v-model="users.nama">
                                    </div>
                                    <div class="form-group">
                                        <label>Alamat</label>
                                        <textarea rows="4" class="form-control" v-model="users.alamat"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <div>
                                            <label>Jenis Kelamin</label>
                                        </div>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label v-if="users.jenis_kelamin == 'L'" class="btn btn-secondary active">
                                                <input type="radio" value="L" v-model="users.jenis_kelamin"> Laki-laki
                                            </label>
                                            <label v-else class="btn btn-secondary">
                                                <input type="radio" value="L" v-model="users.jenis_kelamin"> Laki-laki
                                            </label>
                                            <label v-if="users.jenis_kelamin == 'P'" class="btn btn-secondary active">
                                                <input type="radio" value="P" v-model="users.jenis_kelamin"> Perempuan
                                            </label>
                                            <label v-else class="btn btn-secondary">
                                                <input type="radio" value="P" v-model="users.jenis_kelamin"> Perempuan
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Nomor Telepon</label>
                                        <input type="text" class="form-control" v-model="users.telephone">
                                    </div>
                                    <button type="submit" class="btn btn-success btn-block">Simpan</button>
                                </form>
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
            users: {}
        }
    },
    created() {
        this.axios.get(`http://localhost/lelangOn/public/api/user/show/${this.$route.params.id}`).then((res) => {
            this.users = res.data
        })
    },
    methods : {
        edit() {
            this.axios.put(`http://localhost/lelangOn/public/api/user/update/${this.$route.params.id}`,this.users).then(() => {
                this.$router.push('/user')
            }).catch(err => console.log(err))
        }
    }
}
</script>
