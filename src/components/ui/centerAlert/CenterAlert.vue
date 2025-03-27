<script setup lang="ts">
import { computed } from 'vue'

const { title, description, theme } = defineProps<{
  theme: 'Light' | 'Dark'
  title: string
  description?: string
}>()

const centerAlertClasses = computed(() => ({
  centerAlert__container: true,
  'centerAlert__container--Dark': theme === 'Dark',
  'centerAlert__container--Light': theme === 'Light',
}))
</script>

<template>
  <div :class="centerAlertClasses">
    <div class="centerAlert__content">
      <img
        v-if="theme === 'Light'"
        src="@/assets/icons/IconLight.svg"
        alt=""
      />
      <img
        v-else
        src="@/assets/icons/IconDark.svg"
        alt=""
      />
      <div class="centerAlert__text">
        <div class="centerAlert__title">
          {{ title }}
        </div>
        <div class="centerAlert__description">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.centerAlert__container {
  backdrop-filter: blur(40px);
  border-radius: 8px;
}
.centerAlert__container--Dark {
  background: var(--System-Background-Dark-Base-Secondary, #1c1c1e);
}
.centerAlert__container--Dark .centerAlert__text {
  color: var(--Label-Color-Dark-Secondary, rgba(235, 235, 245, 0.6));
}
.centerAlert__container--Light {
  color: var(--Label-Color-Light-Secondary, rgba(60, 60, 67, 0.6));
  background: rgba(250, 250, 250, 0.93);
}

.centerAlert__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 85px 16px 28px 16px;
  box-sizing: border-box;
  gap: 28px;
  flex-shrink: 0;
}

.centerAlert__text {
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow-wrap: break-word;
}

.centerAlert__title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SF Display Medium';
  font-style: normal;
  font-size: 22px;
}
.centerAlert__description {
  font-family: 'SF Display Light';
  flex-wrap: wrap;
  text-align: center;
  padding-top: 2px;
  box-sizing: border-box;
  font-size: 16px;
  font-style: normal;
}
</style>
