import type { Meta, StoryObj } from '@storybook/vue3'
import InputBase from './InputBase.vue'

const meta: Meta<typeof InputBase> = {
  title: 'Components/Inputs/InputBase',
  component: InputBase,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['Light', 'Dark'],
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
  args: {
    placeholder: 'Placeholder',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof InputBase>

export const ThemeLight: Story = {
  args: {
    theme: 'Light',
  },
  render: (args) => ({
    components: { InputBase },
    setup: () => ({ args }),
    template: '<InputBase  v-bind="args" />',
  }),
}

export const ThemeDark: Story = {
  args: {
    theme: 'Dark',
  },
  render: (args) => ({
    components: { InputBase },
    setup: () => ({ args }),
    template: '<InputBase  v-bind="args" />',
  }),
}
