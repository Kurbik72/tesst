<script setup lang="ts">
import { Button, Switcher } from '@/components/ui'
import { ref } from 'vue'
import InputBase from './components/ui/input/InputBase.vue'

const parrentHandler = () => {}

const optionsForSwitcher = ref<{ text: string; value: string }[]>([
  { text: 'Admin', value: '1' },
  { text: 'User', value: '2' },
  { text: 'Guest', value: '3' },
])
const currentValueForSwitcher = ref<{ text: string; value: string }>()

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
  </div>
</template>

<style scoped></style>
