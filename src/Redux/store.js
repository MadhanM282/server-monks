import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, compose, createStore } from "redux";
import { applyMiddleware } from "redux";
import { AuthReducer } from "./auth/authReducer";
import thunk from "redux-thunk";
import { clubHomeReducer } from "./Home/clubHomeReducer";
import { registerReducer } from "./register/registerReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({})
    : compose;

const middleware = [thunk];

<<<<<<< HEAD
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// export const store = createStore(
//   "reducer add here",
//   composeWithDevTools(applyMiddleware(...middleware))
// );

=======
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const rootReducer = combineReducers({
  auth: AuthReducer,
  register: registerReducer,
  club: clubHomeReducer,
});

export const store = createStore(rootReducer, enhancer);
>>>>>>> 1a1099fed03fd09b3aa0e0310f2c544f6ca8b1c7
