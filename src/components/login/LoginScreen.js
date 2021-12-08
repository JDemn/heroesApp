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

        navigate('/dc', {
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
