import { BsCart3 } from 'react-icons/bs'

import './header.styles.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-item-container">
        <h2 className="header-title">CLUB CLOTHING</h2>
      </div>

      <div className="header-items">
        <div className="header-item">Explore</div>
        <div className="header-item">Login</div>
        <div className="header-item">Create Account</div>
        <div className="header-item">
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </div>
      </div>
    </div>
  )
}

export default Header
