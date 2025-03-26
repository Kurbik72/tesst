<script setup lang="ts">
import { computed } from 'vue'

interface SwitcherItem {
  text: string
  value: string
}

const props = defineProps<{
  options: SwitcherItem[]
  theme?: 'Light' | 'Dark'
}>()

const currentOption = defineModel<SwitcherItem>()

const setOption = (option: SwitcherItem) => {
  currentOption.value = option
}
const listClasses = computed(() => ({
  switcher: true,
  'switcher__theme--Light': props.theme === 'Light',
  'switcher__theme--Dark_background': props.theme === 'Dark',
}))
const selectedClasses = computed(() => ({
  'switcher__theme--Dark': props.theme === 'Dark',
}))
</script>

<template>
  <div :class="listClasses">
    <div v-for="option of options" :key="option.value" @click="setOption(option)">
      <div :class="[{ selected: option.value === currentOption?.value }, selectedClasses]">
        {{ option.text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.switcher {
  cursor: pointer;
  padding: 6px 8px;
  font-weight: 500;
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  border-radius: 7px;
}
.switcher__theme--Light {
  background-color: #dedee1;
}
.selected {
  background-color: white;
  width: 100%;
  text-align: center;
  border-radius: 7px;
}
.switcher__theme--Dark {
  background-color: #636366;
  color: white;
}
.switcher__theme--Dark_background {
  background-color: #dedee1;
}
</style>
