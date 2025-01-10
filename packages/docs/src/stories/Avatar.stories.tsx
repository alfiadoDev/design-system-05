import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-alfaui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/61153857?v=4',
    alt: 'Alfiado Ngana'
  },
  tags: ['autodocs'],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}