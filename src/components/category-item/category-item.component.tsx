import { FunctionComponent } from 'react'

// Utileties
import Category from '../../types/category.types'

// Styles
import { CategoryItemContainer, CategoryName } from './categoryItem.styles'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explore</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}
export default CategoryItem
