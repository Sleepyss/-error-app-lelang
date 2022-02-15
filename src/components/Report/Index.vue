<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrappper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>
                <div class="container-fluid">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Cetak Report Transaksi</h6>
                        </div>
                        <div class="card-body">
                            <form class="form-group" @submit.prevent="tampil">
                                <label>Bulan</label>
                                <select class="form-control" v-model="report.bulan">
                                    <option value="01">Januari</option>
                                    <option value="02">Februari</option>
                                    <option value="03">Maret</option>
                                    <option value="04">April</option>
                                    <option value="05">Mei</option>
                                    <option value="06">Juni</option>
                                    <option value="07">Juli</option>
                                    <option value="08">Agustus</option>
                                    <option value="09">September</option>
                                    <option value="10">Oktober</option>
                                    <option value="11">November</option>
                                    <option value="12">Desember</option>
                                </select>
                                <label>Tahun</label>
                                <select class="form-control" v-model="report.tahun">
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                </select>
                                <button type="submit" class="btn btn-sm btn-info">Tampilkan</button>
                            </form>
                            <div class="report">
                                <VueHtml2pdf 
                                    :show-layout="true"
                                    :float-layout="false"
                                    :enable-download="true"
                                    :preview-modal="true"
                                    :paginate-elements-by-height="1400"
                                    filename="report_transaksi"
                                    :pdf-quality="2"
                                    :manual-pagination="false"
                                    pdf-format="a4"
                                    pdf-orientaion="potrait"
                                    pdf-content-width="800px"
                                    ref="html2Pdf"
                                >
                                    <section slot="pdf-content">
                                        <h1>Report Transaksi</h1>
                                        <h3>Lelang Online</h3>
                                        <h5>http://lelangonline.com</h5>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Nama Barang</th>
                                                    <th>Nama Masyarakat</th>
                                                    <th>Nama Petugas</th>
                                                    <th>Tanggal Pembayaran</th>
                                                    <th>Total Bayar</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(t, index) in transaksi" :key="index">
                                                    <td>{{ index + 1}}</td>
                                                    <td>{{ t.nama_barang }}</td>
                                                    <td>{{t.nama_masyarakat}}</td>
                                                    <td>{{t.nama_petugas}}</td>
                                                    <td>{{t.tgl_transaksi | moment("DD/MM/YYYY")}}</td>
                                                    <td>Rp {{t.hargabarang}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </section>
                                </VueHtml2pdf>
                                <button type="button" @click="generateReport">Buat Report</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1,h3,h5 {text-align : center; }
.report {
    width: 800px;
    margin : 20px auto 0 auto;
}
table {
    margin: 25px 20px;
    border-collapse: collapse;
    width: 760px;
}
thead tr {
    background-color: #5465FF;
    color: white;
    text-align: left;
}
</style>