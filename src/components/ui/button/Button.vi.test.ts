import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

test('тема светлая, кнопка типа Gray ', () => {
  const wrapper = mount(Button, {
    props: {
      theme: 'Light',
      type: 'Gray',
    },
  })
  expect(wrapper.classes()).toContain('button')
  expect(wrapper.classes()).toContain('button__theme--Light')
  expect(wrapper.classes()).toContain('button_theme_and_type--Light_Gray')
})
test('тема темная, кнопка типа Plain ', () => {
  const wrapper = mount(Button, {
    props: {
      theme: 'Dark',
      type: 'Plain',
    },
  })
  expect(wrapper.classes()).toContain('button')
  expect(wrapper.classes()).toContain('button__theme--Dark')
  expect(wrapper.classes()).toContain('button_type--Plain')
})

test('клик возвращает эмит', async () => {
  const wrapper = mount(Button)
  await wrapper.trigger('click')
  expect(wrapper.emitted().click).toBeTruthy()
})
