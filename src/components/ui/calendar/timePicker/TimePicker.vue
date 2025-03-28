<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  theme: 'Light' | 'Dark'
}>()

const today = new Date()
const hoursNow = today.toLocaleTimeString('ru-RU', {
  timeZone: 'Europe/Moscow',
  hour12: false,
  hour: '2-digit',
})
const minutesNow = today.toLocaleTimeString('ru-RU', {
  timeZone: 'Europe/Moscow',
  hour12: false,
  minute: '2-digit',
})
const hours = ref(hoursNow)
const minutes = ref(minutesNow)

const TimePickerClasses = computed(() => ({
  'TimePicker--container': true,
  'TimePicker--container--Dark': props.theme === 'Dark',
  'TimePicker--container--Light': props.theme === 'Light',
}))

const blockInvalidKeys = (event: KeyboardEvent) => {
  const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab']
  if (allowedKeys.includes(event.key)) return
  if (!/^\d$/.test(event.key)) {
    event.preventDefault()
  }
}
const formatInputHours = () => {
  // Удаляем все символы, кроме цифр
  let val = hours.value.replace(/\D/g, '')

  // Если значение больше 12, обрезаем или выдаём ошибку
  if (val !== '' && parseInt(val, 10) > 12) {
    val = '12'
  }

  hours.value = val
}
const formatInputMinutes = () => {
  // Удаляем все символы, кроме цифр
  let val = minutes.value.replace(/\D/g, '')

  // Если значение больше 12, обрезаем или выдаём ошибку
  if (val !== '' && parseInt(val, 10) > 59) {
    val = '12'
  }

  minutes.value = val
}
</script>

<template>
  <div :class="TimePickerClasses">
    <div class="TimePicker--time">
      <div class="TimePicker--inputTime">
        <input
          v-model="hours"
          class="TimePicker--hours"
          type="text"
          maxlength="2"
          @keydown="blockInvalidKeys"
          @input="formatInputHours"
        />
        <span class="time-separator">:</span>
        <input
          v-model="minutes"
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
  width: 2ch;
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
