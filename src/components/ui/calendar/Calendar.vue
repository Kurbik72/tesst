<script setup lang="ts">
import { computed, ref } from 'vue'
import TimePicker from './timePicker/TimePicker.vue'
import Switcher from '../switcher/Switcher.vue'

const months = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const myComputed = computed(() => {
  const curr = new Date()
  const date = new Date(curr.getFullYear(), curr.getMonth(), 1)
  return date.getDay() + 1
})
const currentDays = defineModel<Date>()
const optionsForSwitcher = ref<{ text: string; value: string }[]>([
  { text: 'AM', value: '1' },
  { text: 'PM', value: '2' },
])
const currentFormatTimeValue = ref({ text: 'AM', value: '1' })
const incrementMonth = () => {
  // Сохраняем исходную дату для безопасных вычислений
  const sourceDate = new Date(currentDays.value.getTime())

  // Получаем год и месяц исходной даты
  const year = sourceDate.getFullYear()
  const month = sourceDate.getMonth()
  const currentDay = sourceDate.getDate()

  // Вычисляем последний день следующего месяца
  const lastDayNextMonth = new Date(year, month + 2, 0).getDate()

  // Обновляем дату с учётом перехода месяцев и корректного дня
  currentDays.value = new Date(
    year,
    month + 1, // следующий месяц
    Math.min(currentDay, lastDayNextMonth), // выбираем минимальный день
  )
}

const decrementMonth = () => {
  if (currentDays.value) {
    const currentDate = currentDays.value.getDate()
    currentDays.value.setDate(1)
    currentDays.value.setMonth(currentDays.value.getMonth() - 1)
    const daysInMonth = new Date(currentDays.value.getMonth() - 1).getDate()
    currentDays.value.setDate(Math.min(currentDate, daysInMonth))
  }
  console.log(currentDays.value)
}
</script>

<template>
  <div class="Calendar--container">
    <div class="Calendar--header">
      <div class="Calendar--monthChange">
        <button type="button">
          <span>
            {{ currentDays?.toLocaleString('default', { month: 'long' }) }}
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
        v-for="day of currentDays?.getDate()"
        :key="day"
        class="Calendar--days"
      >
        {{ day }}
      </div>
    </div>
    <div class="Calendar--time">
      <span>Time</span>
      <div class="Calendar--AMPM">
        <TimePicker theme="Light" />
        <Switcher
          v-model="currentFormatTimeValue"
          :options="optionsForSwitcher"
          theme="Light"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.Calendar--container {
  width: 343px;
  height: 383px;
  flex-shrink: 0;
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
  grid-column-start: v-bind(myComputed);
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
</style>
