<template>
  <div class="container global-frame">
    <h1 class="title is-4">
      Arknights Pulls Calculator <br />
      <span class="is-size-6"> (So Easy Even Yo Grandma Can Use It!) </span>
    </h1>
    <!-- <h3 class="sutitle is-5">So easy</h3> -->
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
        <!-- <div class="container is-flex"> -->
        <!-- <div> -->
        <div v-if="totalPulls < 50" class="container is-flex">
          <div>
            <img
              src="\src\assets\ark\1_lappy_0-49.png"
              alt=""
              title=""
              class="image is-128x128"
            />
          </div>
          <div>
            <p>"Is that so?"</p>
          </div>
        </div>

        <div
          v-else-if="totalPulls >= 50 && totalPulls < 100"
          class="container is-flex"
        >
          <div>
            <img
              src="\src\assets\ark\2_shu_50-99.png"
              alt=""
              title=""
              class="image is-128x128"
            />
          </div>
          <div>
            <p>"Please feed me."</p>
          </div>
        </div>

        <div
          v-else-if="totalPulls >= 100 && totalPulls < 150"
          class="container is-flex"
        >
          <div>
            <img
              src="\src\assets\ark\3_reed_100-149.png"
              alt=""
              title=""
              class="image is-128x128"
            />
          </div>
          <div>
            <p>"It's fine. Everything gonna be fine."</p>
          </div>
        </div>

        <div
          v-else-if="totalPulls >= 150 && totalPulls < 200"
          class="container is-flex"
        >
          <div>
            <img
              src="\src\assets\ark\4_pepe_150-199.png"
              alt=""
              title=""
              class="image is-128x128"
            />
          </div>
          <div>
            <p>"We are more than halfway through! Let's keep it up!"</p>
          </div>
        </div>

        <div
          v-else-if="totalPulls >= 200 && totalPulls < 250"
          class="container is-flex"
        >
          <div>
            <img
              src="\src\assets\ark\5_lemuen_200-249.png"
              alt=""
              title=""
              class="image is-128x128"
            />
          </div>
          <div>
            <p>"Reaching the last third, good job!"</p>
          </div>
        </div>
        <div
          v-else-if="totalPulls >= 250 && totalPulls < 300"
          class="container is-flex"
        >
          <div>
            <img
              src="\src\assets\ark\6_vulpi_250-299.png"
              alt=""
              title=""
              class="image is-128x128"
            />
          </div>
          <div>
            <p>"Getting fancy now. "</p>
          </div>
        </div>

        <div v-else-if="totalPulls >= 300" class="container is-flex">
          <div>
            <img
              src="\src\assets\ark\7_zuole_300+.png"
              alt=""
              title=""
              class="image is-128x128"
            />
          </div>
          <div>
            <p>"We have achieved our goal! Congratulations!"</p>
          </div>
        </div>
        <!-- </div> -->
        <!-- <div>
            <p>adding text here</p>
          </div> -->
        <!-- </div> -->

        <!-- <h3 class="subtitle is-4">Results</h3> -->
        <!-- <p>Total Pulls from Orundum + Originite Prime = {{ totalPullsFromOrundum }}</p>
      <p>Total Pulls from Permits = {{ totalPullsFromPermits }}</p> -->
        <p class="is-size-5" v-if="totalPulls >= 300">
          TOTAL PULLS = {{ totalPulls }} /300 ({{ totalPulls - 300 }} extra
          pulls!)
        </p>
        <p class="is-size-5" v-else="totalPulls >= 300">
          TOTAL PULLS = {{ totalPulls }} /300 (Missing: {{ 300 - totalPulls }})
        </p>
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
      <button class="button" @click="resetFields">Reset all fields</button>
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
