import { FunctionComponent, useContext, useEffect } from 'react'
import { CategoryContext } from '../../contexts/category.context'
import { Container } from './categories-overview.styles'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  return <Container></Container>
}

export default CategoriesOverview
