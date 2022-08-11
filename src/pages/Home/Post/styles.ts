import styled from 'styled-components'

export const PostContainer = styled.a`
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme['teal-500']};
  padding: 2rem;
  text-decoration: none;
  border: 1px solid transparent;
  transition: border 0.2s;

  h1 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.25rem;
  }
  p {
    color: ${(props) => props.theme['teal-100']};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme['teal-300']};
  }
`
