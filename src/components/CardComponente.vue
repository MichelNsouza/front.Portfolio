<template>
  <div class="card m-1" style="width: 18rem;">
    <img :src="projeto.CaminhoImagem" class="card-img-top" alt="Imagem do projeto">
    <div class="card-body fixed-height">
      <h5 class="card-title">{{ projeto.titulo }}</h5>
      <p class="card-text">{{ projeto.descricao }}</p>
      <p class="card-text"><strong>Tecnologias:</strong> {{ projeto.tecnologias }}</p>
    </div>
    <div class="card-body">
      <a :href="projeto.linkCodigoFonte" class="card-link" target="_blank">Código Fonte</a>
      <a :href="projeto.linkDeploy" class="card-link" target="_blank">Deploy</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projeto: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card-img-top {
  height: 180px;
  object-fit: cover;
}

.fixed-height {
  height: 200px; /* Ajuste conforme necessário */
  overflow-y: auto;
}
</style>
