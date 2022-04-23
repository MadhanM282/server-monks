import {

    CLUB_ERROR,

    CLUB_LODING,

} from "./loadAction";

const initialState = {

    loding: false,
    error: false,

};


export const loadReducer = (store = initialState, { type}) => {
    switch (type) {

        case CLUB_LODING:
            return { ...store, loding: true };

        case CLUB_ERROR:
            return { ...store, loading: false, error: true };


        default:
            return store;
    }
};
