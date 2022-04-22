import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// export const store = createStore(
//   "reducer add here",
//   composeWithDevTools(applyMiddleware(...middleware))
// );

