import { FunctionComponent, useContext } from 'react'
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.styles'
import CustomButton from '../custom-button/custom-button.component'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Your Cart</CartTitle>

        {/* products */}

        <CartTotal>Total: $999</CartTotal>

        <CustomButton startIcon={<BsCartCheck />}>Checkout</CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
