<template>
  <div class="level-left">
    <div class="control level-item">
      <button
        :disabled="isDisabled == true"
        class="button is-info is-light"
        @click.prevent="toggleModal"
      >
        {{ modalButtonName }}
      </button>
    </div>
  </div>

  <transition name="modal-fade">
    <div class="modal is-active" v-if="isModalOpen">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <div class="text-block">
            <h4 class="mb-4 title is-5">
              Where can I find my Orundum and Originite Prime?
            </h4>
            <img
              src="..\assets\ark\main_page.png"
              alt="The screenshot shows the right part of the game's main screen. The currencies are displayed in the top right corner."
              title="Orundum (red) and Originite Prime (yellow)"
            />
            <p>
              Check the game's main screen, they are in the top-right corner.
              Orundum in red, then Originite Prime in yellow.
            </p>
          </div>

          <div class="text-block">
            <h4 class="mb-4 title is-5">
              Where can I find my Ten-roll and Single Headhunting Permits?
            </h4>
            <p>
              On the game's main screen, click on "Depot" in the bottom-right
              corner of the screen. There, look up for Ten-roll and Single
              Headhunting Permits.
            </p><br>
            <img
              src="..\assets\ark\depot.jpg"
              alt="The screenshot shows the depot page, where all games' items are listed. This is where Ten-roll Headhunting Permit and Single Headhunting Permit are stored."
              title="Ten-roll Headhunting Permit and Single Headhunting Permit"
            />
          </div>

          <div class="text-block">
            <h4 class="mb-4 title is-5">General tips</h4>

            <p>
              - Big events usually give away a special Ten-roll pulls usable
              only in the event banner. <br />
              - Every month in the shop, you can exchange 258 yellow
              certificates for 38 pulls in total. <br />
              - Every month in the shop, you can exchange 900 green certificates
              for 2 Single Headhunting Permits. If you clean all phase 1, you
              can again buy 2 extra Single Headhunting Permits for 900 green
              certificates. <br />
              - Try to get at least 4-stars characters from recruitement to get
              more yellow certificates. <br />
              - Maxing out potential for the wellfare operator of an event
              allows you to make more yellow certificates when you buy them
              again during the event rerun.
            </p>
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
