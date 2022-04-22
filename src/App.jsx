
import './App.css'
import { SignupSignin } from './components/SignupSignIn/signin'
import { Route, Routes } from 'react-router'

function App() {
  

  return (
    <div className="App">

      <Routes>
        <Route path="/signin" element={<SignupSignin />} />
      </Routes>
    </div>
  );
}

export default App;
