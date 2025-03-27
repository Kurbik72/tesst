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
    description: 'We’ll recommend more like this in Listen Now.',
    theme: 'Light',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CenterAlert>

export const Default: Story = {
  render: (args) => ({
    components: { CenterAlert },
    setup: () => ({ args }),
    template: '<CenterAlert v-bind="args" />',
  }),
}
