<script setup>
  import { RouterView } from "vue-router";
  import CommonNavBar from "./components/common/CommonNavBar.vue";
  import CommonFooter from "./components/common/CommonFooter.vue";
</script>

<template>
  <CommonNavBar />
  <RouterView></RouterView>
  <!-- <MainLayout></MainLayout> -->
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
