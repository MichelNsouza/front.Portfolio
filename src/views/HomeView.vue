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

        <div class="row m-1">
          <div class="bg-conteudo card d-flex align-items-center justify-content-center">
            <div class="card-body">
              <h1 class="text-center mb-3 fs-1">Olá, Mundo!</h1>
              <p>Nos últimos anos venho me especializando em desenvolvimento web Full Stack, atualmente estou mantendo meu foco nos Frameworks Laravel (PHP) e Vue.JS (Javascript). Dentre minhas habilidades destaco a facilidade na construção de interfaces web com HTML e CSS, a componentização e a programação reativa com Vue.js e a construção de APIs REST com Laravel e MySQL</p>
            </div>
          </div>
        </div>

        <div class="row bg-conteudo rounded mx-1 my-3 py-3 fs-6">
          <p class="text-center mb-3 fs-1">Meus Projetos</p>
          <div v-for="projeto in todosProjetos" :key="projeto.id" class="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex align-items-center justify-content-center">
            <CardComponente :projeto="projeto" />
          </div>
        </div>

        <div class="row m-1 mb-3 fs-4">
          <div class="bg-conteudo card d-flex align-items-center justify-content-center">
            <div class="card-body">
              <p class="text-center mb-3 fs-1">Contato</p>
              <div class="d-flex flex-lg-row flex-sm-column gap-2">
                <a class="no-underline-link m-lg-3" href="https://www.linkedin.com/in/michel-n-souza/" target="_blank"><i class="bi bi-linkedin"></i> Vamos nos conectar?</a>
                <a class="no-underline-link m-lg-3" href="https://github.com/MichelNsouza" target="_blank"><i class="bi bi-github"></i> GitHub</a>
                <a class="no-underline-link m-lg-3" href="mailto:michelnsouza98@gmail.com?Subject=Olá Michel, vamos conversar! ?Body=Me manda uma mensagem :)" target="_blank"><i class="bi bi-envelope"></i> Michelnsouza98@gmail.com</a>
                <a class="no-underline-link m-lg-3" href="https://wa.me/5571993125797/?text=Oi+Michel%2C+vim+atrav%C3%A9s+de+seu+portf%C3%B3lio%2C+vamos+conversar%3F%21" target="_blank"><i class="bi bi-whatsapp"></i> WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-conteudo{
  background-color:#ecf0f1;
  text-decoration: none;
}
.no-underline-link {
    text-decoration: none; 
    color: inherit; 
}

.no-underline-link:hover {
    color: blue; 
}
</style>