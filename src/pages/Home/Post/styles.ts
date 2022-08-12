import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(NavLink)`
  border-radius: 0.625rem;

  border: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  gap: 1.25rem 0;
  background: ${(props) => props.theme['teal-500']};
  text-decoration: none;
  border: 1px solid transparent;
  transition: border 0.2s;

  display: block;
  width: 100%;

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

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 14px;
      color: ${(props) => props.theme['teal-200']};
    }
  }
`
