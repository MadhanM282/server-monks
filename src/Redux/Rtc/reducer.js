import { CLUBID, USER } from "./actions";

const initial = {
    user:{},
    Club:{}
}

export const RwtReducer = (store=initial,{type,payload}) =>{
    switch (type) {
        case USER: return {...store,user: payload}
        case CLUBID : return{...store,Club: payload}
        default: return{store} 
    }
}