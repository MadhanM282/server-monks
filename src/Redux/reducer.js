import { SET_EVENTS } from "./actions";
import { combineReducers } from "redux";
const initialState = {
  allEvents: [],
};

const setEventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_EVENTS:
      return { ...state, allEvents: payload };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  setAllEvents: setEventReducer,
});
