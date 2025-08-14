<template>
  <div class="container">
    <h1 class="title is-4">The Longest Day</h1>

    <div class="container">
      <div class="container" style="padding: 2rem">
        <h1 class="subtitle is-4">Today we are</h1>
        <h1 class="title is-5">{{ date }}</h1>
        <br />
        <h1 class="subtitle is-4">Deadline CDA</h1>
        <h1 class="title is-5">{{ remainingTimeCda }}</h1>
        <br />
        <h1 class="subtitle is-4">Time remaining</h1>
        <h1 class="title is-5">{{ remainingtTimeFinal }}</h1>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { ref } from "vue";


const date = new Date();
console.log(date);


const currentTime = Date.now();

const goalDate = new Date(2026, 4, 26);

// const goalDateTime = goalDate.getTime();

const deadlineCda = new Date(2025, 10, 3);

const msFinal = goalDate - currentTime;
const msCda = deadlineCda - currentTime;

const remainingtTimeFinal = formatRemainingTime(msFinal);
const remainingTimeCda = formatRemainingTime(msCda);

function formatRemainingTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts = [];
  if (days) parts.push(`${days} day${days !== 1 ? "s" : ""}`);
  if (hours) parts.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
  if (minutes) parts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
  if (seconds) parts.push(`${seconds} second${seconds !== 1 ? "s" : ""}`);

  return parts.join(", ");
}

</script>
<style scoped></style>
