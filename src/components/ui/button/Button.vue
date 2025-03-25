<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  theme?: 'Light' | 'Dark'
  type?: 'Filled' | 'Tined' | 'Gray' | 'Plain'
  src?: string
}>()
const computedClass = computed(() => ({
  button: true,
  'button__theme--Light': props.theme === 'Light',
  'button__theme--Dark': props.theme === 'Dark',
  'button__type--Filled': props.type === 'Filled',
  'button_type--Tined': props.type === 'Tined',
  'button_theme_and_type--Dark_Gray': props.theme === 'Dark' && props.type === 'Gray',
  'button_theme_and_type--Light_Gray': props.theme === 'Light' && props.type === 'Gray',
  'button_type--Plain': props.type === 'Plain',
}))

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button :class="computedClass" @click="emit('click')">
    <img :src="props.src" alt="" />
    <slot />
  </button>
</template>

<style scoped>
* {
  border: none;
}
.button {
  margin: 0;
  padding: 0;
  background-color: #eee;
  color: white;
  border-radius: 10px;
  width: 133px;
  height: 48px;
  font-weight: 600;
  font-size: 1rem;
}
.button__theme--Light {
  background-color: #007aff;
}
.button__theme--Dark {
  background-color: black;
}
.button__type--Filled {
  background-color: #007aff;
}
.button_type--Tined {
  background-color: #daedff;
  color: #007aff;
}
.button_type--Gray {
  background-color: #3f4145;
  color: #007aff;
}
.button_type--Plain {
  background-color: white;
  color: #007aff;
}
.button_theme_and_type--Dark_Gray {
  background-color: #3f4145;
  color: #007aff;
}
.button_theme_and_type--Light_Gray {
  background-color: #e1e2e2;
  color: #007aff;
}
</style>
