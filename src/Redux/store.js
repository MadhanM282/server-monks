import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];
// export const store = createStore(
//   "reducer add here",
//   composeWithDevTools(applyMiddleware(...middleware))
// );
