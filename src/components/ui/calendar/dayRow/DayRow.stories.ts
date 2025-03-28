import { type Meta, type StoryObj } from '@storybook/vue3'
import DayRow from './DayRow.vue'

const meta: Meta<typeof DayRow> = {
  title: 'Components/Calendar/DayRow/DayRow',
  component: DayRow,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['Light', 'Dark'],
    },
    type: {
      control: { type: 'select' },
      options: ['Digits', 'Days'],
    },
  },
  args: {
    theme: 'Light',
    type: 'Days',
    options: [7, 8, 9, 10, 11, 12, 13],
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DayRow>

export const Default: Story = {
  args: {
    theme: 'Light',
  },
  render(args) {
    return {
      components: { DayRow },
      setup: () => ({ args }),
      template: '<DayRow v-bind="args" />',
    }
  },
}
