<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>
                <div class="container-fluid">
                    <h1 class="h3 mb-4 text-gray-800">Detail Lelang</h1>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Data Lelang</h6>
                                </div>
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-md-4 text-center">
                                            <i class="far fas fa-box-open fa-7x text-gray-300"></i>
                                        </div>
                                        <div class="col py-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase">ID Lelang</div>
                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{lelang.id_lelang}}</div>
                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Nama Barang</div>
                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{lelang.nama_barang}}</div>
                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Nama Petugas</div>
                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{lelang.nama}}</div>
                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Tanggal Lelang</div>
                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{lelang.tgl_lelang}}</div>
                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Harga Akhir</div>
                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{lelang.harga_akhir}}</div>
                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Nama Masyarakat</div>
                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{lelang.nama_masyarakat}}</div>
                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Status</div>
                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{lelang.status}}</div>
                                        </div>
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
            lelang : {}
        }
    },
    created() {
        this.axios.get(`http://localhost/lelangOn/public/api/lelang/${this.$route.params.id}`).then((res) => {
            this.lelang= res.data
        }).catch(err => console.log(err))
    }
}
</script>