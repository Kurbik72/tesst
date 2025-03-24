import { type Meta, type StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['Light', 'Dark'],
    },
    type: {
      control: { type: 'select' },
      options: ['Filled', 'Tined', 'Gray', 'Plain'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    theme: 'Light',
  },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">дефолтный текст представления</Button>',
  }),
}

export const Other: Story = {
  args: {
    theme: 'Dark',
  },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">другой текст представления</Button>',
  }),
}
