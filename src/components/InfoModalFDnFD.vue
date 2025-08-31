<template>
  <div class="level-left">
    <div class="control level-item">
      <button :disabled="isDisabled == true" class="button is-small is-info is-light" @click.prevent="toggleModal">
        {{ modalButtonName }}
      </button>
    </div>
  </div>

  <transition name="modal-fade">
    <div class="modal is-active" v-if="isModalOpen">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- <div class="box has-text-centered"> -->
        <div class="box">
          <div class="text-block">
            <h4 class="mb-4 title is-5">So WHAT is that game?</h4>
            <p>
              I had this idea for a while now. It originated from the thinking
              of "What would be the minimum needed to play some RPG, as tabletop
              or video game?" <br />Back in the day, old-school RPGs would be
              down to the famous "door / monster / treasure" pattern. So I just
              asked myself: "What could be the most minimalist RPG?". I wanted
              the game to be the simplest possible. Two choices: one win, one
              lose. Try to pick the right one. Simple. Deadly. The fact that you
              need to leave to cash out or keep playing is just a classic 'push
              your luck' game option.
            </p>
          </div>

          <div class="text-block">
            <h4 class="mb-4 title is-5">Is that supposed to be fun?</h4>
            <p>
              I don't know actually. The game was made in a very pure style,
              trying to just get the mechanic at its core. But this game
              actually exists in the real world and you know it for sure, at
              least the name. <br />
              Look:<span class="is-italic">
                "You bet on one of two values. Pick the right choice and you
                double your money. Pick the wrong one, and you just lose
                everything. But if you stop before betting again, you can save
                the money you earned.""</span
              >
              Did you guess it?
            </p>
          </div>

          <div class="text-block">
            <h4 class="mb-4 title is-5">
              The spinning wheel with a ball running over numbers?
            </h4>
            <p>
              Yes, the famous casino game "Roulette". Playing the roulette, you
              can bet just on one number to get the best bet, but you can also
              bet on the wider choices, which are red or black, even or odd, and
              manque (numbers 1 to 18) or passe (numbers 19 to 36). These are
              the pick with the highest chance but also the lowest gain, which
              is actually just doubling your bet. <br />
              So imagine you bet $100 (it's a lot, don't do that!) only choosing
              between red and black. And 3 times in a row you get it correct,
              then boom: that makes it straight to $800. So check your best
              score, you can multiply the final gold score by a virtual bet you
              would do (like 1 or 10$ maybe? I don't know, but gamble
              responsibly!)
            </p>
          </div>

          <div class="text-block">
            <h4 class="mb-4 title is-5">
              Ho, but I did a good score! So I can get to the casino and start
              making money?
            </h4>
            <p>
              Hell no way. <br />
              First, I'm not encouraging gambling, so seek some help if you need
              it. Second, my little game is strictly 50/50% chance (because I'm
              cool). The casino roulette is
              <span class="has-text-weight-bold">NOT</span>. <br />In Europe, it
              has a green '0', and US roulette has an extra green '00'. Those
              zeros are no color, neither even nor odd, and out of the 1-36
              range. So you just lose. It's called the 'house edge', basically
              the casino advantage to get your money. For single '0', it's
              ~2.73%, and US is ~5.26%. In both scenarios, your chances go under
              50%. <br />You can find more about the mathematics on the internet
              if you're interested in probabilities.
            </p>
          </div>

          <div class="text-block">
            <h4 class="mb-4 title is-5">
              You baited me with a small game and now you're pushing maths into
              my head.
            </h4>
            <p>Yeah? Sorry... I guess?</p>
          </div>

          <div class="text-block">
            <h4 class="mb-4 title is-5">Is that really so bad?</h4>
            <p>
              For the US roulette case, more than 5% is huge. It's like you're
              basically auto-losing a game every 20 games, or paying an extra
              fee to the casino to play, equal to one of your bets (assuming you
              always bet the same amount). One way or another: it's a straight
              loss. <br />To keep it the RPG way, imagine the Dungeon Master
              says something like this: <br /><span class="is-italic">
                "To survive the next situation, you need to bet on even or odd
                for the D20 roll I will do."</span
              ><br />(A D20 means a die with 20 faces, 1 to 20). You think it's
              fair, 50% chance to win. Then he adds with a sly smile:
              <span class="is-italic">
                "You will also instantly lose if I roll 1 or 2!" </span
              ><br />
              Well, what do you think now?
            </p>
          </div>

          <div class="text-block">
            <h4 class="mb-4 title is-5">
              Please, do not make any more games. Ever.
            </h4>
            <p>Can't promise anything.</p>
          </div>

          <button
            class="button modal-close is-large"
            @click="toggleModal"
          ></button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  modalButtonName: String,
  isDisabled: Boolean
});

const isModalOpen = ref(false);

function toggleModal() {
  isModalOpen.value = !isModalOpen.value;
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.text-block {
  padding: 1rem;
  margin-bottom: 0.5rem;
}
</style>
