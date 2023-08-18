import { FunctionComponent, useContext } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import CartProduct from '../../types/cart.types'
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item.styles'
import { CartContext } from '../../contexts/cart.context'

interface CartItemProp {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProp> = ({ product }) => {
  const { removeProductFromCart } = useContext(CartContext)

  const handleRemoveClick = () => {
    removeProductFromCart(product.id)
  }

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
