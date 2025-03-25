<script setup lang="ts">
import { Button, Switcher } from '@/components/ui'
import { ref } from 'vue'

const parrentHandler = () => {}

const optionsForSwitcher = ref<{ text: string; value: string }[]>([])
const currentValueForSwitcher = ref<{ text: string; value: string }>()
</script>

<template>
  <div class="wrapper">
    <Button @click="parrentHandler">asdadasdasdasdasd</Button>
    <Switcher v-model="currentValueForSwitcher" :options="optionsForSwitcher"></Switcher>
  </div>
</template>

<style scoped></style>
