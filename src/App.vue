<script setup lang="ts">
import { Button, Switcher, InputBase, TimePicker } from '@/components/ui'
import { ref } from 'vue'

const parrentHandler = () => {}

const optionsForSwitcher = ref<{ text: string; value: string }[]>([
  { text: 'Admin', value: '1' },
  { text: 'User', value: '2' },
  { text: 'Guest', value: '3' },
])
const currentValueForSwitcher = ref<{ text: string; value: string }>()
const value = ref('')

const login = ref('')
</script>

<template>
  <div class="wrapper">
    Мой логин: {{ login }}
    <div v-if="false">
      <Button @click="parrentHandler">asdadasdasdasdasd</Button>
      <Switcher
        v-model="currentValueForSwitcher"
        :options="optionsForSwitcher"
        theme="Light"
      ></Switcher>
    </div>
    <InputBase
      v-model="login"
      theme="Dark"
      placeholder="Введите логин"
    />
    <TimePicker
      v-model="value"
      theme="Light"
    />
    {{ value }}
  </div>
</template>

<style scoped></style>
