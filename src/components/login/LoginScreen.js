import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
    
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const hanleLogin =()=>{
        const action ={
            type : types.login,
            payload : {
                name : 'Deniz'
            }
        }
        dispatch(action)
        //leer la última ruta navegada que se encuentra en local storage //leer la última búsqueda realizada
        const lastPath = localStorage.getItem('lastPath') || '/dc';

        navigate(lastPath, {
            replace : true
        });    
    };

    return (
        <div className = " container mt-5">
            <h2>LoginScreen</h2>
            <hr></hr>

            <button 
                className = "btn btn-primary"
                onClick = { hanleLogin }
            >
                Login
            </button>

        </div>
    )
}
