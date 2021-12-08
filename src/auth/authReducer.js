import { types } from "../types/types";

const state = {
    name : 'Fernando',
    logged : true
}

//ejemplo de posible accion
/*const loginAction = {
    type : types.login,
    payload : {
        name :'Deniz Mancilla José',
        email : 'jdeniz1@ucol.mx'
    }
} */

export const authReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged : true,
            }
        case types.logout :
            return {
                logged : false,
            }
        default:
            return state;
    }
}
