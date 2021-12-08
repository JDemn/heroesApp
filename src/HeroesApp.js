import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
    // return {
    //     logged: true,
    //     name: 'Deniz temporal',
    // }
    return JSON.parse( localStorage.getItem('user') ) || { logged : false }
}
export const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init)
    console.log(user);

    //grabar info en local storage para que no se pierdan el loggeo al refrescar la página
    useEffect(() => {
        if(!user) return;
        localStorage.setItem('user',JSON.stringify( user ));
    }, [ user ])
    
    return (
        <AuthContext.Provider value={
            {
                user,
                dispatch
            }
        }>
            <AppRouter />
        </AuthContext.Provider>
    )
}
