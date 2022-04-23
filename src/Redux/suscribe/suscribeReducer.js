import { UPDATE_CLUB, UPDATE_USER } from "./suscribeAction";

const initialState = {
  userUpdated: {},
  clubUpdated: {},
  suscribed: false,
};

export const suscribeReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CLUB:
      return { clubUpdated: payload, suscribed: true };

    case UPDATE_USER:
      return { userUpdated: payload, suscribed: true };

    default:
      return store;
  }
};
