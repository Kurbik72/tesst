<script setup lang="ts">
import { computed } from 'vue'

const months = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30,
]

const myComputed = computed(() => {
  const curr = new Date()
  const date = new Date(curr.getFullYear(), curr.getMonth(), 1)
  return date.getDay()
})

console.log(myComputed.value, `fdgdg`)
</script>

<template>
  <div class="Calendar--container">
    <div class="Calendar--header">
      <div class="Calendar--monthChange">
        <button type="button">June 2021</button>
        <img
          src="@/assets/icons/chevron.svg"
          alt=""
        />
      </div>
    </div>
    <div class="dates">
      <div class="Calendar--months">
        <div
          v-for="month of months"
          :key="month"
        >
          {{ month }}
        </div>
      </div>
    </div>
    <div class="days">
      <div
        v-for="day of days"
        :key="day"
        class="Calendar--days"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.Calendar--header {
  display: flex;
}
.Calendar--monthChange {
  display: flex;
  gap: 8px;
}
.Calendar--monthChange button {
  font-family: 'SF Display Bold';
  color: #ff3b30;
  font-size: 20px;
  padding: 0;
}
.Calendar--monthChange img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.Calendar--monthChange button {
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
  display: grid;
  width: 2ch;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
}
.Calendar--days:first-child {
  grid-column-start: v-bind(myComputed);
}
</style>
