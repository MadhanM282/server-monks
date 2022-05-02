import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, compose, createStore } from "redux";
import { applyMiddleware } from "redux";
import { AuthReducer } from "./auth/authReducer";
import thunk from "redux-thunk";
import { clubHomeReducer } from "./Home/clubHomeReducer";
import { registerReducer } from "./register/registerReducer";
import { RwtReducer } from "./Rtc/reducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  auth: AuthReducer,
  register: registerReducer,
  club: clubHomeReducer,
  Rtc: RwtReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
