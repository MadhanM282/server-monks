import './App.css'
import { SignupSignin } from "./components/SignupSignIn/signin";
import { Route, Routes } from "react-router";
import { Club } from "./components/CreateClub/club";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { NotFound } from "./components/NotFound";
import { MainHome } from "./components/Home/MainHome";
import WebRTC from "./components/WEBRTC/Main";

function App() {
  return (
    <div className="d-flex flex-column justify-content-center w-100 h-100">

      {/* <div className="App"> */}
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signin" element={<SignupSignin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/club" element={<Club />} />
          <Route path="/RTC/:id" element={<WebRTC />} />
        </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
