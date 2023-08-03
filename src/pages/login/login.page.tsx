import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

import CustomButton from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.component'
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'
import CustomInput from '../../components/custom-input/custom-input.component'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Sign with your account</LoginHeadline>

          <CustomButton startIcon={<BsGoogle size={18} />}>
            Sign with Google
          </CustomButton>

          <LoginSubtitle>Sign with your email</LoginSubtitle>
          <LoginInputContainer>
            <CustomInput placeholder="Email" />
          </LoginInputContainer>
          <LoginInputContainer>
            <CustomInput placeholder="Password" />
          </LoginInputContainer>

          <CustomButton startIcon={<FiLogIn size={18} />}>Login</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
