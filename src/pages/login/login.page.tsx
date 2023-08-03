import Header from '../../components/header/header.component'
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Sign with your account</LoginHeadline>
          <LoginSubtitle>Sign with your email</LoginSubtitle>
          <LoginInputContainer>{/* Email Input */}</LoginInputContainer>
          <LoginInputContainer>{/* Password Input */}</LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
