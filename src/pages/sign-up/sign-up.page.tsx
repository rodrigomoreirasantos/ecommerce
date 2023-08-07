import { FiLogIn } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import validator from 'validator'

import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up.styles'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'

interface SignUpForm {
  name: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignUpForm>()

  const handleSubmitPress = (data: SignUpForm) => {
    console.log({ data })
  }

  const watchPassword = watch('password')

  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Create your account</SignUpHeadline>
          <SignUpInputContainer>
            <p>Name</p>
            <CustomInput
              placeholder="Name"
              hasError={!!errors?.name}
              {...register('name', { required: true })}
            />
            {errors?.name?.type === 'required' && (
              <InputErrorMessage>Name is required</InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Last Name</p>
            <CustomInput
              placeholder="Last Name"
              hasError={!!errors?.lastName}
              {...register('lastName', { required: true })}
            />
            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>Last Name is required</InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Email</p>
            <CustomInput
              placeholder="Email"
              hasError={!!errors?.email}
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>Email is required</InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>Email will be validate </InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Password</p>
            <CustomInput
              placeholder="Password"
              type="password"
              hasError={!!errors?.password}
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>Password is required</InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Password Confirmation</p>
            <CustomInput
              placeholder="Password Confirmation"
              type="password"
              hasError={!!errors?.passwordConfirmation}
              {...register('passwordConfirmation', {
                required: true,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />
            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>
                Password Confirmation is required
              </InputErrorMessage>
            )}
            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>
                Password Confirmation and Password is not the same
              </InputErrorMessage>
            )}
          </SignUpInputContainer>
          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Create Account
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUpPage
