import { useEffect, useState } from 'react'
import axios from 'axios'

// Component
import CategoryItem from '../category-item/category-item.component'

// Utilities
import type Category from '../../types/category.types'
import env from '../../config/env.config'

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)

      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    const dataFetch = async () => {
      await fetchCategories()
    }

    dataFetch()
  }, [])

  return (
    <CategoriesContainer>
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
