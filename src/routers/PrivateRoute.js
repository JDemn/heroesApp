import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';


export const PrivateRoute = ({ children }) => {

    const { user } = useContext( AuthContext );
    const { pathname,search } = useLocation();
    console.log(pathname,search);

    //guardar la última ruta que se navegó //guardar la última búsqueda que se realizó
    localStorage.setItem('lastPath', pathname + search );

    return user.logged 
        ? children 
        : <Navigate to = "/login"/>


}
