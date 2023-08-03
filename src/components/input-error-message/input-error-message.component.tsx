import { FunctionComponent } from 'react'

// Styles
import { InputErrorMessageContainer } from './input-error-message.styles'
interface Props {
  children: React.ReactNode
}
const InputErrorMessage: FunctionComponent<Props> = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
