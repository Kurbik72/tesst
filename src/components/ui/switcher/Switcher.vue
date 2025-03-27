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
const selectedClasses = computed(() => props.theme === 'Dark')
</script>

<template>
  <div :class="listClasses">
    <div
      v-for="option of options"
      :key="option.value"
      @click="setOption(option)"
    >
      <div
        :class="[
          { selected: option.value === currentOption?.value },
          { selected_dark: option.value === currentOption?.value && selectedClasses },
        ]"
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.switcher {
  cursor: pointer;
  padding: 6px 8px;
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  border-radius: 9px;
  font-family: 'SF Display Medium';
  font-style: normal;
  font-size: 13px;
  align-items: center;
}
.switcher > div {
  flex: 1;
  text-align: center;
}
.switcher__theme--Light {
  background-color: #dedee1;
}
.selected {
  display: flex;
  background-color: white;
  text-align: center;
  border-radius: 7px;
  flex: 1 0 0;
  justify-content: center;
  align-items: center;
  padding: 6px 7.5px 6.002px 8px;
  transition: transform 0.1s ease-out;
}
.switcher > div:hover .selected {
  transform: translateY(-3px);
}

.selected_dark {
  background-color: #636366;
  color: white;
}
.switcher__theme--Dark_background {
  background-color: #dedee1;
  color: white;
}
</style>
