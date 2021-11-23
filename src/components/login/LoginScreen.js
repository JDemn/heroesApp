import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
    
    const navigate = useNavigate();

    const hanleLogin =()=>{
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
