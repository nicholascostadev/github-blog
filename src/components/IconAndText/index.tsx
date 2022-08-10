import { ReactNode } from 'react'
import { IconAndTextContainer } from './styles'

interface IconAndTextProps {
  icon: ReactNode
  children: string
}

export const IconAndText = ({ children, icon }: IconAndTextProps) => {
  return (
    <IconAndTextContainer>
      {icon}
      {children}
    </IconAndTextContainer>
  )
}
