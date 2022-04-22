import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { SignupSignin } from './components/SignupSignIn/signin'
import { Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Routes>
        <Route path="/signin" element={<SignupSignin />} />
      </Routes>
    </div>
  )
}

export default App
