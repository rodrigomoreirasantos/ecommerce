import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './payment-confirmation.styles'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'
import Colors from '../../theme/theme.colors'
import CustomButton from '../../components/custom-button/custom-button.component'
import { useDispatch } from 'react-redux'
import { clearCartProduct } from '../../store/reducers/user/cart/cart.action'

const PaymentConfirmationPage: FunctionComponent = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled') === 'true'
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'true') {
      dispatch(clearCartProduct())
    }
  }, [status])

  const handleGoToHomePageClick = () => {
    navigate('/')
  }

  return (
    <>
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Your purchase has been successfully completed</p>
            </>
          )}

          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                There was an error completing your purchase. Please try again
              </p>
            </>
          )}
          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleGoToHomePageClick}>
            Checkout
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
