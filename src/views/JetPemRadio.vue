<template>

      <div class="container global-frame">
    <h1 class="title is-4">Jet Pem Radio</h1>
    <button class="button" @click="playSonicRing">Insert Coin</button>
    <MusicPlayer />
    </div>

</template>

<script setup>
import MusicPlayer from '@/components/MusicPlayer.vue';

var sonicRing = new Audio("/sounds/26f8b9_sonic_ring_sound_effect.mp3");

function playSonicRing() {
  sonicRing.play();
}

</script>

<style scoped>
.global-frame {
  padding: 0rem 2rem;
}
</style>