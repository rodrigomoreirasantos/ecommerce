import { FunctionComponent } from 'react'
import { LoadingContainer } from './loading.styles'
import SyncLoader from 'react-spinners/SyncLoader'

interface LoadingProp {
  message?: string
}

const Loading: FunctionComponent<LoadingProp> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}

export default Loading
