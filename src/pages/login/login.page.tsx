import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

import { useForm } from 'react-hook-form'

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
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const handlePressSubmit = (data: any) => {
    console.log(data)
  }
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
            <p>Email</p>
            <CustomInput
              placeholder="Email"
              hasError={!!errors?.email}
              {...register('email', { required: true })}
            />
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Password</p>
            <CustomInput
              placeholder="Password"
              hasError={!!errors?.password}
              {...register('password', { required: true })}
            />
          </LoginInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handlePressSubmit)()}>
            Login
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
