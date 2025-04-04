import type { Meta, StoryObj } from '@storybook/vue3'
import Calendar from './Calendar.vue'
import { ref, watch } from 'vue'

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
        const date = ref(new Date(args.Date))

        watch(date, (newDate) => {
          args.Date = newDate.getTime()
        })
        watch(
          () => args.Date,
          (newValue) => {
            date.value = new Date(newValue)
          },
        )

        return {
          args,
          date,
        }
      },
      template: '<Calendar v-bind="args" v-model="date" />',
    }
  },
}
