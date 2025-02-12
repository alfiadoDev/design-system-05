import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-alfaui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2', }}>
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    }
  ],
  tags: ['autodocs'],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
}

