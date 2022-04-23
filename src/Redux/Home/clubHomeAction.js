import axios from "axios";

export const CLUB_LIST = "CLUB_LIST";

export const GET_CLUB = "GET_CLUB";

export const UPDATE_CLUB = "UPDATE_CLUB";

export const CLUB_ERROR = "CLUB_ERROR";

export const CLUB_LODING = "CLUB_LODING";

export const clubLoding = () => ({ type: CLUB_LODING });

export const clubError = () => ({ type: CLUB_ERROR });

export const clubList = (payload) => ({ type: CLUB_LIST, payload });

export const getClubList = (payload) => ({ type: GET_CLUB, payload });

export const updateClubList = (payload) => ({ type: UPDATE_CLUB, payload });

export const clubListData = (data, toast, navigate) => (dispatch) => {
  dispatch(clubLoding());

  axios
    .post("https://server-monks-backend.herokuapp.com/clubs", data)
    .then(({ data }) => {
      dispatch(clubList(data));
      toast.success("club Added!", {
        position: "top-center",
      });
      setTimeout(() => {
        // navigate("/");
      }, 1000);
    })
    .catch((err) => {
      dispatch(clubError());
      toast.error("Try again!", {
        position: "top-center",
      });
    });
};


export const getClubData = (page,sort,filter) => (dispatch) => {
    dispatch(clubLoding());
    axios.get(`https://server-monks-backend.herokuapp.com/clubs?count=${page}&sortBy=createdAt&OrderBy=${sort}&type=${filter}`).then(({ data }) => {
        dispatch(getClubList(data))
        console.log('data', data);
    })
    .catch((err) => dispatch(clubError()));
}


export const updateClubListData = (data, id, toast, navigate) => (dispatch) => {
  dispatch(clubLoding());

  axios
    .patch(`https://server-monks-backend.herokuapp.com/clubs/${id}`, data)
    .then(({ data }) => {
      dispatch(updateClubList(data));
      toast.success("Suscribed Added!", {
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/clubDetails");
      }, 1000);
    })
    .catch((err) => {
      dispatch(clubError());
      toast.error("Try again!", {
        position: "top-center",
      });
    });
};


