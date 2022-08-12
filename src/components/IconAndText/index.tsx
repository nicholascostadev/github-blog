import { ReactNode } from 'react'
import { IconAndTextContainer } from './styles'

interface IconAndTextProps {
  icon: ReactNode
  children: string | number | undefined | ReactNode
}

export const IconAndText = ({ children, icon }: IconAndTextProps) => {
  return (
    <IconAndTextContainer>
      {icon}
      {typeof children === 'number' ? `${children} followers` : children}
    </IconAndTextContainer>
  )
}
