import { FooterContainer } from './styles'

export const Footer = () => {
  return (
    <FooterContainer>
      {/* create a copyright for nicholascostadev */}
      <span>© {new Date().getFullYear()} </span>
      <a href="https://nicholascosta.dev">Made by @nicholascostadev</a>
    </FooterContainer>
  )
}
