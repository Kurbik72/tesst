<script setup lang="ts">
import { Button, Switcher, InputBase, TimePicker, Calendar } from '@/components/ui'
import { ref } from 'vue'
import '@/global.css'
const currentDays = ref(new Date())
const optionsForSwitcher = ref<{ text: string; value: string }[]>([
  { text: 'Admin', value: '1' },
  { text: 'User', value: '2' },
  { text: 'Guest', value: '3' },
])
const currentValueForSwitcher = ref<{ text: string; value: string }>()

interface Time {
  hours: string
  minutes: string
}
const time = ref<Time>()
const login = ref('')
</script>

<template>
  <div class="wrapper">
    Время регистрации: {{ time?.hours }}: {{ time?.minutes }}
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
      placeholder="время регистрации"
    />
    <TimePicker
      v-model:="time"
      theme="Light"
    />

    <Calendar
      v-model="currentDays"
      theme="Dark"
    />
  </div>
</template>

<style scoped></style>
