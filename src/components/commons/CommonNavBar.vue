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
                <!-- img -->
                <!-- <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="16" alt="MDB Logo"
                    loading="lazy" style="margin-top: -1px;" /> -->
            </RouterLink>

            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse justify-content-between" id="navbarButtons">
                <!-- Left links -->
                <ul class="navbar-nav mb-2 mb-lg-0">

                    <!-- <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'home' }">홈</RouterLink>
                    </li> -->

                    <li class="nav-item fw-bold fs-6">
                        <RouterLink class="nav-link" :to="{ name: 'attraction' }">여행지</RouterLink>
                    </li>

                    <li class="nav-item fw-bold fs-6">
                        <RouterLink class=" nav-link" :to="{ name: 'planner' }">플래너</RouterLink>
                    </li>

                    <li class="nav-item fw-bold fs-6">
                        <RouterLink class=" nav-link" :to="{ name: 'tour' }">투어</RouterLink>
                    </li>
                </ul>
                <!-- Left links -->

                <!-- Center Home Link Image  -->
                <div class="d-flex align-items-center justify-content-center align-self-stretch">
                    <RouterLink :to="{ name: 'home' }">
                        <img src="" alt="프로젝트 로고" />
                    </RouterLink>

                </div>

                <!-- Center Home Link Image  -->



                <!-- Login Button -->
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