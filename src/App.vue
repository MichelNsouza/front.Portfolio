<script setup>
import {RouterView } from 'vue-router';

import FooterComponente from '@/components/FooterComponente.vue';
import HeaderComponente from '@/components/HeaderComponente.vue';

</script>

<template>

  <HeaderComponente />

  <main class="content">
    <router-view />
  </main>

  <FooterComponente />

</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
.content {
  width: 100%;
  min-height: calc(100vh - 100px);
}
</style>
