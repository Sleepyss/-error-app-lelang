<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon">
                <i class="fas fa-balance-scale"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Lelang<sup>Online</sup></div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
            <router-link to="/" class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
            </router-link>
        </li>
        <li v-if="isAdmin" class="nav-item">
            <router-link to="/user" class="nav-link" href="index.html">
            <i class="fas fa-users"></i>
            <span>Member</span>
            </router-link>
        </li>
        <li v-if="isAdmin||isPetugas" class="nav-item">
            <router-link to="/barang" class="nav-link" href="index.html">
            <i class="fas fa-tshirt"></i>
            <span>Barang</span>
            </router-link>
        </li>
        <li v-if="isAdmin||isMasyarakat" class="nav-item">
            <router-link to="/transaksi" class="nav-link" href="index.html">
            <i class="fas fa-file-invoice-dollar"></i>
            <span>Transaksi</span>
            </router-link>
        </li>
        <li v-if="isAdmin||isPetugas" class="nav-item">
            <router-link class="nav-link" to="/report">
                <i class="far fa-file-alt"></i>
                <span>Report</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            isAdmin : false,
            isPetugas : false,
            isMasyarakat : false
        }
    },
    created() {
        var user = JSON.parse(this.$store.state.datauser)
        var level = user.level

        if(level == 'admin') this.isAdmin = true
        else if (level == 'petugas') this.isPetugas = true
        else this.isMasyarakat = true
    }
}
</script>