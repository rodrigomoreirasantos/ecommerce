import { collection, getDocs, query, where } from 'firebase/firestore'
import { FunctionComponent, useEffect, useState } from 'react'
import { categoryConverter } from '../../converters/firestore.converter'
import Category from '../../types/category.types'
import Loading from '../loading/loading.component'
import {
  CategoryTitle,
  Container,
  IconContainer,
  ProductsContainer
} from './category-details.styles'
import { BiChevronLeft } from 'react-icons/bi'
import ProductItem from '../product-item/product-item.component'
import { db } from '../../config/firebase.config'
import { useNavigate } from 'react-router-dom'

interface CategoryDetailsProps {
  categoryId: string
}

const CategoryDetails: FunctionComponent<CategoryDetailsProps> = ({
  categoryId
}) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true)
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId)
          )
        )

        const category = querySnapshot.docs[0]?.data()

        setCategory(category)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategory()
  }, [])

  console.log({ category })

  if (isLoading) return <Loading />

  return (
    <Container>
      <CategoryTitle>
        <IconContainer onClick={handleBackClick}>
          <BiChevronLeft size={36} />
        </IconContainer>
        <p>Explore {category?.displayName}</p>
      </CategoryTitle>
      <ProductsContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  )
}

export default CategoryDetails
