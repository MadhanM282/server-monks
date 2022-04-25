import {
  GET_CLUB,
  CLUB_ERROR,
  SINGLE_CLUB_LIST,
  CLUB_LODING,
  UPDATE_CLUB,
} from "./clubHomeAction";

const initialState = {

  clubList: [],
  loding: false,
  error: false,
  singleClub: {}
};

export const clubHomeReducer = (store = initialState, { type, payload }) => {
  switch (type) {

    case CLUB_LODING:
      return { ...store, loding: true };

    case CLUB_ERROR:
      return { ...store, loding: false, error: true };

    case GET_CLUB:
      return { ...store, loding: false, error: false, clubList: payload };
    case SINGLE_CLUB_LIST:
      return { ...store, loding: false, error: false, singleClub: payload };

    default:
      return store;
  }
};
