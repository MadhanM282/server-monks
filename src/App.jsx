// import './App.css'
import { SignupSignin } from "./components/SignupSignIn/signin";
import { Route, Routes } from "react-router";
import { Home } from "./components/Home/home";
import { Club } from "./components/CreateClub/club";

import ResponsiveAppBar from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      {/* <ResponsiveAppBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signin" element={<SignupSignin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/club" element={<Club />} />
      </Routes>
    </div>
  );
}

export default App;
