<template>
  <div class="container">
    <h1 class="title is-4">Fast Dungeon & Furious Dragon</h1>

    <div class="box">
      <p>
        Welcome adventurer! Choose a door wisely. Go down the dungeon. Avoid the
        Dragon. Survive. Get rich!
      </p>
      <br />
      <!-- <p>Welcome tae ye, wanderer! Pick wi' care. Steer clear o’ tha’ great scaly beast. Dinnae die, eh?! Go on, grab the gold!</p> -->
      <div class="box">
        <p class="is-bold">
          SCORE -- [Current Floor = {{ floor }}] -- [Gold coins = {{ gold }}]
        </p>
      </div>
      <br />
      <p class="is-italic">{{ description }}</p>
      <br />

      <div class="container">
        <div class="buttons are-large">
          <button
            class="button is-dark"
            @click="openDoor('left')"
            :disabled="gameWait == true"
          >
            Left Door
          </button>
          <button
            class="button is-dark"
            @click="openDoor('right')"
            :disabled="gameWait == true"
          >
            Right Door
          </button>
          <button
            class="button is-warning"
            v-if="gameOver == true"
            @click="restart"
          >
            Play again?
          </button>
        </div>
        <h4 class="subtitle is-3">{{ result }}</h4>
      </div>
    </div>
    <div class="box">
      <h5 class="subtitle is-5">Best scores</h5>
      <!-- <p>{{ bestScores }}</p> -->
      <table class="table has-text-centered is-bordered">
        <thead>
          <th>Rank</th>
          <th>Floor</th>
          <th>Gold</th>
        </thead>
        <tbody v-for="(score, index) in bestScores">
          <td v-if="index+1 === 1">{{ index+1 }}st</td>
          <td v-else-if="index+1 === 2">{{ index+1 }}nd</td>
          <td v-else-if="index+1 === 3">{{ index+1 }}rd</td>
          <td v-else>{{ index+1 }}</td>
          <td>{{ score.floor }}</td>
          <td>{{ score.gold }}</td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const description = ref("");
const result = ref("");
const correctDoor = ref();
const gameOver = ref(false);
const gameWait = ref(false);
const floor = ref(0);
const gold = ref(1);
const bestScores = ref([]);

function openDoor(direction) {
  description.value = `You open the door on the ${direction}...`;
  // left door win on 1, 3 and 5 => 0
  // right door win on 2, 4 and 6 => 1
  gameWait.value = true;
  if (
    (direction == "left" && correctDoor.value == 0) ||
    (direction == "right" && correctDoor.value == 1)
  ) {
    setTimeout(() => {
      result.value = "Yes! More coins for you! 🪙";
      //   result.value = "Aye! More coins for ye! 🪙";
      floor.value = floor.value - 1;
      gold.value = gold.value * 2;
      setTimeout(() => {
        nextRound();
      }, 1500);
    }, 1500);
  } else {
    setTimeout(() => {
      result.value = "Aw, you're dead. 🔥☠️";
      //   result.value = "Och, yer deid. 🔥☠️";
      gameOver.value = true;
      bestScores.value.push({
        floor: floor.value,
        gold: gold.value,
      });
      bestScores.value.sort(
        (firstItem, secondItem) => firstItem.floor - secondItem.floor
      );
      console.log("🚀 ~ openDoor ~ bestScores.value:", bestScores.value);
      localStorage.setItem("bestScores", JSON.stringify(bestScores.value));
    }, 1500);
  }
}

function nextRound() {
  description.value = result.value = "";
  rollDie();
  correctDoor.value = Math.floor(Math.random() * 2);
  console.log("Prophecy. Right answer = ", correctDoor.value);
}

function restart() {
  gameOver.value = false;
  floor.value = 0;
  gold.value = 1;
  nextRound();
}

onMounted(() => {
  const ls = localStorage.getItem("bestScores");
  if (ls !== null) {
    bestScores.value = JSON.parse(localStorage.getItem("bestScores"));
  } else {
    bestScores.value = [];
  }
  rollDie();
  correctDoor.value = Math.floor(Math.random() * 2);
  console.log("Prophecy. Right answer = ", correctDoor.value);
});

function rollDie() {
  gameWait.value = true;
  description.value = "The Dragon is rolling the die...";
  setTimeout(() => {
    description.value = "Choose a door.";
    gameWait.value = false;
  }, 1500);
}
</script>

<style scoped></style>
