<script setup lang="ts">
import { computed, ref } from 'vue'
import TimePicker from './timePicker/TimePicker.vue'
import Switcher from '../switcher/Switcher.vue'

const { theme = 'Light' } = defineProps<{
  theme: 'Light' | 'Dark'
}>()
const months = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const gridColumnValue = computed(() => {
  const date = new Date(currentDays.value?.getFullYear(), currentDays.value?.getMonth(), 1)
  return date.getDay() + 1
})
const classesForCalendar = computed(() => ({
  'Calendar--container': true,
  'Calendar--theme--Light': theme === 'Light',
  'Calendar--theme--Dark': theme === 'Dark',
}))
const currentDays = defineModel<Date>()
const optionsForSwitcher = ref<{ text: string; value: string }[]>([
  { text: 'AM', value: '1' },
  { text: 'PM', value: '2' },
])
const currentFormatTimeValue = ref({ text: 'AM', value: '1' })
const incrementMonth = () => {
  const sourceDate = new Date(currentDays.value.getTime())

  const year = sourceDate.getFullYear()
  const month = sourceDate.getMonth()
  const currentDay = sourceDate.getDate()

  const lastDayNextMonth = new Date(year, month + 2, 0).getDate()

  currentDays.value = new Date(
    year,
    month + 1, // следующий месяц
    Math.min(currentDay, lastDayNextMonth),
  )
}
const decrementMonth = () => {
  const sourceDate = new Date(currentDays.value?.getTime())

  const year = sourceDate.getFullYear()
  const month = sourceDate.getMonth()
  const currentDay = sourceDate.getDate()

  const lastDayNextMonth = new Date(year, month - 1, 0).getDate()

  currentDays.value = new Date(year, month - 1, Math.min(currentDay, lastDayNextMonth))
}
const days = () => {
  const arrayInDays = new Date(
    currentDays.value?.getFullYear() || 0,
    currentDays.value?.getMonth() + 1 || 0,
    0,
  )
  return arrayInDays
}

console.log(days())
</script>

<template>
  <div :class="classesForCalendar">
    <div class="Calendar--header">
      <div class="Calendar--monthChange">
        <button type="button">
          <span>
            {{ currentDays?.toLocaleString('en', { month: 'long' }) }}
            {{ currentDays?.getFullYear() }}</span
          >
          <img
            src="@/assets/icons/chevron.svg"
            alt=""
          />
        </button>
      </div>
      <div class="Calendar--monthToggle">
        <button
          type="button"
          @click="decrementMonth"
        >
          <img
            src="@/assets/icons/leftChewron.svg"
            alt=""
          />
        </button>
        <button
          type="button"
          @click="incrementMonth"
        >
          <img
            src="@/assets/icons/rightChewron.svg"
            alt=""
          />
        </button>
      </div>
    </div>
    <div class="Calendar--months">
      <div
        v-for="month of months"
        :key="month"
      >
        {{ month }}
      </div>
    </div>
    <div class="days">
      <div
        v-for="day of days()?.getDate()"
        :key="day"
        class="Calendar--days"
      >
        {{ day }}
      </div>
    </div>
    <div class="Calendar--time">
      <span>Time</span>
      <div class="Calendar--AMPM">
        <TimePicker
          theme="Light"
          class="timepicker"
        />
        <Switcher
          v-model="currentFormatTimeValue"
          class="switcher"
          :options="optionsForSwitcher"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.Calendar--container {
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  width: 343px;
  flex-shrink: 0;
  border-radius: 13px;
  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.1);
}
.Calendar--header {
  display: flex;
  justify-content: space-between;
}
.Calendar--monthToggle {
  display: flex;
  padding-right: 16px;
  gap: 15px;
}
.Calendar--monthToggle button {
  border: none;
  background: none;
  cursor: pointer;
}

.Calendar--monthChange button {
  font-family: 'SF Display Bold';
  color: #ff3b30;
  font-size: 20px;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  background: none;
}

.Calendar--months {
  padding-top: 14px;
  box-sizing: border-box;
  font-family: 'SF Display Bold';
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  color: rgba(60, 60, 67, 0.3);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.days {
  padding-top: 24px;
  box-sizing: border-box;
  color: #ff3b30;
  font-family: 'SF Display Medium';
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-start: 2;
}
.Calendar--days {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2ch;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
}
.Calendar--days:first-child {
  grid-column-start: v-bind(gridColumnValue);
}
.Calendar--time {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'SF Display Bold';
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  padding-top: 22px;
  box-sizing: border-box;
}
.Calendar--AMPM {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding-right: 14.5px;
}
.Calendar--theme--Dark {
  background: var(--System-Background-Dark-Elevated-Primary, #1c1c1e);
}
.Calendar--theme--Dark .Calendar--time {
  color: white;
}
.Cale .Calendar--theme--Dark .Calendar--months {
  color: rgba(235, 235, 245, 0.3);
}
.Calendar--theme--Dark .Calendar--months {
  color: rgba(235, 235, 245, 0.3);
}
.Calendar--theme--Dark .switcher {
  background: var(--Fill-Color-Dark-Tertiary, rgba(118, 118, 128, 0.24));
  color: #ffff;
}
.Calendar--theme--Dark .switcher :deep(.selected) {
  color: #ffff;
  background: #636366;
}
.Calendar--theme--Light .switcher {
  color: #000;
  background: var(--Fill-Color-Light-Tertiary, rgba(118, 118, 128, 0.12));
}
.Calendar--theme--Dark .timepicker {
  border-radius: 6px;
  background: var(--Fill-Color-Dark-Tertiary, rgba(118, 118, 128, 0.24));
}
.Calendar--theme--Dark .timepicker :deep(.TimePicker--inputTime) {
  color: white;
}
.Calendar--theme--Dark .timepicker :deep(input) {
  color: #fff;
}
</style>
