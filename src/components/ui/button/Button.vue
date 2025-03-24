<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  theme?: 'Light' | 'Dark'
  type?: 'Filled' | 'Tined' | 'Gray' | 'Plain'
  iconName?: string
}>()
const computedClass = computed(() => ({
  button: true,
  'button__theme--Light': props.theme === 'Light',
  'button__theme--Dark': props.theme === 'Dark',
  'button__type--Filled': props.type === 'Filled',
}))

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button :class="computedClass" @click="emit('click')">
    <div>{{ props.theme }}</div>
    <div>{{ props.type }}</div>
    <slot />
  </button>
</template>

<style scoped>
.button {
  margin: 0;
  padding: 0;
  background-color: #eee;
  color: #000;
}
.button__theme--Light {
}
.button__theme--Dark {
}
</style>
