import { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../auth/authContext'


export const PublicRoute = ( { children } ) => {
    console.log(children)
    const { user } = useContext( AuthContext );

    return user.logged 
        ? <Navigate to = "/marvel"/>
        : children
}
