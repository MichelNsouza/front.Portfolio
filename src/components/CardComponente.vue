<template>
  <div class="card m-1 bg-light shadow" style="width: 18rem;">
    <img :src="projeto.CaminhoImagem" class="card-img-top" alt="Imagem do projeto">
    <div class="card-body fixed-height">
      <h5 class="card-title">{{ projeto.titulo }}</h5>
      <p class="card-text">{{ projeto.descricao }}</p>
      <p class="card-text"><strong>Tecnologias:</strong> {{ projeto.tecnologias }}</p>
    </div>
    <div class="card-body d-flex justify-content-between ">
      <a :href="projeto.linkCodigoFonte" class="card-link btn btn-md btn-block btn-outline-primary" target="_blank">Código Fonte</a>
      <a :href="projeto.linkDeploy" class="card-link btn btn-md btn-block btn-outline-primary" target="_blank">Ver Online</a>
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
  height: 200px; 
  overflow-y: auto;
}
</style>
