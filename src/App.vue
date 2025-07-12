<template>
  <header>
<NavBar />
  </header>
  <main>
<br><br>
<RouterView />


  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
.box {
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>
