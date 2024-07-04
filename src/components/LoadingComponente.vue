<template>
  <div v-if="isLoading" class="modal d-block position-fixed top-0 start-0 end-0 bottom-0 bg-primary-subtle" tabindex="-1">
    
    <div class="d-flex justify-content-center align-items-center h-100">

      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">A pagina esta carregando...</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>

<style scoped>
</style>
