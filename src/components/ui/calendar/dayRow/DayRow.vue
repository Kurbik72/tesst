<script setup lang="ts">
const props = defineProps<{
  theme: 'Light' | 'Dark'
  type: 'Digits' | 'Days'
  options: (number | string | null)[]
}>()
</script>

<template>
  <div class="DayRow--container">
    <div></div>
  </div>
</template>

<style scoped></style>
