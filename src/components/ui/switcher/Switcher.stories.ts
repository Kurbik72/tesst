import type { Meta, StoryObj } from '@storybook/vue3'
import Switcher from './Switcher.vue'

const meta: Meta<typeof Switcher> = {
  title: 'Components/Switcher',
  component: Switcher,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Switcher>

export const Default: Story = {
  args: {
    options: [{ text: 'text', value: '1' }],
  },
  render: (args) => ({
    components: { Switcher },
    setup: () => ({ args }),
    template: '<Switcher v-bind="args">fgh</Switcher>',
  }),
}
