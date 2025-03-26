import type { Meta, StoryObj } from '@storybook/vue3'
import TextField from './TextField.vue'

const meta: Meta<typeof TextField> = {
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['Light', 'Dark'],
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    theme: 'Light',
    placeholder: 'test',
  },
  render: (args) => ({
    components: { TextField },
    setup: () => ({ args }),
    template: '<TextField  v-bind="args" />',
  }),
}

export const other: Story = {
  args: {
    theme: 'Dark',
  },
  render: (args) => ({
    components: { TextField },
    setup: () => ({ args }),
    template: '<TextField  v-bind="args" />',
  }),
}
