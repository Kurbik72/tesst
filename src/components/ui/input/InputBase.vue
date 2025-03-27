<script setup lang="ts">
import { computed, defineModel } from 'vue'

const { theme = 'Light', placeholder = '' } = defineProps<{
  theme?: 'Light' | 'Dark'
  placeholder?: string
}>()

const modelValue = defineModel<string>({ default: '' })
const clearInput = () => {
  modelValue.value = ''
}

const baseInputClasses = computed(() => ({
  BaseInput: true,
  'BaseInput__theme--Light': theme === 'Light',
  'BaseInput__theme--Dark': theme === 'Dark',
}))
</script>

<template>
  <div :class="baseInputClasses">
    <input
      v-model="modelValue"
      type="text"
      :placeholder="placeholder"
      class="BaseInput__input"
    />
    <button
      class="BaseInput__button"
      @click="clearInput"
    >
      <img
        src="@/assets/icons/xmark.circle.fill.svg"
        alt=""
      />
    </button>
  </div>
</template>

<style scoped>
.BaseInput {
  width: max-content;
  height: max-content;
  position: relative;
  display: flex;
  align-items: center;
}

.BaseInput::after {
  content: '';
  position: absolute;
  left: 16px;
  right: 0;
  bottom: 0;
  width: calc(100% - 16px);
  background-color: inherit;
}

.BaseInput__button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  padding-left: 8px;
  padding-right: 16px;
  outline: none;
}
.BaseInput__input {
  font-size: 17px;
  font-style: normal;
  font-family: 'SF Display Medium';
  border: none;
  caret-color: #446bf2;
  background-color: transparent;
  padding: 11px 16px;
  box-sizing: border-box;
  outline: none;
}

/* Светлая тема */
.BaseInput__theme--Light {
  background-color: white;
}
.BaseInput__theme--Light.BaseInput::after {
  border-bottom: 1px solid #c4c4c4;
}
.BaseInput__theme--Light .BaseInput__input {
  color: black;
}

/* Темная тема */
.BaseInput__theme--Dark {
  background-color: #1c1c1e;
}
.BaseInput__theme--Dark.BaseInput::after {
  border-bottom: 1px solid #1c1c1e;
}
.BaseInput__theme--Dark .BaseInput__input {
  color: white;
}
</style>
