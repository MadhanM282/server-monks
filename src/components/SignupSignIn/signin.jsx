import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginSuccessData } from "../../Redux/auth/authAction";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { registerSuccessData } from "../../Redux/register/registerAction";
import { UserData } from "../../Redux/Rtc/actions";

export const SignupSignin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [Signup, SetSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const HandelChangeSignup = (e) => {
    const { id, value } = e.target;
    SetSignup({ ...Signup, [id]: value });
  };

  const [Signin, SetSignin] = useState({
    email: "",
    password: "",
  });

  const HandelChangeSignin = (e) => {
    const { id, value } = e.target;
    SetSignin({ ...Signin, [id]: value });
  };

  const Register = () => {
    console.log("Signup", Signup);

    dispatch(registerSuccessData(Signup, toast));
    container.classList.remove("right-panel-active");
  };

  const Login = () => {
    console.log("Signin", Signin);
    dispatch(UserData(Signin));
    dispatch(loginSuccessData(Signin, toast, navigate));
  };

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input
              onChange={HandelChangeSignup}
              id="firstName"
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={HandelChangeSignup}
              id="lastName"
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={HandelChangeSignup}
              id="email"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={HandelChangeSignup}
              id="password"
              type="password"
              placeholder="Password"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                Register();
              }}
            >
              {" "}
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <input
              id="email"
              onChange={HandelChangeSignin}
              type="email"
              placeholder="Email"
            />
            <input
              id="password"
              onChange={HandelChangeSignin}
              type="password"
              placeholder="Password"
            />
            <a href="#">Forgot your password?</a>
            <button
              onClick={(e) => {
                e.preventDefault();
                Login();
              }}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => {
                  container.classList.remove("right-panel-active");
                }}
                className="ghost"
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                onClick={() => {
                  container.classList.add("right-panel-active");
                }}
                className="ghost"
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

/*

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
*/
