<script>
import { ref } from 'vue';
import { criarProjeto } from '@/services/apiController.js';

export default {
  setup() {
    const titulo = ref('');
    const descricao = ref('');
    const tecnologias = ref('');
    const linkCodigoFonte = ref('');
    const linkDeploy = ref('');
    const CaminhoImagem = ref(null);

    const onFileChange = (e) => {
      CaminhoImagem.value = e.target.files[0];
    };

    const enviarProjeto = async () => {
      try {
        const formData = new FormData();
        formData.append('titulo', titulo.value);
        formData.append('descricao', descricao.value);
        formData.append('tecnologias', tecnologias.value);
        formData.append('linkCodigoFonte', linkCodigoFonte.value);
        formData.append('linkDeploy', linkDeploy.value);
        formData.append('CaminhoImagem', CaminhoImagem.value);

        const response = await criarProjeto(formData);

        if (response.status === 200) {
          console.log('Projeto criado:', response.data);
        } else {
          console.error('Falha ao criar projeto:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao criar projeto:', error);
      }
    };

    return {
      titulo,
      descricao,
      tecnologias,
      linkCodigoFonte,
      linkDeploy,
      CaminhoImagem,
      onFileChange,
      enviarProjeto
    };
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="enviarProjeto" class="mt-5 p-5 border border-success">
      <h1>Enviar Projeto</h1>
      <div>
        <label class="form-label" for="titulo">Título:</label>
        <input class="form-control" type="text" id="titulo" v-model="titulo" required>
      </div>
      <div>
        <label class="form-label" for="descricao">Descrição:</label>
        <input class="form-control" type="text" id="descricao" v-model="descricao" required>
      </div>
      <div>
        <label class="form-label" for="tecnologias">Tecnologias:</label>
        <input class="form-control" type="text" id="tecnologias" v-model="tecnologias" required>
      </div>
      <div>
        <label class="form-label" for="linkCodigoFonte">Link do Código Fonte:</label>
        <input class="form-control" type="text" id="linkCodigoFonte" v-model="linkCodigoFonte" required>
      </div>
      <div>
        <label class="form-label" for="linkDeploy">Link de Deploy:</label>
        <input class="form-control" type="text" id="linkDeploy" v-model="linkDeploy" required>
      </div>
      <div>
        <label class="form-label" for="file">Imagem:</label>
        <input class="form-control" type="file" id="file" @change="onFileChange" required>
      </div>
      <button type="submit">Enviar Projeto</button>
    </form>
  </div>
</template>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
}

input[type="text"],
input[type="file"] {
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
}
</style>
