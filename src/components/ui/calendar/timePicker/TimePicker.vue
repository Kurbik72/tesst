<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  theme: 'Light' | 'Dark'
}>()

const getInitialTime = () => {
  const now = new Date()
  return {
    hours: now.toLocaleTimeString('ru-RU', {
      timeZone: 'Europe/Moscow',
      hour12: false,
      hour: '2-digit',
    }),
    minutes: now.toLocaleTimeString('ru-RU', {
      timeZone: 'Europe/Moscow',
      minute: '2-digit',
    }),
  }
}
const time = getInitialTime()
const { hours = '0', minutes = '0' } = time

const hoursNow = ref(hours)
const minutesNow = ref(minutes)

const blockInvalidKeys = (event: KeyboardEvent) => {
  const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab']
  if (allowedKeys.includes(event.key)) return
  if (!/^\d$/.test(event.key)) {
    event.preventDefault()
  }
}
const formatInputHours = () => {
  let valHours = hoursNow.value.replace(/\D/g, '')

  if (valHours !== '' && parseInt(valHours, 10) > 24) {
    valHours = '24'
  }
  hoursNow.value = valHours
}
const formatInputMinutes = () => {
  let valMinutes = minutesNow.value.replace(/\D/g, '')

  if (valMinutes !== '' && parseInt(valMinutes, 10) > 59) {
    valMinutes = '59'
  }
  minutesNow.value = valMinutes
}

const TimePickerClasses = computed(() => ({
  'TimePicker--container': true,
  'TimePicker--container--Dark': props.theme === 'Dark',
  'TimePicker--container--Light': props.theme === 'Light',
}))
</script>

<template>
  <div :class="TimePickerClasses">
    <div class="TimePicker--time">
      <div class="TimePicker--inputTime">
        <input
          v-model="hoursNow"
          class="TimePicker--hours"
          type="text"
          maxlength="2"
          @keydown="blockInvalidKeys"
          @input="formatInputHours"
        />
        <span class="time-separator">:</span>
        <input
          v-model="minutesNow"
          class="TimePicker--minutes"
          type="text"
          maxlength="2"
          @keydown="blockInvalidKeys"
          @input="formatInputMinutes"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.TimePicker--container {
  width: 86px;
  height: 36px;
}
.TimePicker--inputTime {
  font-family: 'SF Display Medium';
  font-size: 22px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 10px 3px 11px;
  font-style: normal;
  gap: 4px;
}
.TimePicker--inputTime input {
  font-weight: 400;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0;
  font-family: 'SF Display Medium';
  font-style: normal;
}
.TimePicker--hours {
  text-align: right;
}
.TimePicker--minutes {
  text-align: left;
}
.time-separator {
  margin-bottom: 3px;
}
.TimePicker--container--Light .TimePicker--inputTime {
  background: rgba(118, 118, 128, 0.12);
  color: #000;
}
.TimePicker--container--Dark .TimePicker--inputTime {
  background: rgba(118, 118, 128, 0.24);
  color: #fff;
}
.TimePicker--container--Dark .TimePicker--inputTime input {
  color: #fff;
}
</style>
