import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, compose, createStore } from "redux";
import { applyMiddleware } from "redux";
import { AuthReducer } from "./auth/authReducer";
import thunk from "redux-thunk";
import { clubHomeReducer } from "./Home/clubHomeReducer";
import { registerReducer } from "./register/registerReducer";
import { RwtReducer } from "./Rtc/reducer";
import { suscribeReducer } from "./suscribe/suscribeReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__()
    : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const rootReducer = combineReducers({
  auth: AuthReducer,
  register: registerReducer,
  club: clubHomeReducer,
  Rtc: RwtReducer,
  suscribe: suscribeReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
