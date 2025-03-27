import type { Meta, StoryObj } from '@storybook/vue3'
import TimePicker from './TimePicker.vue'

const meta: Meta<typeof TimePicker> = {
  title: 'Components/Calendar/TimePicker/TimePicker',
  component: TimePicker,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['Light', 'Dark'],
    },
    formatTime: {
      control: { type: 'select' },
      options: ['AM', 'PM'],
    },
  },
  args: {
    theme: 'Light',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TimePicker>

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { TimePicker },
    setup() {
      return { args }
    },
    template: '<TimePicker v-bind="args" />',
  }),
}
