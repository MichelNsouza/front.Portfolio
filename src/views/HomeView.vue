<script>
import CardComponente from '@/components/CardComponente.vue';
import {todosProjetos} from '@/services/apiController.js';

export default {
  components: {
    CardComponente
  },
  data() {
    return {
      todosProjetos:[]
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route'() {
      this.fetchData();
    },
  },
  methods: {
    async fetchData() {
      try {
        const responseTodosProjetos = await todosProjetos();
        this.todosProjetos = responseTodosProjetos.data.projetos;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="row">
          <div v-for="projeto in todosProjetos" :key="projeto.id" class="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex align-items-center justify-content-center">
            <CardComponente :projeto="projeto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>