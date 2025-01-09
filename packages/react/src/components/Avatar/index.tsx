import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './style'
import { User } from 'phosphor-react'

// eslint-disable-next-line prettier/prettier
export interface AvatarProps extends ComponentProps<typeof AvatarImage> { }

export const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
