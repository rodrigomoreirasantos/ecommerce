import {
  createContext,
  FunctionComponent,
  useEffect,
  useMemo,
  useState
} from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  productsTotalPrice: number
  productsCount: number
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
}

interface ChildrenProp {
  children?: React.ReactNode
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  productsTotalPrice: 0,
  productsCount: 0,
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {}
})

const CartContextProvider: FunctionComponent<ChildrenProp> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem('cartProducts')!
    )

    setProducts(productsFromLocalStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products))
  }, [products])

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity
    }, 0)
  }, [products])

  const productsCount = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.quantity
    }, 0)
  }, [products])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductToCart = (product: Product) => {
    const productIsAlreadyInCart = products.some(
      (item) => item.id === product.id
    )

    if (productIsAlreadyInCart) {
      return setProducts((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const removeProductFromCart = (productId: string) => {
    setProducts((products) =>
      products.filter((product) => product.id !== productId)
    )
  }

  const increaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    )
  }
  const decreaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((products) => products.quantity > 0)
    )
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        productsTotalPrice,
        productsCount,
        toggleCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
