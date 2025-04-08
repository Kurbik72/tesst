<script setup lang="ts">
import { computed, defineModel } from 'vue'

const props = defineProps<{
  theme: 'Light' | 'Dark'
}>()

const currentDayModel = defineModel<Date>({ required: true })

const hoursModel = computed({
  get: () => currentDayModel.value.getHours(),
  set: (value) => {
    currentDayModel.value.setHours(value)
  },
})

const minutesModel = computed({
  get: () => currentDayModel.value.getMinutes(),
  set: (value) => {
    currentDayModel.value.setMinutes(value)
  },
})
const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab']
const blockInvalidHours = (e: KeyboardEvent) => {
  const input = e.target as HTMLInputElement
  const value = input.value + e.key
  if (allowedKeys.includes(e.key)) return
  if (!/^([01]?[0-9]|2[0-3])$/.test(value)) {
    e.preventDefault()
  }
}

const blockInvalidMinutes = (e: KeyboardEvent) => {
  const input = e.target as HTMLInputElement
  const value = input.value + e.key

  if (allowedKeys.includes(e.key)) return
  if (!/^([0]?[0-9]|[0-5][0-9])$/.test(value)) {
    e.preventDefault()
  }
}

// // const blockInvalidKeys = (event: KeyboardEvent) => {
//   const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab']
//   if (allowedKeys.includes(event.key)) return
//   if (!/^\d$/.test(event.key)) {
//     event.preventDefault()
//   }
// }

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
          v-model="hoursModel"
          class="TimePicker--hours"
          type="text"
          @keydown="blockInvalidHours($event)"
        />
        <span class="time-separator">:</span>
        <input
          v-model="minutesModel"
          class="TimePicker--minutes"
          type="text"
          @keydown="blockInvalidMinutes($event)"
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
