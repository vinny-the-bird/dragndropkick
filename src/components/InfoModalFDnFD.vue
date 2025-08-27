<template>
  <div class="level-left">
    <div class="control level-item">
      <button class="button is-small" @click.prevent="toggleModal">Info</button>
    </div>
  </div>

  <transition name="modal-fade">
    <div class="modal is-active" v-if="isModalOpen">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box has-text-centered">
          <p class="mb-4">a title</p>

          <p>some text</p>
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

// const emit = defineEmits(["click"]);

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
</style>
