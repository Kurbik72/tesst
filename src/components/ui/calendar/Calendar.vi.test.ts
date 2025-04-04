import { test, expect, afterEach, describe } from 'vitest'
import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import Calendar from './Calendar.vue'

let wrapper: ReturnType<typeof shallowMount<typeof Calendar>>

function createComponent({
  props,
}: {
  props?: {
    theme?: 'Light' | 'Dark' | undefined
    modelValue?: Date
  }
}) {
  wrapper = shallowMount(Calendar, {
    props: {
      theme: props?.theme ?? 'Light',
      modelValue: props?.modelValue ?? new Date(),
    },
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
  test('Should correct gridColumnValue when modelValue is 2025-04-04 ', () => {
    createComponent({ props: { modelValue: new Date('2025-04-04') } })
    const daysElement = wrapper.find('.Calendar--days').element as HTMLElement
    const styles = window.getComputedStyle(daysElement)
    

  })
  test('Should show selected day whe modelValue is 2025-04-04 ', () => {
    createComponent({ props: { modelValue: new Date('2025-04-04') } })
    expect(wrapper.find('.active').text()).toBe('4')
  })
  test('Should update reactive index when function selectedDay is called', () => {
    createComponent({})

    wrapper.vm.selectedDay(3)
    expect(wrapper.vm.activeIndex).toBe(3)
  })
  test('Should update boolean value when function toggleCalendar is called', () => {
    createComponent({})

    wrapper.vm.toggleCalendar()
    expect(wrapper.vm.isActive).toBe(true)
  })
  test('Should change month when function changeMonth is called', () => {
    createComponent({})
    wrapper.vm.changeMonth('next')

    expect(wrapper.vm.currentDays.getMonth()).toBe(4)
  })
  test('')
})
