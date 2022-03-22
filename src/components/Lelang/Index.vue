<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>

                <div class="container-fluid">
                    <h1 class="h3 mb-4 text-gray-800">Data Lelang</h1>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <router-link to="/lelang/add" class="btn btn-info btn-icon-split">
                                        <span class="icon text-white-50">
                                            <i class="fas fa-plus"></i>
                                        </span>
                                        <span class="text">Tambah</span>
                                        </router-link>
                                        <table class="table table-bordered mt-3" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>ID Lelang</th>
                                                    <th>Nama Barang</th>
                                                    <th>Nama Petugas</th>
                                                    <th>Tanggal Lelang</th>
                                                    <th>Harga Akhir</th>
                                                    <th>Nama Masyarakat</th>
                                                    <th>Status</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(l, index) in lelang" :key="index">
                                                    <td>{{ index + 1 }}</td>
                                                    <td>{{ l.id_lelang }}</td>
                                                    <td>{{ l.nama_barang }}</td>
                                                    <td>{{ l.nama }}</td>
                                                    <td>{{ l.tgl_lelang }}</td>
                                                    <td>{{ l.harga_akhir }}</td>
                                                    <td>{{ l.nama_masyarakat }}</td>
                                                    <td>
                                                        <span v-if="l.status == 'berlangsung'" class="badge bg-success text-light">Berlangsung</span>
                                                        <span v-if="l.status == 'berhenti'" class="badge bg-danger text-dark">Berhenti</span>
                                                    </td>
                                                    <td>
                                                        <router-link :to="{ name : 'detaillelang', params : {id : l.id_lelang }}" class="btn btn-success btn-circle">
                                                            <i class="far fa-eye"></i>
                                                        </router-link>
                                                        <button type="button" @click="hapus(l.id_lelang)" class="btn btn-danger btn-circle">
                                                            <i class="fas fa-trash"></i>
                                                        </button>
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
            lelang : {},
        }
    },
    created() {
        this.axios.get('http://localhost/lelangOn/public/api/lelang').then(res => {
            this.lelang = res.data.data
        }).catch(err => console.log(err))

    },
    methods : {
        hapus(id) {
            this.axios.delete(`http://localhost/lelangOn/public/api/lelang/delete/${id}`).then(() => {
                let i = this.lelang.map(item => item.id_lelang).indexOf(id)
                this.lelang.splice(i, 1)
            })
        }
    }
}
</script>