import styled from 'styled-components'

interface IconAndTextContainerProps {
  variant?: 'top-right'
}
export const IconAndTextContainer = styled.div<IconAndTextContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0 8px;

  line-height: 1.2;

  &,
  a {
    color: ${(props) => props.theme['gray-200']};
  }

  svg {
    line-height: 0;
  }
`
