<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'

const props = defineProps<{
  theme: 'Light' | 'Dark'
}>()
interface Time {
  hours: string
  minutes: string
}
const timeModel = defineModel<Time>({
  default: () => ({
    hours: new Date().getHours().toString().padStart(2, '0'),
    minutes: new Date().getMinutes().toString().padStart(2, '0'),
  }),
})
onBeforeMount(() => {
  timeModel.value = {
    hours: new Date().getHours().toString().padStart(2, '0'),
    minutes: new Date().getMinutes().toString().padStart(2, '0'),
  }
})
const blockInvalidKeys = (event: KeyboardEvent) => {
  const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab']
  if (allowedKeys.includes(event.key)) return
  if (!/^\d$/.test(event.key)) {
    event.preventDefault()
  }
}
const formatTimeComponent = (type: 'hours' | 'minutes') => {
  const currentValue = timeModel.value[type].replace(/\D/g, '')
  const max = type === 'hours' ? 23 : 59

  let numeric = parseInt(currentValue, 10) || 0
  numeric = Math.min(numeric, max)

  timeModel.value = {
    ...timeModel.value,
    [type]: numeric.toString().padStart(2, '0'),
  }
}

const formatInputHours = () => formatTimeComponent('hours')
const formatInputMinutes = () => formatTimeComponent('minutes')

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
          v-model="timeModel.hours"
          class="TimePicker--hours"
          type="text"
          @keydown="blockInvalidKeys"
          @input="formatInputHours"
        />
        <span class="time-separator">:</span>
        <input
          v-model="timeModel.minutes"
          class="TimePicker--minutes"
          type="text"
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
