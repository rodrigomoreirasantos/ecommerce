import { FunctionComponent } from 'react'

// Utileties
import Category from '../../types/category.types'

// Styles
import { CategoryItemContainer, CategoryName } from './categoryItem.styles'
import { useNavigate } from 'react-router-dom'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }

  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName onClick={handleExploreClick}>
        <p>{category.displayName}</p>
        <p>Explore</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}
export default CategoryItem
