import { useEffect, useState } from 'react'
import axios from 'axios'

// Utilities
import type Category from '../../types/category.types'
import env from '../config/env.config'

// Styles
import './categories.styles.css'

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
    <div className="categories-container">
      <div className="categories-content">
        {/* {categories.map(category => <CategoryItem)} */}
      </div>
    </div>
  )
}

export default Categories
