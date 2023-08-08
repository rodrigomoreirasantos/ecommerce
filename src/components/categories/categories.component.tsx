import { useEffect, useState } from 'react'

// Component
import CategoryItem from '../category-item/category-item.component'

// Utilities
import type Category from '../../types/category.types'
import { getDocs, collection } from 'firebase/firestore'

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converter'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapShot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))
      querySnapShot.forEach((doc: any) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
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
