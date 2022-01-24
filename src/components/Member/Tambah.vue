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
                                <h6 class="m-0 font-weight-bold text-primary">Tambah Data Member</h6>
                            </div>
                            <div class="card-body">
                                <form @submit.prevent="tambah">
                                    <div class="form-group">
                                        <label>Nama</label>
                                        <input type="text" class="form-control" v-model="users.nama">
                                    </div>
                                    <div class="form-group">
                                        <label>Username</label>
                                        <input type="text" class="form-control" v-model="users.username">
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="text" class="form-control" v-model="users.password">
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
                                            <label class="btn btn-secondary">
                                                <input type="radio" value="L" v-model="users.jenis_kelamin"> Laki-laki
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" value="P" v-model="users.jenis_kelamin"> Perempuan
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Nomor Telepon</label>
                                        <input type="text" class="form-control" v-model="users.telephone">
                                    </div>
                                    <div class="form-group">
                                        <div>
                                            <label>Level</label>
                                        </div>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-secondary">
                                                <input type="radio" value="admin" v-model="users.level"> Admin
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" value="petugas" v-model="users.level"> Petugas
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" value="masyarakat" v-model="users.level"> Masyarakat
                                            </label>
                                        </div>
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
    methods : {
        tambah() {
            this.axios.post('http://localhost/lelangOn/public/api/user/add',this.users).then(() => {
                this.$router.push('/user')
            }).catch(err => console.log(err))
        }
    }
}
</script>