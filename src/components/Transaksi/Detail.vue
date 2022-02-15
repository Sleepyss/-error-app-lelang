<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="row">
                                <div class="col">
                                    <div class="card border-left-primary shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="text-xs font-weight-bold text-primary text-uppercase">ID Lelang</div>
                                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{transaksi.id_lelang}}</div>
                                                            <div class="text-xs font-weight-bold text-primary text-uppercase">ID Petugas</div>
                                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{transaksi.id_petugas}}</div>
                                                            <div class="text-xs font-weight-bold text-primary text-uppercase">ID Barang</div>
                                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{transaksi.id_barang}}</div>
                                                            <div class="text-xs font-weight-bold text-primary text-uppercase">ID Masyarakat</div>
                                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{transaksi.id_masyarakat}}</div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Harga Penawaran</div>
                                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{transaksi.hargabarang}}</div>
                                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Tanggal Transaksi</div>
                                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{transaksi.tgl_transaksi | moment("DD/MM/YYYY")}}</div>
                                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Pembayaran</div>
                                                            <div v-if="transaksi_pembayaran == 'belum'" class="h6 mb-0 font-weight-bold text-gray-800 mb-2">Belum dibayar</div>
                                                            <div v-else class="h6 mb-0 font-weight-bold text-gray-800 mb-2">Sudah dibayar</div>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-3">
                                                        <div class="col">
                                                            <button type="button" class="btn btn-warning">Ubah Status Laundry</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Detail Transaksi</h6>
                                </div>
                                <div class="card-body">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Jenis</th>
                                                <th>Jumlah (kg / satuan)</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                    </table>
                                    <button type="button" class="btn btn-success mr-3">Bayar</button>
                                    <router-link :to="{name :'tambahdetail', params : { id : this.id_transaksi }}" class="btn btn-primary">
                                        Tambah Detail Transaksi
                                    </router-link>
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
            id_transaksi : this.$route.params.id,
            transaksi : {},
            detail : {},
            total : ''
        }
    },
    created() {
        this.axios.get(`http://localhost/lelangOn/public/api/transaksi/${this.id_transaksi}`).then(res => {
            this.transaksi = res.data
        }).catch(err => console.log(err))
        
    },
    computed : {
        
    },
    methods : {

    }
}
</script>