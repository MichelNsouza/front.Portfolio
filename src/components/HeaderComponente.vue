<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
<nav class="navbar navbar-expand-lg bg-primary ">
  <div class="container-fluid">
    
    <span class="navbar-brand text-white" href="#">Portfólio Michel Souza</span>

    <div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active text-white" aria-current="page" :to="{ name: 'home'}" >Inicio</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white" :to="{ name: 'about'}" >Sobre mim</RouterLink>
        </li>
      </ul>
    </div>

    </div>
  </div>
</nav>
</template>

<style scoped>

</style>
