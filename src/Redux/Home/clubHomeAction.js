import axios from "axios";

export const SINGLE_CLUB_LIST = "SINGLE_CLUB_LIST";

export const GET_CLUB = "GET_CLUB";

export const UPDATE_CLUB = "UPDATE_CLUB";

export const CLUB_ERROR = "CLUB_ERROR";

export const CLUB_LODING = "CLUB_LODING";

export const clubLoding = () => ({ type: CLUB_LODING });

export const clubError = () => ({ type: CLUB_ERROR });

export const clubList = (payload) => ({ type: SINGLE_CLUB_LIST, payload });

export const getClubList = (payload) => ({ type: GET_CLUB, payload });

export const updateClubList = (payload) => ({ type: UPDATE_CLUB, payload });

export const clubListData = (data, toast, navigate) => (dispatch) => {
  dispatch(clubLoding());

  axios
    .post("https://server-monks-backend.herokuapp.com/clubs", data)
    .then(({ data }) => {
      dispatch(getClubList(data));
      toast.success("club Added!", {
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    })
    .catch((err) => {
      dispatch(clubError());
      toast.error("Try again!", {
        position: "top-center",
      });
    });
};

export const getClubData = (page, sort, filter) => (dispatch) => {
  dispatch(clubLoding());
  axios
    .get(
      `https://server-monks-backend.herokuapp.com/clubs?page=${page}&sortBy=createdAt&OrderBy=${sort}&type=${filter}`
    )
    .then(({ data }) => {
      dispatch(getClubList(data));
      // console.log("data", data);
    })
    .catch((err) => dispatch(clubError()));
};

export const GetClubSingle = (id) => (dispatch) => {
  dispatch(clubLoding());

  axios
    .get(`https://server-monks-backend.herokuapp.com/single/${id}`)
    .then(({ data }) => {
      dispatch(clubList(data));
      
    }).catch((err) => dispatch(clubError()));
};


export const updateClubListData = (data, id, toast) => (dispatch) => {
  dispatch(clubLoding());

  axios
    .patch(`https://server-monks-backend.herokuapp.com/clubs/${id}`, data)
    .then(({ data }) => {
      dispatch(getClubList(data));
      // console.log('dataclubbbb', data);
      toast.success("Suscribed Added!", {
        position: "top-center",
      });
    })
    .catch((err) => {
      dispatch(clubError());
      toast.error("Try again!", {
        position: "top-center",
      });
    });
};
