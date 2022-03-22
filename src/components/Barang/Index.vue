<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>
                <div class="container-fluid">
                    <h1 class="h3 mb-4 text-gray-800">Data Barang</h1>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <router-link to="/barang/tambah" class="btn btn-info btn-icon-split">
                                        <span class="icon text-white-50">
                                            <i class="fas fa-plus"></i>
                                        </span>
                                        <span class="text">Tambah</span>
                                        </router-link>
                                        <table class="table table-bordered mt-3" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Nama Barang</th>
                                                    <th>Tanggal Barang</th>
                                                    <th>Deskripsi</th>
                                                    <th>Harga</th>
                                                    <th>Image Barang</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(b, index) in barang" :key="index">
                                                    <td>{{ index + 1 }}</td>
                                                    <td>{{ b.nama_barang }}</td>
                                                    <td>{{ b.tgl_barang }}</td>
                                                    <td>{{ b.deskripsi }}</td>
                                                    <td>{{ b.harga }}</td>
                                                    <td>
                                                        <img :src="b.img_barang" alt="Image" width="70px" height="70px">
                                                    </td>
                                                    <td>
                                                        <router-link :to="{ name : 'detailbarang', params : { id : b.id_barang }}" class="btn btn-success btn-circle">
                                                            <i class="far fa-eye"></i>
                                                        </router-link>
                                                        <router-link :to="{name : 'editbarang', params : { id : b.id_barang }}" class="btn btn-warning btn-circle">
                                                            <i class="fas fa-pen"></i>
                                                        </router-link>
                                                        <button type="button" @click="hapus(b.id_barang)" class="btn btn-danger btn-circle">
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
            barang : {},
        }
    },
    created() {
        this.axios.get('http://localhost/lelangOn/public/api/barang').then(res => {
            this.barang = res.data
        })
    },
    methods : {
        hapus(id) {
            this.axios.delete(`http://localhost/lelangOn/public/api/barang/delete/${id}`).then(() => {
                let i = this.barang.map(item => item.id_barang).indexOf(id)
                this.barang.splice(i, 1)
            })
        },
    }
}
</script>