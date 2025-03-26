import type { Meta, StoryObj } from '@storybook/vue3'
import Switcher from './Switcher.vue'
import { ref } from 'vue'

// argTypes заполняют 1 раз только в МЕТА
const meta: Meta<typeof Switcher> = {
  title: 'Components/Switcher',
  component: Switcher,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['Light', 'Dark'],
    },
  },
  args: {
    options: [
      { text: 'on', value: '1' },
      { text: 'off', value: '2' },
      { text: 'on', value: '3' },
    ],
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Switcher>

export const Default: Story = {
  args: {
    theme: 'Light',
  },
  render: (args) => ({
    components: { Switcher },
    setup: () => {
      const currentValue = ref({ text: 'Admin', value: '1' })
      return { args, currentValue }
    },
    template: '<Switcher v-bind="args" v-model="currentValue">fgh</Switcher>',
  }),
}

export const Other: Story = {
  args: {
    theme: 'Dark',
  },
  render: (args) => ({
    components: { Switcher },
    setup: () => {
      const currentValue = ref({ text: 'Guest', value: '3' })
      return { args, currentValue }
    },
    template: '<Switcher v-bind="args" v-model="currentValue">fgh</Switcher>',
  }),
}
