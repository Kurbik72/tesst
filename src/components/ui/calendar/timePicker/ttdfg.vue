<template>
  <div class="time-input">
    <input
      v-model="hours"
      type="text"
      maxlength="2"
      placeholder="HH"
      @keydown="blockInvalidKeys($event, 23)"
      @input="formatInput('hours', 23)"
    />
    :
    <input
      v-model="minutes"
      type="text"
      maxlength="2"
      placeholder="MM"
      @keydown="blockInvalidKeys($event, 59)"
      @input="formatInput('minutes', 59)"
    />
    <p
      v-if="errorMessage"
      class="error"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: '',
      minutes: '',
      errorMessage: '',
    }
  },
  methods: {
    blockInvalidKeys(event, max) {
      const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab']
      if (allowedKeys.includes(event.key)) return

      // Блокируем ввод нецифровых символов
      if (!/^\d$/.test(event.key)) {
        event.preventDefault()
      }

      // Блокируем ввод, если уже 2 символа
      if (event.target.value.length >= 2) {
        event.preventDefault()
      }
    },
    formatInput(type, max) {
      let value = this[type]

      // Убираем все нечисловые символы (на случай вставки)
      value = value.replace(/\D/g, '')

      // Если число выходит за пределы, не даем вводить больше
      if (value.length === 2 && parseInt(value, 10) > max) {
        this.errorMessage = type === 'hours' ? 'Часы: 00-23' : 'Минуты: 00-59'
      } else {
        this.errorMessage = ''
      }

      this[type] = value
    },
  },
}
</script>

<style scoped>
.time-input {
  display: flex;
  align-items: center;
  font-size: 20px;
}

input {
  width: 40px;
  text-align: center;
  font-size: 18px;
  padding: 5px;
  margin: 2px;
}

.error {
  color: red;
  font-size: 14px;
  margin-left: 10px;
}
</style>
