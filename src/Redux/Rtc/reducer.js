import { CLUBID, LOADING, USER } from "./actions";

const initial = {
  user: {},
  Club: {},
  loading:false
};

export const RwtReducer = (store = initial, { type, payload }) => {
  switch (type) {
    case USER:
      return { ...store, user: payload };
    case CLUBID:
      return { ...store, Club: payload,loading:false };
      case LOADING : return{...store,loading:true}
    default:
      return { store };
  }
};
