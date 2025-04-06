<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import TimePicker from './timePicker/TimePicker.vue'
import Switcher from '../switcher/Switcher.vue'

const { theme = 'Light' } = defineProps<{
  theme?: 'Light' | 'Dark'
}>()

// Константы
const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const MONTHS_SHORT = Array.from({ length: 12 }, (_, i) =>
  new Date(0, i).toLocaleString('en-US', { month: 'short' }),
)

// Реактивные состояния
const isActive = ref(false)
const currentDays = defineModel<Date>({ required: true, default: () => new Date() })
const optionsForSwitcher = ref([
  { text: 'AM', value: '1' },
  { text: 'PM', value: '2' },
])

const currentFormatTimeValue = ref(optionsForSwitcher.value[0])
// Вычисляемые свойства
const gridColumnValue = computed(() => {
  const date = new Date(currentDays.value.getFullYear(), currentDays.value.getMonth(), 1)
  return date.getDay() + 1
})
const selectedDay = (index: number) => (activeIndex.value = index)

const calendarClasses = computed(() => ({
  'Calendar--container': true,
  'Calendar--theme--Light': theme === 'Light',
  'Calendar--theme--Dark': theme === 'Dark',
}))

const daysInMonth = computed(() => {
  const year = currentDays.value.getFullYear()
  const month = currentDays.value.getMonth()
  return new Date(year, month + 1, 0).getDate()
})
const actualyDay = () => {
  const arrayOfDays = Array.from({ length: daysInMonth.value }, (_, i) => i + 1)
  const currentIndex = arrayOfDays.indexOf(currentDays.value.getDate())
  return currentIndex
}
const activeIndex = ref<null | number>(actualyDay())

// Методы
const toggleCalendar = () => {
  isActive.value = !isActive.value
}
const changeMonth = (direction: 'next' | 'prev') => {
  const newDate = new Date(currentDays.value)
  const originalDay = newDate.getDate()

  newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1))

  // Корректировка дня, если в новом месяце меньше дней
  if (newDate.getDate() !== originalDay) {
    newDate.setDate(0) // Переход на последний день предыдущего месяца
  }

  currentDays.value = new Date(newDate)
  console.log(currentDays.value)
}
// Инициализация даты
watchEffect(() => {
  if (!currentDays.value) {
    currentDays.value = new Date()
  }
})
</script>

<template>
  <div :class="calendarClasses">
    <div class="Calendar--header">
      <div class="Calendar--monthChange">
        <button
          type="button"
          @click="toggleCalendar"
        >
          <span data-testid="current-month">
            {{ currentDays.toLocaleString('en', { month: 'long' }) }}
            {{ currentDays.getFullYear() }}
          </span>
          <img
            src="@/assets/icons/chevron.svg"
            alt="Toggle calendar"
          />
        </button>
      </div>

      <div class="Calendar--monthToggle">
        <button
          data-testid="prev-month"
          type="button"
          @click="changeMonth('prev')"
        >
          <img
            src="@/assets/icons/leftChewron.svg"
            alt="Previous month"
          />
        </button>

        <div
          v-if="isActive"
          class="Calendar--months-list"
        >
          <button
            v-for="month in MONTHS_SHORT"
            :key="month"
            @click="
              currentDays = new Date(currentDays?.getFullYear(), MONTHS_SHORT.indexOf(month), 1)
            "
          >
            {{ month }}
          </button>
        </div>

        <button
          data-testid="next-month"
          type="button"
          @click="changeMonth('next')"
        >
          <img
            src="@/assets/icons/rightChewron.svg"
            alt="Next month"
          />
        </button>
      </div>
    </div>

    <div class="Calendar--months">
      <div
        v-for="day in WEEKDAYS"
        :key="day"
      >
        {{ day }}
      </div>
    </div>

    <div class="days">
      <div
        v-for="(day, index) in daysInMonth"
        :key="day"
        data-testid="array of days"
        class="Calendar--days"
      >
        <button
          type="button"
          :class="{ active: activeIndex === index }"
          @click="selectedDay(index)"
        >
          {{ day }}
        </button>
      </div>
    </div>

    <div class="Calendar--time">
      <span>Time</span>
      <div class="Calendar--AMPM">
        <TimePicker
          data-testid="time-picker"
          :theme="theme"
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
* {
  box-sizing: border-box;
}
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
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 7px;
}
.Calendar--months-list {
  animation: fade-in 0.3s ease-out;
  animation-name: fade-in;
  background: #ffebea;
  border-radius: 5px;
  top: 40px;
  left: 0;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  50% {
    opacity: 0%;
  }
  100% {
    scale: 1;
    opacity: 100%;
    transform: translateY(0);
  }
}
.Calendar--months-list button:hover {
  background: #c5b6b5;
  border-radius: 5px;
}
.Calendar--months-list button {
  color: #000000;
  font-family: 'SF Display Medium';
}
.Calendar--monthToggle {
  display: flex;
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
  gap: 16px;
  grid-template-columns: repeat(7, 1fr);
}

.days {
  padding-top: 24px;
  box-sizing: border-box;
  color: #ff3b30;
  font-family: 'SF Display Medium';
  display: grid;
  gap: 14.5px;
  grid-template-columns: repeat(7, 1fr);
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
}
.Calendar--days button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #ff3b30;
  font-family: 'SF Display Medium';
  font-size: 20px;
}
.active {
  background-color: #ff3b30 !important;
  color: #ffff !important;
  border-radius: 100px;
  width: 32px;
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
