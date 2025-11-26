<template>
  <div class="box">
    <!-- <h2>Da Pembox</h2> -->
    <div class="columns">
      <div class="column">
        <div v-if="currentSong" class="box controls">
          <p>
            Now Playing: <strong>{{ currentSong.title }}</strong>
          </p>
          <br />
          <audio
            ref="audioRef"
            :src="currentSong.src"
            @play="onPlay"
            @pause="onPause"
            @ended="nextSong"
            controls
          ></audio>
          <div class="nav-buttons">
            <button class="button" @click="prevSong">Previous</button>
            <button class="button" @click="nextSong">Next</button>
          </div>
        </div>
        <div
          class="box dancingPem is-flex is-justify-content-center is-align-items-center"
        >
          <div
            v-if="isPlaying"
            class="is-flex is-justify-content-center is-align-items-center"
          >
            <img
              src="/gif/Pemmie.gif"
              width="35%"
              alt="Pem breakdancing when the music is pumping up"
            />
            <p class="side-feature is-italic">
              art & animation <br />
              by Eiki!
            </p>
          </div>
          <div v-else class="">
            <h2 class="title is-3">HOLD ON!!</h2>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="box">
          <SongList
            :songs="songs"
            :currentSong="currentSong"
            @selectSong="playSong"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import SongList from "./SongList.vue";

// const sampleSound = new Audio("../../public/music/sample-beat.mp3")

const songs = ref([]);
const currentIndex = ref(0);
const currentSong = ref(null);
const audioRef = ref(null);
const isPlaying = ref(false);

onMounted(() => {
  songs.value = [
    { title: "Nice loop", src: "/music/sample_loop.mp3" },
    {
      title: "Ocean breeze",
      src: "/music/sample_ocean-breeze.mp3",
    },
    { title: "The beat", src: "/music/sample-beat.mp3" },
    { title: "Nice loop", src: "/music/sample_loop.mp3" },
    {
      title: "Ocean breeze",
      src: "/music/sample_ocean-breeze.mp3",
    },
    { title: "The beat", src: "/music/sample-beat.mp3" },
    { title: "Nice loop", src: "/music/sample_loop.mp3" },
    {
      title: "Ocean breeze",
      src: "/music/sample_ocean-breeze.mp3",
    },
    { title: "The beat", src: "/music/sample-beat.mp3" },
    { title: "Nice loop", src: "/music/sample_loop.mp3" },
  ];
  currentSong.value = songs.value[0];
});

function onPlay() {
  isPlaying.value = true;
}

function onPause() {
  isPlaying.value = false;
}

function playSong(song) {
  currentSong.value = song;
  nextTick(() => {
    audioRef.value.play();
  });
}

function nextSong() {
  currentIndex.value = (currentIndex.value + 1) % songs.value.length;
  currentSong.value = songs.value[currentIndex.value];
  nextTick(() => {
    audioRef.value.play();
  });
}

function prevSong() {
  currentIndex.value =
    (currentIndex.value - 1 + songs.value.length) % songs.value.length;
  currentSong.value = songs.value[currentIndex.value];
  nextTick(() => {
    audioRef.value.play();
  });
}
</script>

<style scoped>
.player {
  /* max-width: 400px;
  margin: 0 auto;
  background: #1e1e1e;
  padding: 20px;
  border-radius: 16px; */
  display: flex;
  justify-content: space-around;
}
/* .controls {
  margin-top: 1rem;
} */
.nav-buttons {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-around;
}

.dancingPem {
  /* background-color: blueviolet; */
  min-height: 250px;
}

.side-feature {
  margin-left: 5%;
}
/* button {
  background: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background: #555;
} */
</style>
