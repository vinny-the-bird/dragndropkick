<template>
  <div class="container">
    <h1 class="title is-4">Fast Dungeon & Furious Dragon</h1>

    <div class="box">
      <p>
        Welcome adventurer! Choose wisely. Avoid the Dragon. Survive. Get rich
        fast!
      </p>
      <br />
      <!-- <p>Welcome tae ye, wanderer! Pick wi' care. Steer clear o’ tha’ great scaly beast. Dinnae die, eh?! Go on, grab the gold!</p> -->
      <div class="box">
        <p class="is-bold">
          SCORE -- [Rooms visited = {{ roomsVisited }}] -- [Gold coins =
          {{ gold }}]
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
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const description = ref("");
const result = ref("");
const correctDoor = ref();
const gameOver = ref(false);
const gameWait = ref(false);
const roomsVisited = ref(0);
const gold = ref(1);

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
      roomsVisited.value = roomsVisited.value + 1;
      gold.value = gold.value * 2;
      setTimeout(() => {
        nextRound();
      }, 2000);
    }, 1500);
  } else {
    setTimeout(() => {
      result.value = "Aw, you're dead. 🔥☠️";
      //   result.value = "Och, yer deid. 🔥☠️";
      gameOver.value = true;
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
  roomsVisited.value = 0;
  gold.value = 1;
  nextRound();
}

onMounted(() => {
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
  }, 2000);
}
</script>

<style scoped></style>
