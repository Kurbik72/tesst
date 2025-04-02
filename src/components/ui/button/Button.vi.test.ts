import { test, expect, afterEach } from 'vitest'
import { enableAutoUnmount, shallowMount, VueWrapper } from '@vue/test-utils'
import Button from './Button.vue'

let wrapper: VueWrapper

function createComponent(options?: {
  props?: {
    theme?: 'Light' | 'Dark'
    type?: 'Filled' | 'Tined' | 'Gray' | 'Plain'
    src?: string
  }
  slots?: {
    default?: string
  }
}) {
  wrapper = shallowMount(Button, {
    props: options?.props,
    slots: options?.slots,
  })
}

enableAutoUnmount(afterEach)

test('Should show light theme when props theme is Light', () => {
  createComponent({ props: { theme: 'Light' } })

  expect(wrapper.classes()).toContain('button__theme--Light')
})

test('Should show dark theme when props theme is Dark', () => {
  createComponent({ props: { theme: 'Dark' } })

  expect(wrapper.classes()).toContain('button__theme--Dark')
})

test('Should show type Filled when props type is Filled', () => {
  createComponent({ props: { type: 'Filled' } })

  expect(wrapper.classes()).toContain('button__type--Filled')
})

test('Should show type Tined when props type is Tined', () => {
  createComponent({ props: { type: 'Tined' } })

  expect(wrapper.classes()).toContain('button_type--Tined')
})

test('Should show type Plain when props type is Plain', () => {
  createComponent({ props: { type: 'Plain' } })

  expect(wrapper.classes()).toContain('button_type--Plain')
})

test('Should show Dark_Gray type when props type is Gray and theme Dark', () => {
  createComponent({ props: { theme: 'Dark', type: 'Gray' } })

  expect(wrapper.classes()).toContain('button_theme_and_type--Dark_Gray')
})

test('Should show Light_Gray type when props type is Gray and theme Light', () => {
  createComponent({ props: { theme: 'Light', type: 'Gray' } })

  expect(wrapper.classes()).toContain('button_theme_and_type--Light_Gray')
})

for (const { src, isExpectedSrc } of [
  { src: 'http://www/ru', isExpectedSrc: 'http://www/ru' },
  { src: 'www/ru', isExpectedSrc: 'www/ru' },
  { src: 'http://www/ru.jpg', isExpectedSrc: 'http://www/ru.jpg' },
]) {
  test(`Should img src is: ${isExpectedSrc} when props src is ${src}`, () => {
    createComponent({ props: { src } })

    expect(wrapper.find('img').attributes('src')).toBe(isExpectedSrc)
  })
}

test('Should emit click event when user click to button', async () => {
  createComponent()

  await wrapper.trigger('click')

  expect(wrapper.emitted('click')).toHaveLength(1)
})

test('Should sefault slot when slot is set', () => {
  const defaultSlot = 'Get Started'
  createComponent({
    slots: { default: defaultSlot },
  })

  expect(wrapper.text()).toContain(defaultSlot)
})
