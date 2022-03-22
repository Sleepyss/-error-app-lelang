<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>
                <div class="container-fluid">
                    <h1 class="h3 mb-4 text-gray-800">Data Transaksi</h1>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <router-link to="/transaksi/tambah" class="btn btn-info btn-icon-split">
                                            <span class="icon text-white-50">
                                                <i class="fas fa-plus"></i>
                                            </span>
                                            <span class="text">Tambah</span>
                                        </router-link>
                                        <table class="table table bordered mt-3" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>ID Lelang</th>
                                                    <th>ID Petugas</th>
                                                    <th>ID Barang</th>
                                                    <th>ID Masyarakat</th>
                                                    <th>Harga Barang</th>
                                                    <th>Tanggal Transaksi</th>
                                                    <th>Pembayaran</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(t, index) in transaksi" :key="index">
                                                    <td>{{ index + 1 }}</td>
                                                    <td>{{ t.id_lelang }}</td>
                                                    <td>{{ t.id_petugas }}</td>
                                                    <td>{{ t.id_barang }}</td>
                                                    <td>{{ t.id_masyarakat }}</td>
                                                    <td>{{ t.hargabarang }}</td>
                                                    <td>{{ t.tgl_transaksi | moment("DD/MM/YYYY") }}</td>
                                                    <td>
                                                        <span v-if="t.pembayaran == 'sudah'" class="badge bg-success text-light">Sudah</span>
                                                        <span v-if="t.pembayaran == 'belum'" class="badge bg-danger text-dark">Belum</span>
                                                    </td>
                                                    <td>
                                                        <router-link class="btn btn-success btn-circle mr-1" :to="{name : 'detailtransaksi', params : {id : t.id_transaksi}}">
                                                            <i class="far fa-eye"></i>
                                                        </router-link>
                                                        <router-link class="btn btn-success btn-circle mr-1" :to="{name : 'edittransaksi', params : {id : t.id_transaksi}}">
                                                            <i class="fas fa-pen"></i>
                                                        </router-link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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
            transaksi : {}
        }
    },
    created() {
        this.axios.get('http://localhost/lelangOn/public/api/transaksi').then(res => {
            this.transaksi = res.data.data
        }).catch(err => console.log(err))
    },
    methods : {

    }
}
</script>