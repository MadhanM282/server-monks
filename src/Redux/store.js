import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import { AuthReducer } from "./auth/authReducer";
import thunk from "redux-thunk";
import { clubHomeReducer } from "./Home/clubHomeReducer";
import { registerReducer } from "./register/registerReducer";


const rootReducer = combineReducers({
  auth: AuthReducer,
  register: registerReducer,
  club: clubHomeReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));



  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
