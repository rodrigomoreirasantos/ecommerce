import { FunctionComponent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header/header.component'
import Loading from '../loading/loading.component'
import { useSelector } from 'react-redux'

interface ChildrenProp {
  children: React.ReactNode
}

const AuthenticationGuard: FunctionComponent<ChildrenProp> = ({ children }) => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />

        <Loading message="You must be logged in to access this page. You will be redirected to the login page shortly..." />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard
