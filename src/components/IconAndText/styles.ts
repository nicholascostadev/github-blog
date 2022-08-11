import styled from 'styled-components'

interface IconAndTextContainerProps {
  variant?: 'top-right'
}
export const IconAndTextContainer = styled.div<IconAndTextContainerProps>`
  display: flex;
  align-items: center;

  gap: 0 8px;

  color: ${(props) => props.theme['gray-200']};
`
