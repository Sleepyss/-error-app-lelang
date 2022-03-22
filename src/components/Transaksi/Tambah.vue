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
                                    <form @submit.prevent="tambah">
                                        <div class="form-group">
                                            <label>Users</label>
                                            <select v-model="transaksi.id_masyarakat">
                                                <option v-for="(m, index) in masyarakat" :key="index" :value="m.id_masyarakat">
                                                    {{m.nama_masyarakat}}
                                                </option>
                                            </select>
                                            <label>ID Lelang</label>
                                            <select v-model="transaksi.id_lelang">
                                                <option v-for="(l, index) in lelang" :key="index" :value="l.id_lelang">
                                                    {{l.id_lelang}}
                                                </option>
                                            </select>
                                            <label>ID Barang</label>
                                            <select v-model="transaksi.id_barang">
                                                <option v-for="(b, index) in barang" :key="index" :value="b.id_barang">
                                                    {{b.id_barang}}
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
            </div>
            <footer-component></footer-component>
        </div>
    </div> 
</template>

<script>
export default {
    data() {
        return {
            masyarakat : {},
            lelang : {},
            transaksi : {},
            barang : {},
        }
    },
    created() {
        this.axios.get('http://localhost/lelangOn/public/api/masyarakat').then(res => {
            this.masyarakat = res.data
        }).catch((err) => console.log(err))
        this.axios.get('http://localhost/lelangOn/public/api/lelang').then(res => {
            this.lelang = res.data.data
        }).catch((err) => console.log(err))
        this.axios.get('http://localhost/lelangOn/public/api/barang').then(res => {
            this.barang = res.data
        }).catch((err) => console.log(err))
    },
    methods : {
        tambah() {
            this.axios.post('http://localhost/lelangOn/public/api/transaksi/store', this.transaksi).then(() => {
                this.$router.push('/transaksi')
            }).catch(err => console.log(err))
        }

    } 
}
</script>