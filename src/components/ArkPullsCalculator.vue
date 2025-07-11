<template>
  <div class="box">
    <h1 class="title is-4">Arknights Pulls Calculator</h1>
    <div class="fixed-grid">
      <div class="grid">
        <div class="cell">
          <div class="box">
            <label class="label" for="orundum">Orundum</label>
            <input
              v-model.number="orundum"
              type="number"
              min="0"
              placeholder="0"
            />
          </div>
        </div>
        <div class="cell">
          <div class="box">
            <label class="label" for="op">Originite Prime</label>
            <input v-model.number="op" type="number" min="0" placeholder="0" />
          </div>
        </div>
        <div class="cell">
          <div class="box">
            <label class="label" for="permitTen"
              >Ten-roll Headhunting Permit</label
            >
            <input
              v-model.number="permitTen"
              type="number"
              min="0"
              placeholder="0"
            />
          </div>
        </div>
        <div class="cell">
          <div class="box">
            <label class="label" for="permitSingle"
              >Single Headhunting Permit</label
            >
            <input
              v-model.number="permitSingle"
              type="number"
              min="0"
              placeholder="0"
            />
          </div>
        </div>
      </div>
    </div>
    <h3 class="subtitle">Results</h3>

    <p>Total Pulls from Orundum + OP = {{ totalPullsFromOrundum }}</p>
    <p>Total Pulls from Permits = {{ totalPullsFromPermits }}</p>
    <p>TOTAL PULLS = {{ totalPulls }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const orundum = ref(0);
const op = ref(0);
const permitTen = ref(0);
const permitSingle = ref(0);

const totalPullsFromOrundum = computed(() => {
  const safeOrundum = !orundum.value ? 0 : orundum.value;
  const safeOp = !op.value ? 0 : op.value;
  let totalOrundum = safeOrundum + safeOp * 180;
  return Math.floor(totalOrundum / 600);
});

const totalPullsFromPermits = computed(() => {
  const safePermitSingle = !permitSingle.value ? 0 : permitSingle.value;
  const safePermitTen = !permitTen.value ? 0 : permitTen.value;
  return safePermitSingle + safePermitTen * 10;
});

const totalPulls = computed(() => {
  return totalPullsFromOrundum.value + totalPullsFromPermits.value;
});
</script>

<style scoped></style>
