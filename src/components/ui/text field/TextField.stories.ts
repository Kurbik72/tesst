import type { Meta, StoryObj } from '@storybook/vue3'
import TextField from './TextField.vue'

const meta: Meta<typeof TextField> = {
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['Light', 'Dark'],
    },
    mode: {
      control: { type: 'select' },
      options: ['Default', 'Active', 'Typing', 'Typed'],
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
    mode: 'Default',
    theme: 'Light',
  },
  render: (args) => ({
    components: { TextField },
    setup: () => {
      args
    },
    template: '<TextField r v-bind="args" />',
  }),
}
