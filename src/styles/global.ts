import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme['teal-700']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem "Nunito", sans-serif;
    line-height: 1.6;
  }
`

interface AbsoluteLinkProps {
  position?: 'top-right' | 'top-left'
}

export const AbsoluteLink = styled.a<AbsoluteLinkProps>`
  position: absolute;
  top: 0;
  line-height: 0;
  display: flex;
  align-items: center;
  gap: 0 8px;
  text-decoration: none;
  font-size: 0.875rem;

  ${(props) =>
    props.position === 'top-left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  &,
  svg {
    color: ${(props) => props.theme.blue};
  }

  &:hover {
    text-decoration: underline;
  }
`

export const AbsoluteLinkAsButton = styled.button<AbsoluteLinkProps>`
  position: absolute;
  top: 0;
  line-height: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0 8px;
  text-decoration: none;
  font-size: 0.875rem;

  ${(props) =>
    props.position === 'top-left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  &,
  svg {
    color: ${(props) => props.theme.blue};
  }

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 520px) {
    font-size: 12px;
  }
`
