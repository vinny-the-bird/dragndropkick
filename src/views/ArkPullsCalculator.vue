<template>
  <div class="box">
    <h1 class="title is-4">Arknights Pulls Calculator</h1>
    <button class="button" @click="resetFields">Reset all fields</button>
    <section class="section">
      <div class="container is-flex is-justify-content-left">
        <div class="fixed-grid">
          <div class="grid">
            <div class="cell">
              <div class="box">
                <img
                  src="\src\assets\Orundum.webp"
                  width="50%"
                  alt="A picture of red square orundum, a currency from the game."
                />
                <label class="label" for="orundum">Orundum</label>
                <input
                  v-model.number="orundum"
                  type="number"
                  min="0"
                  placeholder="0"
                  min-width="100px"
                />
              </div>
            </div>
            <div class="cell">
              <div class="box">
                <img
                  src="\src\assets\Originite_Prime.webp"
                  width="50%"
                  alt="A golden precious stone, the rarest of the in-game resources."
                />

                <label class="label" for="op">Originite Prime</label>
                <input
                  v-model.number="op"
                  type="number"
                  min="0"
                  placeholder="0"
                />
              </div>
            </div>
            <div class="cell">
              <div class="box">
                <img
                  src="\src\assets\Ten-roll_Headhunting_Permit.webp"
                  width="50%"
                  alt="A permit offering 10 headhunting pulls at once."
                />

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
                <img
                  src="\src\assets\Headhunting_Permit.webp"
                  width="50%"
                  alt="A single permit for headhunting, allows you to get one random operator."
                />

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
      </div>
    </section>
    <!-- <h3 class="subtitle">Results</h3> -->

    <p>Total Pulls from Orundum + OP = {{ totalPullsFromOrundum }}</p>
    <p>Total Pulls from Permits = {{ totalPullsFromPermits }}</p>
    <p v-if="totalPulls >= 300">
      TOTAL PULLS = {{ totalPulls }} /300 - Congrats! You have
      {{ totalPulls - 300 }} extra pulls!
    </p>
    <p v-else="totalPulls >= 300">
      TOTAL PULLS = {{ totalPulls }} /300 (Missing: {{ 300 - totalPulls }} to
      reach 300)
    </p>
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
  return (
    (totalPullsFromOrundum.value || 0) + (totalPullsFromPermits.value || 0)
  );
});

function resetFields() {
  orundum.value = 0;
  op.value = 0;
  permitTen.value = 0;
  permitSingle.value = 0;
}
</script>

<style scoped></style>
