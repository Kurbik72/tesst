<script setup lang="ts">
// import { ref } from 'vue'
import '@/global.css'

// const currentDays = ref(new Date())
// const optionsForSwitcher = ref<{ text: string; value: string }[]>([
//   { text: 'Admin', value: '1' },
//   { text: 'User', value: '2' },
//   { text: 'Guest', value: '3' },
// ])
// const currentValueForSwitcher = ref<{ text: string; value: string }>()

// interface Time {
//   hours: string
//   minutes: string
// }
// const time = ref<Time>()
// const login = ref('')
</script>

<template>
  <div class="app">
    {{ $route.query }}
    <RouterView />
  </div>
</template>

<style scoped></style>
