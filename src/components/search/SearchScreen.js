import React from 'react'
import { useForm } from '../../hooks/useForm'

export const SearchScreen = () => {
    const [formState, haleInputChange] = useForm({
        searchText : '',
    });
    //desestructurando objeto
    const { searchText } = formState;

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
                  <h4>Buscar</h4>
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
          </div>
        </>
    )
}
