<script>
export default {
  props: {
    projeto: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
    <div class="card m-1" style="width: 18rem;">
    <img :src="projeto.CaminhoImagem" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{projeto.titulo}}</h5>
        <p class="card-text">{{projeto.descricao}}</p>
        <p class="card-text">{{projeto.tecnologias}}</p>
    </div>
    <div class="card-body">
        <a :href="projeto.linkCodigoFonte" class="card-link" target="_blank">Codigo Fonte</a>
        <a :href="projeto.linkDeploy" class="card-link" target="_blank">Deploy</a>
    </div>
    </div>
</template>

<style scoped>

</style>
