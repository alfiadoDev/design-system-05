import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-alfaui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2', }}>
          <Text size="sm">Description</Text>
          {Story()}
        </Box>
      )
    }
  ],
  tags: ['autodocs'],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your description',
  }
}


export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  }
}
