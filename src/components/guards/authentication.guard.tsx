import { FunctionComponent, useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/user.context'
import { useNavigate } from 'react-router-dom'
import Header from '../header/header.component'
import Loading from '../loading/loading.component'

interface ChildrenProp {
  children: React.ReactNode
}

const AuthenticationGuard: FunctionComponent<ChildrenProp> = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)
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
