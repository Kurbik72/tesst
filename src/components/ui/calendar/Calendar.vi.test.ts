import { test, expect, afterEach, describe } from 'vitest'
import { enableAutoUnmount, shallowMount, VueWrapper } from '@vue/test-utils'
import Calendar from './Calendar.vue'

let wrapper: VueWrapper

function createComponent(options?: {
  props?: {
    theme?: 'Light' | 'Dark'
    modelValue?: Date
  }
}) {
  wrapper = shallowMount(Calendar, {
    props: options?.props,
  })
}
enableAutoUnmount(afterEach)

describe('Calendar', () => {
  test('Should show light theme when props theme is Light', () => {
    createComponent({ props: { theme: 'Light' } })
    expect(wrapper.classes()).toContain('Calendar--theme--Light')
  })
  test('Should show dark theme when props theme is Dark', () => {
    createComponent({ props: { theme: 'Dark' } })

    expect(wrapper.classes()).toContain('Calendar--theme--Dark')
  })
})
