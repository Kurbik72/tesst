<script setup lang="ts">
import { Header } from '@/components/ui'
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <div>
    <Header />
    <input
      v-model="value"
      type="text"
    />
    {{ value }}
    <div><h1>Third Page</h1></div>
  </div>
</template>
