import { BsCart3 } from 'react-icons/bs'

import './header.styles.css'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.styles'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate('/login')
  }
  return (
    <HeaderContainer>
      <div className="header-item-container">
        <HeaderTitle>CLUB CLOTHING</HeaderTitle>
      </div>

      <HeaderItems>
        <HeaderItem>Explore</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem>Create Account</HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
