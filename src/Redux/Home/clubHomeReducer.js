import { GET_CLUB, CLUB_ERROR, CLUB_LIST, CLUB_LODING, UPDATE_CLUB } from "./clubHomeAction"

const initialState = {
    list: [],
    clubList: [],
    loding: false,
    error: false,
    updateList: [],
    totalpages: 0
}

export const clubHomeReducer = (store = initialState, { type, payload }) => {

    switch (type) {
        case CLUB_LIST: return { ...store, list: payload, loding: false, error: false }

        case CLUB_LODING: return { ...store, loding: true }

        case CLUB_ERROR: return { ...store, loading: false, error: true }

        case GET_CLUB: return { ...store, loading: false, error: false, clubList: payload }

        case UPDATE_CLUB: return { ...store, loading: false, error: false, updateList: payload }

        default: return store;
    }
}