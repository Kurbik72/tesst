import type { Meta, StoryObj } from '@storybook/vue3'
import Calendar from './Calendar.vue'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar/Calendar',
  component: Calendar,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['Light', 'Dark'],
    },
  },
  args: {
    theme: 'Light',
    Date: new Date(),
  },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  args: {
    theme: 'Light',
  },
  render(args) {
    return {
      components: { Calendar },
      setup() {
        return { args }
      },
      template: '<Calendar v-bind="args" v-model="args.Date" />',
    }
  },
}
