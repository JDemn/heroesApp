import React from 'react'
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../heroe/HeroCard';

export const SearchScreen = () => {
    const [formState, haleInputChange] = useForm({
        searchText : '',
    });
    //desestructurando objeto
    const { searchText } = formState;

    const heroesFiltered = getHeroByName('Algo por aquí');

    const handleSearch=(e)=>{
        e.preventDefault();
        console.log(searchText)
    }

    return (
        <>
          <h1>Búsquedas</h1>  
          <hr/>

          <div className = "row">

              <div className = "col-5">
                  <h4>Search</h4>
                  <hr></hr>

                  <form onSubmit = { handleSearch }>
                      <input 
                        type = "text"
                        placeholder = "Search hero"
                        className = "form-control"
                        name = "searchText"
                        value = { searchText }
                        onChange = { haleInputChange }
                      />
                      <button 
                        type = "submit"
                        placeholder = "btn btn-primary mt-3"                  
                      >                            
                          Search
                      </button>
                  </form>
              </div>
              <div className = "col-7">
                  <h4>Resultados</h4>
                  <hr />
                  {
                      heroesFiltered.map(hero => (
                          <HeroCard 
                            key = { hero.id }
                            { ...hero }
                          />
                      ))
                  }

              </div>
          </div>
        </>
    )
}
