import { styled } from '../styles'
import { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

// eslint-disable-next-line prettier/prettier
export interface BoxProps extends ComponentProps<typeof Box> { }
