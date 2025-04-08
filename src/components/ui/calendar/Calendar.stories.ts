import type { Meta, StoryObj } from '@storybook/vue3'
import Calendar from './Calendar.vue'
import { ref } from 'vue'

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
        const date = ref(new Date())

        return {
          args,
          date,
        }
      },
      template: '<Calendar v-bind="args" v-model="date" />',
    }
  },
}
