<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  theme?: 'Light' | 'Dark'
  placeholder?: string
}>()

const value = ref('')
const clearInput = () => {
  value.value = ''
}

const textFieldWrapper = computed(() => ({
  'text-field__theme--Light': props.theme === 'Light',
  'text-field__theme--Dark': props.theme === 'Dark',
}))
</script>

<template>
  <div :class="textFieldWrapper">
    <div class="text_field">
      <input v-model="value" type="text" :placeholder="props?.placeholder" />
      <img src="@/assets/icons/xmark.svg" alt="" @click="clearInput" />
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'SF Disp';
  src: url('../../../assets/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Medium.otf');
}
.text_field {
  width: 100%;
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
}
.text_field img {
  cursor: pointer;
}
.text_field::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -11px;
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
  background-color: inherit;
}
.text_field input {
  font-size: 17px;
  font-style: normal;
  font-family: 'SF Disp';
  border: none;
  caret-color: #446bf2;
  opacity: 0.8;
  background-color: transparent;
}
.text_field input:focus {
  outline: none;
}

/* Светлая тема */
.text-field__theme--Light {
  width: max-content;
  height: max-content;
  background-color: white; /* Добавлен фон */
  color: black;
}

/* Темная тема */
.text-field__theme--Dark {
  width: max-content;
  height: max-content;
  background-color: #1c1c1e;
  color: white;
}
.text-field__theme--Dark input {
  color: white;
}
</style>
