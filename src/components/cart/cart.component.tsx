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
import CartItem from '../cart-item/cart-item.component'

const Cart: FunctionComponent = () => {
  const { isVisible, products, productsTotalPrice, productsCount, toggleCart } =
    useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Your Cart</CartTitle>

        {/* products */}
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <CartTotal>Total: ${productsTotalPrice}</CartTotal>
        )}

        {productsCount > 0 && (
          <CustomButton startIcon={<BsCartCheck />}>Checkout</CustomButton>
        )}

        {productsCount === 0 && <p>Your cart is empty!</p>}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
