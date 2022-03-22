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
                                <h6 class="m-0 font-weight-bold text-primary">Tambah Lelang</h6>
                            </div>
                            <div class="card-body">
                                <form @submit.prevent="tambah">
                                    <div class="form-group">
                                        <label>Barang </label>
                                        <select v-model="lelang.id_barang">
                                            <option v-for="(b, index) in barang" :key="index" :value="b.id_barang">
                                                {{b.nama_barang}}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Harga Akhir </label>
                                        <input type="text" class="form-control" v-model="lelang.harga_akhir">
                                    </div>
                                    <div class="form-group">
                                        <label>Petugas </label>
                                        <select v-model="lelang.id_petugas">
                                            <option v-for="(p, index) in user" :key="index" :value="p.id">
                                                {{p.nama}}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Masyarakat </label>
                                        <select v-model="lelang.id_masyarakat">
                                            <option v-for="(m, index) in masyarakat" :key="index" :value="m.id_masyarakat">
                                                {{m.nama_masyarakat}}
                                            </option>
                                        </select>
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
            lelang: {},
            masyarakat: {},
            barang : {},
            user : {},
        }
    },
    created() {
        this.axios.get('http://localhost/lelangOn/public/api/user').then(res => {
            this.user = res.data
        }).catch(err => console.log(err))

        this.axios.get('http://localhost/lelangOn/public/api/barang').then(res => {
            this.barang = res.data
        }).catch(err => console.log(err))

        this.axios.get('http://localhost/lelangOn/public/api/masyarakat').then(res => {
            this.masyarakat = res.data
            console.log(JSON.stringify(this.masyarakat))
        }).catch(err => console.log(err))
    },
    methods : {
        tambah() {
            this.axios.post('http://localhost/lelangOn/public/api/lelang/store',this.lelang).then(() => {
                this.$router.push('/lelang')
            }).catch(err => console.log(err))
        }
    }
}
</script>