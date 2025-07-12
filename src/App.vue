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
import ArkPullsCalculator from './views/ArkPullsCalculator.vue';
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped>
.box {
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>
