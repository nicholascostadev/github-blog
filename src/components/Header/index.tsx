import logo from '../../assets/logo.svg'
import effectLeft from '../../assets/effect-left.svg'
import effectRight from '../../assets/effect-right.svg'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={effectLeft} alt="" />
      <img src={logo} alt="" />
      <img src={effectRight} alt="" />
    </HeaderContainer>
  )
}
