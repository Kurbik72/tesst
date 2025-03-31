<script setup lang="ts">
const props = defineProps<{
  theme: 'Light' | 'Dark'
  type: 'Digits' | 'Days'
}>()

const curr = new Date()
const date = new Date(curr.getFullYear(), curr.getMonth() + 1, 0)
</script>

<template>
  <div class="DayRow--container">
    <div
      v-for="i in date.getDate()"
      :key="i"
      class="DayRow--item"
    >
      {{ i }}
    </div>
  </div>
</template>

<style scoped>
.DayRow--item {
  display: grid;
  grid-template-columns: 2;
  grid-template-rows: max-content;
}
</style>
