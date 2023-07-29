import './App.css'

import { type FunctionComponent } from 'react'

interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
