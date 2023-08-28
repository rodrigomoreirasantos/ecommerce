import { FunctionComponent } from 'react'
import Product from '../../types/product.types'
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'
import CustomButton from '../custom-button/custom-button.component'
import { BsCartPlus } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../store/reducers/user/cart/cart.action'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCartClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Add Cart
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
