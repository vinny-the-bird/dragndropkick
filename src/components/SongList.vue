<template>
  <ul class="song-list">
    <li
      v-for="song in songs"
      :key="song.title"
      :class="{ active: song === currentSong }"
      @click="$emit('selectSong', song)"
    >
      {{ song.title }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  songs: Array,
  currentSong: Object
})
</script>

<style scoped>
.song-list {
  list-style: none;
  padding: 0;
}
.song-list li {
  padding: 0.5rem;
  margin: 0.2rem 0;
  cursor: pointer;
  border-radius: 8px;
  background: #2a2a2a;
  color: aliceblue;
}
.song-list li:hover {
  background: #444;
}
.song-list li.active {
  background: #007aff;
}
</style>
