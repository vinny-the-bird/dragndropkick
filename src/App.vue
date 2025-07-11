<template>
  <header>
    <div>
      <h1 class="title">Welcome to Drag'n'Dropkick</h1>
    </div>
    <h2 class="subtitle">'Throwing Stuff Since 1999'</h2>
  </header>

  <main>
    <!-- <img
      src="/src/assets/jamie_training.jpg"
      alt="Young Jamie doing Drunken Style training."
      width="100%"
    /> -->
    <br><br>
    <ArkPullsCalculator/>
  </main>
</template>

<script setup>
import ArkPullsCalculator from './components/ArkPullsCalculator.vue';
</script>

<style scoped>
body {
  background-color: cadetblue;
}
</style>
