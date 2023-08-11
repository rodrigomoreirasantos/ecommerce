import { useContext, useEffect } from 'react'

// Component
import CategoryItem from '../category-item/category-item.component'

// Utilities

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import { CategoryContext } from '../../contexts/category.context'
import Loading from '../loading/loading.component'

const Categories = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    const dataFetch = async () => {
      await fetchCategories()
    }

    dataFetch()
  }, [])

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
