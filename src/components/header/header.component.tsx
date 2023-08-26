import { BsCart3 } from 'react-icons/bs'

import './header.styles.css'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { logoutUser } from '../../store/reducers/user/user.action'

const Header = () => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const dispatch = useDispatch()
  const { productsCount, toggleCart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  const handleSignOutClick = () => {
    dispatch(logoutUser())
    signOut(auth)
  }

  return (
    <HeaderContainer>
      <div className="header-item-container">
        <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>
      </div>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explore</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Create Account</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <HeaderItem onClick={handleSignOutClick}>Logout</HeaderItem>
        )}
        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
