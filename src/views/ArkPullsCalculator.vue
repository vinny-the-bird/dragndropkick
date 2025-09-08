<template>
  <div class="container global-frame">
    <h1 class="title is-4">Arknights Pulls Calculator</h1>
    <br />
    <!-- <div> -->
    <h2 class="subtitle is-5">
      <strong>How to use:</strong> Simply check your in-game currencies and
      enter your numbers below. It will calculate your number of pulls on the
      fly.
      <HelpModalArk :modalButtonName="modalButtonName" />
    </h2>
    <!-- </div> -->
    <div class="box">
      <br />
      <div class="container">
        <button class="button" @click="resetFields">Reset all fields</button>
      </div>
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
                    placeholder="0"
                    min="0"
                    step="1"
                    inputmode="numeric"
                    @keydown="blockInvalidInput"
                    @paste="handlePaste"
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
                    placeholder="0"
                    min="0"
                    step="1"
                    inputmode="numeric"
                    @keydown="blockInvalidInput"
                    @paste="handlePaste"
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
                    placeholder="0"
                    min="0"
                    step="1"
                    inputmode="numeric"
                    @keydown="blockInvalidInput"
                    @paste="handlePaste"
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
                    placeholder="0"
                    min="0"
                    step="1"
                    inputmode="numeric"
                    @keydown="blockInvalidInput"
                    @paste="handlePaste"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <h3 class="subtitle is-4">Results</h3> -->
      <!-- <p>Total Pulls from Orundum + Originite Prime = {{ totalPullsFromOrundum }}</p>
      <p>Total Pulls from Permits = {{ totalPullsFromPermits }}</p> -->
      <p class="is-size-5" v-if="totalPulls >= 300">
        TOTAL PULLS = {{ totalPulls }} /300 - Congrats! You have
        {{ totalPulls - 300 }} extra pulls!
      </p>
      <p class="is-size-5" v-else="totalPulls >= 300">
        TOTAL PULLS = {{ totalPulls }} /300 (Missing: {{ 300 - totalPulls }} to
        reach 300)
      </p>
    </div>
  </div>
</template>

<script setup>
import HelpModalArk from "@/components/HelpModalArk.vue";
import { ref, computed } from "vue";

const modalButtonName = "Where can I find my currencies?";
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

function blockInvalidInput(e) {
  const allowedKeys = [
    "Backspace",
    "Tab",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Delete",
  ];
  const isDigit = /^[0-9]$/.test(e.key);

  if (!isDigit && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
}

function handlePaste(e) {
  const text = e.clipboardData.getData("text");
  if (!/^\d+$/.test(text)) {
    e.preventDefault();
  }
}
</script>

<style scoped>
.global-frame {
  padding: 0rem 2rem;
}
</style>
