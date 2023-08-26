import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase.config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { userConverter } from './converters/firestore.converter'
import Loading from './components/loading/loading.component'
import Explore from './pages/explore/explore.page'
import CategoryDetailsPage from './pages/category-details/category-details.page'
import Cart from './components/cart/cart.component'
import CheckoutPage from './pages/checkout/checkout.pages'
import AuthenticationGuard from './components/guards/authentication.guard'
import PaymentConfirmationPage from './pages/payment-confirmation/payment-confirmation.page'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logoutUser } from './store/reducers/user/user.action'

const App = () => {
  const [isInitializing, setIsInitializing] = useState(true)
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user
      if (isSigningOut) {
        dispatch(logoutUser())

        return setIsInitializing(false)
      }

      const isSigningIn = !isAuthenticated && user
      if (isSigningIn) {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )

        const userFromFirestore = querySnapshot.docs[0]?.data()

        dispatch(loginUser(userFromFirestore))

        return setIsInitializing(false)
      }
      return setIsInitializing(false)
    })
  }, [dispatch])

  if (isInitializing) return <Loading />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route
          path="/checkout"
          element={
            <AuthenticationGuard>
              <CheckoutPage />
            </AuthenticationGuard>
          }
        />
        <Route
          path="/payment-confirmation"
          element={<PaymentConfirmationPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Routes>

      <Cart />
    </BrowserRouter>
  )
}

export default App
