<template>
  <div class="container global-frame c1">
    <h1 class="title is-4">Fast Dungeon & Furious Dragon</h1>
    <br />
    <h2 class="subtitle is-5">
      Welcome adventurer! Choose a door wisely. Go down the dungeon. Avoid the
      Dragon. Survive. Get rich!
    </h2>
    <div class="container c3 is-flex is-justify-content-space-around">
      <div class="container c4">
        <div class="columns">
          <!-- column 1 -->
          <div class="column is-one-fifth">
            <div class="box menu">
              <h5 class="subtitle is-6">BEST SCORES</h5>
              <table class="table has-text-centered is-narrow">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Floor</th>
                    <th>Gold</th>
                  </tr>
                </thead>
                <tbody v-for="(score, index) in bestScores">
                  <tr>
                    <td v-if="index + 1 === 1">{{ index + 1 }}st</td>
                    <td v-else-if="index + 1 === 2">{{ index + 1 }}nd</td>
                    <td v-else-if="index + 1 === 3">{{ index + 1 }}rd</td>
                    <td v-else>{{ index + 1 }}</td>
                    <td>{{ score.floor }}</td>
                    <td>{{ score.gold }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="column is-two-fifth">
            <div class="box menu">
              <h5 class="subtitle is-6">YOUR ADVENTURE</h5>
              <table class="table has-text-centered is-bordered">
                <thead>
                  <tr>
                    <th>Current Floor 🪜</th>
                    <th>Gold coins 🪙</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ floor }}</td>
                    <td>{{ gold }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- column 2 -->
          <div class="column is-three-fifth">
            <div class="box menu">
              <h5 class="subtitle is-6">What's going on?</h5>
              <p class="is-italic is-size-5">{{ description }}</p>
              <div>
                <h4 class="subtitle is-3" style="margin-top: 3rem">
                  {{ result }}
                </h4>
              </div>
            </div>
          </div>
          <!-- column 3 -->
        </div>
      </div>
    </div>
    <div class="box">
      <div class="container is-flex is-justify-content-center">
        <div class="buttons are-large">
          <button
            class="button is-warning"
            @click="leaveDungeon()"
            :disabled="gameWait == true || floor == 0"
          >
            Leave
          </button>
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
            class="button is-success"
            v-if="gameOver == true"
            @click="restart"
          >
            Retry?
          </button>
        </div>
      </div>
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
      result.value = "Treasure!🪙x2";
      //   result.value = "Aye! More coins for ye! 🪙"; //TODO: add Scottish and/or irish versions
      floor.value = floor.value - 1;
      gold.value = gold.value * 2;
      setTimeout(() => {
        nextRound();
      }, 1500);
    }, 1500);
  } else {
    setTimeout(() => {
      result.value = "Dragon!! You're dead. 🔥☠️";
      //  result.value = "Och, yer deid. 🔥☠️";
      gameOver.value = true;
    }, 2000);
  }
}

function nextRound() {
  description.value = result.value = "";
  rollDie();
  correctDoor.value = Math.floor(Math.random() * 2);
  // console.log("Prophecy. Right answer = ", correctDoor.value);
}

function leaveDungeon() {
  gameOver.value = true;
  description.value = "You make your way out of the dungeon...";
  result.value = "Congratulations! You survived and earned some coins!";
  saveScore();
}

function saveScore() {
  bestScores.value.push({
    floor: floor.value,
    gold: gold.value,
  });
  bestScores.value.sort(
    (firstItem, secondItem) => firstItem.floor - secondItem.floor
  );
  if (bestScores.value.length > 5) {
    bestScores.value = bestScores.value.slice(0, 5);
  }
  localStorage.setItem("bestScores", JSON.stringify(bestScores.value));
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
  // console.log("Prophecy. Right answer = ", correctDoor.value);
});

function rollDie() {
  gameWait.value = true;
  description.value = "The Dragon is rolling the dice...";
  setTimeout(() => {
    description.value = "Choose a door.";
    gameWait.value = false;
  }, 1500);
}
</script>

<style scoped>
.global-frame {
  padding: 0rem 2rem;
}

.container {
  padding: 0.5rem;
}

/* .c1 {
  background-color: blueviolet;
}
.c2 {
  background-color: rgb(83, 166, 238);
}
.c3 {
  background-color: rgb(68, 247, 110);
}
.c4 {
  background-color: rgb(227, 159, 43);
} */

.menu {
  /* min-height: 100px; */
  height: 18rem;
}
</style>
