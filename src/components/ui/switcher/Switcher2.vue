<script setup lang="ts">
import { computed } from 'vue'

interface SwitcherItem {
  text: string
  value: string
}

const props = defineProps<{
  options: SwitcherItem[]
  theme?: 'Light' | 'Dark'
  modelValue: SwitcherItem
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', options: SwitcherItem): void
}>()

const currentOption = computed<SwitcherItem>({
  get: () => props.modelValue,
  set: (value: SwitcherItem) => emit('update:modelValue', value),
})

const setOption = (option: SwitcherItem) => {
  currentOption.value = option
}
</script>

<template>
  {{ currentOption }}
  <div class="switcher">
    <div v-for="option of options" :key="option.value" @click="setOption(option)">
      <div :class="{ selected: option.value === currentOption?.value }">
        {{ option.text }}
        {{ option.value }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.switcher {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
}
.selected {
  background-color: #007aff;
}
</style>
