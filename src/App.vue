<script setup>
  import { RouterView } from "vue-router";
  import CommonNavBar from "./components/commons/CommonNavBar.vue";
  // import CommonSideBar from "./components/commons/CommonSideBar.vue";
  import CommonFooter from "./components/commons/CommonFooter.vue";



</script>

<template>
  <CommonNavBar />
  <div class="container-fluid flex-grow-1 d-flex align-content-center justify-content-center">
    <div class="row">
      <!-- <MainLayout></MainLayout> -->
      <RouterView></RouterView>
    </div>
  </div>
  <CommonFooter />
</template>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container-fluid {
    flex: 1;
  }

  .row {
    min-height: calc(100vh - 130px);
    /* Adjusts for navbar and footer height */
  }
</style>
