import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Switcher2 from './Switcher2.vue'

// argTypes заполняют 1 раз только в МЕТА
const meta: Meta<typeof Switcher2> = {
  title: 'Components/Switcher2',
  component: Switcher2,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['Light', 'Dark'],
    },
  },
  args: {
    options: [
      { text: 'Admin', value: '1' },
      { text: 'User', value: '2' },
      { text: 'Guest', value: '3' },
    ],
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Switcher2>

export const Default: Story = {
  args: {
    theme: 'Light',
  },
  render: (args) => ({
    components: { Switcher2 },
    setup: () => {
      const currentValue = ref({ text: 'Admin', value: '1' })
      return { args, currentValue }
    },
    template: '<Switcher2 v-bind="args" v-model="currentValue">fgh</Switcher>',
  }),
}

export const Other: Story = {
  args: {
    theme: 'Dark',
  },
  render: (args) => ({
    components: { Switcher2 },
    setup: () => {
      const currentValue = ref({ text: 'Guest', value: '3' })
      return { args, currentValue }
    },
    template: '<Switcher2 v-bind="args" v-model="currentValue">fgh</Switcher>',
  }),
}
