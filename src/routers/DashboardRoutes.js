//Todas las rutas en el que el NavBar debe de estar activo
import { Routes, Route } from "react-router-dom";

import { DcScreen } from '../components/dc/DcScreen';
import { Heroe } from "../components/heroe/Heroe";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from "../components/ui/NavBar"

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className = "container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<Heroe />} />

                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}
