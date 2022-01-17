<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-text mx-3">Lelang Online</div>
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
        <li class="nav-item">
            <router-link to="/petugas" class="nav-link" href="index.html">
            <i class="fas fa-users"></i>
            <span>Petugas</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/barang" class="nav-link" href="index.html">
            <i class="fas fa-tshirt"></i>
            <span>Barang</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/transaksi" class="nav-link" href="index.html">
            <i class="fas fa-file-invoice-dollar"></i>
            <span>Barang</span>
            </router-link>
        </li>
    </ul>
</template>