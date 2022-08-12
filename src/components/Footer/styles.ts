import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme['teal-600']};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  gap: 0.25rem;
  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }

    > span {
      color: ${(props) => props.theme.white};
      text-decoration: none;
    }
  }
`
