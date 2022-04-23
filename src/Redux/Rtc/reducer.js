import { CLUBID, USER } from "./actions";

const initial = {
    user:{},
    ClubId:""
}

export const RwtReducer = (store=initial,{type,payload}) =>{
    switch (type) {
        case USER: return {...store,user: payload}
        case CLUBID : return{...store,ClubId: payload}
        default: return{store} 
    }
}