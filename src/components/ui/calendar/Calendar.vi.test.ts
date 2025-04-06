import { test, expect, afterEach, describe } from 'vitest'
import { enableAutoUnmount, shallowMount, VueWrapper } from '@vue/test-utils'
import Calendar from './Calendar.vue'

let wrapper: VueWrapper

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
  test('Should show selected day when modelValue is 2025-04-04 ', () => {
    createComponent({ props: { modelValue: new Date('2025-04-04') } })
    expect(wrapper.find('.active').text()).toBe('4')
  })
  test('Should show current Month when modelValue is 2025-04-05 ', () => {
    createComponent({ props: { modelValue: new Date('2025-04-05') } })
    expect(wrapper.findByTestId('current-month').text()).toBe('April 2025')
  })

  test('Should changeMonth with value === next when user click to next month', async () => {
    createComponent({ props: { modelValue: new Date('2025-04-05') } })

    await wrapper.find('[data-testid="next-month"]').trigger('click')
    expect(wrapper.find('[data-testid="current-month"]').text()).toBe('May 2025')
  })

  test('Should changeMonth with value === prev when user click to prev month', async () => {
    createComponent({ props: { modelValue: new Date('2025-04-05') } })

    await wrapper.find('[data-testid="prev-month"]').trigger('click')
    expect(wrapper.find('[data-testid="current-month"]').text()).toBe('March 2025')
  })

  test('Should count day to have 30 when month is April', async () => {
    createComponent({ props: { modelValue: new Date('2025-04-01') } })

    expect(wrapper.findAllByTestId('day')).toHaveLength(30)
  })

  test('Should count day to have 31 when month is May', async () => {
    createComponent({ props: { modelValue: new Date('2025-05-01') } })

    expect(wrapper.findAllByTestId('day')).toHaveLength(31)
  })

  test('Should change form 30 days to 31 days when month is changed', async () => {
    // Arrange
    createComponent({ props: { modelValue: new Date('2025-04-01') } })
    expect(wrapper.findAllByTestId('day')).toHaveLength(30)

    // Act
    await wrapper.findByTestId('next-month').trigger('click')

    // Assert
    expect(wrapper.findAllByTestId('day')).toHaveLength(31)
  })
})
