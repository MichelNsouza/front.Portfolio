<script>
import {RouterView } from 'vue-router';
import FooterComponente from '@/components/FooterComponente.vue';
import HeaderComponente from '@/components/HeaderComponente.vue';
import LoadingComponente from '@/components/LoadingComponente.vue';

export default {
  components: {
    HeaderComponente,
    FooterComponente,
    LoadingComponente
  }
}

</script>

<template>

  <!-- <LoadingComponente /> --> 
  
  <HeaderComponente />

  <main class="content bg-fundo pt-3">
    <router-view />
  </main>

  <FooterComponente />

</template>

<style scoped>
.bg-fundo{
  background-color:#2c3e50;
}
  html {
  /*scroll-behavior: smooth;*/
}
.content {
  width: 100%;
  min-height: calc(100vh - 100px);
}
.modal {
  z-index: 1050; /* Z-index alto para garantir que o modal esteja sobre todo o conteúdo */
}
</style>
