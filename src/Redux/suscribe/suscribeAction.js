import axios from "axios";
import { clubError } from "../Home/clubHomeAction";

export const UPDATE_CLUB = "UPDATE_CLUB";

export const updateClubListt = (payload) => ({ type: UPDATE_CLUB, payload });



export const UPDATE_USER = "UPDATE_USER";

export const updateUserInfo = (payload) => ({ type: UPDATE_USER, payload });


export const updateClubListDataa = (data, id, toast) => (dispatch) => {
  
    axios
        .patch(`https://server-monks-backend.herokuapp.com/clubs/${id}`, data)
        .then(({ data }) => {
            
            dispatch(updateClubListt(data));
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

export const updateUserInfoData = (data, id, toast) => (dispatch) => {
   
    axios
        .patch(`https://server-monks-backend.herokuapp.com/users/${id}`, data)
        .then(({ data }) => {
            dispatch(updateUserInfo(data));
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
