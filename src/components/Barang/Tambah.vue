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
                                <h6 class="m-0 font-weight-bold text-primary">Tambah Data Barang</h6>
                            </div>
                            <div class="card-body">
                                <form @submit.prevent="tambah">
                                    <div class="form-group">
                                        <label>Nama Barang</label>
                                        <input type="text" class="form-control" v-model="barang.nama_barang">
                                    </div>
                                    <div class="form-group">
                                        <label>Tanggal Barang</label>
                                        <input type="date" class="form-control" v-model="barang.tgl_barang">
                                    </div>
                                    <div class="form-group">
                                        <label>Harga</label>
                                        <input type="text" class="form-control" v-model="barang.harga">
                                    </div>
                                    <div class="form-group">
                                        <label>Deskripsi</label>
                                        <textarea rows="4" class="form-control" v-model="barang.deskripsi"></textarea>
                                    </div>
                                    <!-- <div class="form-group">
                                        <label>Image Barang</label>
                                        <input type="file" class="form-control" v-model="barang.img_barang">
                                    </div> -->
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
            barang: {}
        }
    },
    methods : {
        tambah() {
            this.axios.post('http://localhost/lelangOn/public/api/barang/store',this.barang).then(() => {
                this.$router.push('/barang')
            }).catch(err => console.log(err))
        }
    }
}
</script>