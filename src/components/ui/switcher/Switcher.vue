<script setup lang="ts">
interface SwitcherItem {
  text: string
  value: string
}

const props = defineProps<{
  options: SwitcherItem[]
  theme?: 'Light' | 'Dark'
}>()

const model = defineModel<SwitcherItem>()
</script>

<template>
  <div>{{ props }}, {{ model }}</div>
</template>
