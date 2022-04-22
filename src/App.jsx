// import './App.css'
import { SignupSignin } from "./components/SignupSignIn/signin";
import { Route, Routes } from "react-router";
import { Home } from "./components/Home/home";
import ResponsiveAppBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <ResponsiveAppBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignupSignin />} />
      </Routes>
    </div>
  );
}

export default App;
