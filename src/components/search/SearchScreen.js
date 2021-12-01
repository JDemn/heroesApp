import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../heroe/HeroCard';

export const SearchScreen = () => {
    //====1contruir los query paramameters desde el componente de b[usqueda]
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    console.log(q)
    // console.log(location.search)

    const [formState, haleInputChange] = useForm({
        searchText: q, //le pasamos el query de busqueda para que se mantenga la busqueda y no se limpie
    });
    //desestructurando objeto
    const { searchText } = formState;

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        // console.log(searchText)
        navigate(`?q=${searchText}`); //mandar el término de búsqueda como query params
    }


    return (
        <>
            <div className="row search__row mt-4">

                <div className="col-5 search__field">
                    <h4>Search something</h4>
                    <hr></hr>

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={haleInputChange}
                        />
                        <button
                            type="submit"
                            placeholder="btn btn-primary mt-3"
                            className = "btn btn-outline-primary mt-4"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7 result__field">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q === '')
                            ? <div className="alert alert-info"> Hi, search a hero !!</div>
                            : (heroesFiltered.length === 0)
                            && <div className="alert alert-danger"> Not results for : {q}</div>

                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
