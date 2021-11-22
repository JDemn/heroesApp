import React from 'react'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

//our components
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Se ocuparan todas estas rutas si siempre ocuparamos el nav en todas las pantallas, pero no lo ocupamos en el login. Entonces este router lo dejamos solo para el login y creamos otro para las demás vistas */}
                {/* <Route path="/" element={ <MarvelScreen /> } />
                <Route path="/marvel" element={ <MarvelScreen /> } />
                <Route path="/dc" element={ <DcScreen /> } />
                <Route path="/search" element={ <SearchScreen /> } /> */}

                <Route path="/login" element={ <LoginScreen /> } />

                <Route path = "/*" element = {<DashboardRoutes />}/>
            </Routes>
        </BrowserRouter>
    )
}
