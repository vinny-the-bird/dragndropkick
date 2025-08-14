<template>
  <div class="container">
    <h1 class="title is-4">The Longest Day</h1>

    <div class="container">
      <div class="box">
        <h1 class="subtitle is-4">Today is</h1>
        <h1 class="title is-5">{{ today }}</h1>
      </div>
      <div class="box">
        <h1 class="subtitle is-4">Certification Deadline in</h1>
        <h1 class="title is-5">{{ remainingTimeCda }}</h1>
      </div>
      <div class="box">
        <h1 class="subtitle is-4">Final Exam in</h1>
        <h1 class="title is-5">{{ remainingtTimeExam }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO: add tick every second = make it a dynamic clock
const today = new Date();
const currentTime = Date.now();

const deadlineExam = new Date(2026, 4, 26, 18);
const deadlineCda = new Date(2025, 10, 3, 18);

const msExam = deadlineExam - currentTime;
const msCda = deadlineCda - currentTime;

const remainingtTimeExam = formatRemainingTime(msExam);
const remainingTimeCda = formatRemainingTime(msCda);

function formatRemainingTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const displayedDate = [];
  if (days) displayedDate.push(`${days} day${days !== 1 ? "s" : ""}`);
  if (hours) displayedDate.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
  if (minutes)
    displayedDate.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
  if (seconds)
    displayedDate.push(`${seconds} second${seconds !== 1 ? "s" : ""}`);

  return displayedDate.join(", ");
}
</script>

<style scoped>
.container {
  padding: 2rem;
}
</style>
