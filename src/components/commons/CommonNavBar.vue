<script setup>
    import { RouterLink } from "vue-router";
</script>

<template>
    <!-- Navbar -->
    <header class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <!-- Container wrapper -->
        <div class="container">
            <!-- Navbar brand -->
            <RouterLink class="navbar-brand me-2" :to="{ name: 'home' }">
                <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="16" alt="MDB Logo"
                    loading="lazy" style="margin-top: -1px;" />
            </RouterLink>

            <!-- Toggle button -->
            <button data-mdb-collapse-init class="navbar-toggler" type="button" data-mdb-target="#navbarButtonsExample"
                aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="navbarButtonsExample">
                <!-- Left links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'home' }">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'about' }">About</RouterLink>
                    </li>
                </ul>
                <!-- Left links -->

                <div class="d-flex align-items-center justify-content-center align-self-stretch">
                    <button data-mdb-ripple-init type="button" class="btn btn-outline-primary">
                        로그인 및 회원가입
                    </button>
                </div>
            </div>
            <!-- Collapsible wrapper -->
        </div>
        <!-- Container wrapper -->
    </header>
    <!-- Navbar -->
</template>

<style scoped></style>