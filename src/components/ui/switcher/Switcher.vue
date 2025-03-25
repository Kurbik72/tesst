<script setup lang="ts">
interface SwitcherItem {
  text: string
  value: string
}

const props = defineProps<{
  options: SwitcherItem[]
  theme?: 'Light' | 'Dark'
}>()

const currentOption = defineModel<SwitcherItem>()
</script>

<template>
  <div v-for="option of props.options" :key="option.value">
    <div :class="{ selected: option.value === currentOption?.value }">
      {{ option.text }}
      {{ option.value }}
    </div>
  </div>
</template>

<style scoped>
.selected {
  background-color: #007aff;
}
</style>
