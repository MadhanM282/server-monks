import axios from "axios";

export const USER = "USER";

export const CLUBID = "CLUBID";

export const LOADING = "LOADING";

export const UserData = (payload) => ({ type: USER, payload });

export const ClubAction = (payload) => ({ type: CLUBID, payload });

export const LoadingAction = () => ({ type: LOADING });

export const GetClub = (id, setData) => (dispatch) => {
  dispatch(LoadingAction());

  axios
    .get(`https://server-monks-backend.herokuapp.com/single/${id}`)
    .then(({ data }) => {
      // console.log("data", data);
      setData(data);
    });
};
