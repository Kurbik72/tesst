<script setup lang="ts">
// import { ref } from 'vue/dist/vue.js';

interface InputState {
  Active: boolean
  Default: boolean
  Typing: boolean
  Typed: boolean
}

const props = defineProps<{
  theme?: 'Light' | 'Dark'
  mode: 'Default' | 'Active' | 'Typing' | 'Typed'
}>()

// const currentInputValue = ref<InputState>()
</script>

<template>
  <div class="text-field">
    <input type="text" placeholder="Placeholder" />
    <img src="@/assets/icons/xmark.svg" alt="" />
  </div>
</template>

<style scoped>
.text-field {
  display: flex;
  gap: 8px;
  align-items: center;
}
.text-field img {
  cursor: pointer;
}
</style>
