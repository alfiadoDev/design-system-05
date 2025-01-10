import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-alfaui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
  tags: ['autodocs'],
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      descriptions: {
        story: 'Por padrao o heading sempre sera um `h2`, mas podemos alterar isso com a propriedade `as`',
      }
    }
  }
}