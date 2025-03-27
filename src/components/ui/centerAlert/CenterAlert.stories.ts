import type { Meta, StoryObj } from '@storybook/vue3'
import CenterAlert from './CenterAlert.vue'

const meta: Meta<typeof CenterAlert> = {
  title: 'Components/CenterAlert',
  component: CenterAlert,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['Light', 'Dark'],
    },
  },
  args: {
    title: 'Loved',
    theme: 'Light',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CenterAlert>

export const ThemeLight: Story = {
  args: {
    theme: 'Light',
    description: 'We’ll recommend more like this in Listen Now.',
  },
  render: (args) => ({
    components: { CenterAlert },
    setup: () => ({ args }),
    template: '<CenterAlert v-bind="args" />',
  }),
}
export const ThemeDark: Story = {
  args: {
    theme: 'Dark',
    description: 'We’ll recommend more like this in Listen Now.',
  },
  render: (args) => ({
    components: { CenterAlert },
    setup: () => ({ args }),
    template: '<CenterAlert v-bind="args" />',
  }),
}
