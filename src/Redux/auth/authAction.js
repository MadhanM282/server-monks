import axios from "axios";
import { UserData } from "../Rtc/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGIN_LODING = "LOGIN_LODING";

export const LOGOUT = "LOGOUT";

export const loginLoding = () => ({ type: LOGIN_LODING });

export const loginError = () => ({ type: LOGIN_ERROR });

export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });

export const logoutUser = () => ({ type: LOGOUT });

//

export const loginSuccessData = (data, toast, navigate) => (dispatch) => {
  dispatch(loginLoding());
  // dispatch(UserData(data))

  axios
    .post("https://server-monks-backend.herokuapp.com/login", data)
    .then(({ data }) => {
      localStorage.setItem("user", data.user.firstName);
      let DATA = data.user;
      dispatch(loginSuccess(data));
      console.log("logindata", data);

      localStorage.setItem("auth", true);
      localStorage.setItem("id", data.user._id);

      toast.success("Logged in Successfully", {
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
      console.log("DATA", DATA);
      localStorage.setItem("UserData", JSON.stringify(DATA));
    })
    .catch((err) => {
      console.log("err", err.massage);
      dispatch(loginError());
      toast.error("Please check your email or password", {
        position: "top-center",
      });
    });
};

export const updateUserInfoData = (data, id, toast) => (dispatch) => {
  dispatch(loginLoding());
 
  axios
    .patch(`https://server-monks-backend.herokuapp.com/users/${id}`, data)
    .then(({ data }) => {
      dispatch(loginSuccess(data));
      toast.success("Suscribed Added!", {
        position: "top-center",
      });
    })
    .catch((err) => {
      dispatch(loginError());
      toast.error("Try again!", {
        position: "top-center",
      });
    });
};
