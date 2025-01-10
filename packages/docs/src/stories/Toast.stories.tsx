import { StoryFn, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-alfaui/react'
import { useArgs } from 'storybook/internal/preview-api'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
  args: {
    title: 'Agendamento Realizado',
    description: 'Quarta-feira, 16 de abril às 15h',
    open: true,
  },
} as Meta<ToastProps>
export const Template: StoryFn<typeof Toast> = ({ open, ...args }) => {
  const [, updateArgs] = useArgs()
  return (
    <Toast open={open} onOpenChange={() => updateArgs({ open })} {...args} />
  )
}