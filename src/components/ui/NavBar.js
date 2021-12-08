import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext)
    console.log( user );

    const navigate = useNavigate();
    const handleLogout =()=> {
        const action = {
            type : types.logout
        }

        dispatch( action );

        console.log('handle logout');
        navigate('/login', {
            replace : true
        });
    }
    // className={ (isActive) => {
    //     console.log(isActive);         know the value on className, it have a prop is active that is a object
    //     return "nav-item nav-link"
    //     }
    // }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mobile__hidden">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '') }                        
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink  
                        className={ ({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '') }                        
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink  
                        className={ ({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '') }                        
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className = "nav-item nav-link text-info">
                        { user.name }
                    </span>
                    <button 
                        className="nav-item nav-link btn"
                        onClick = { handleLogout } 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}