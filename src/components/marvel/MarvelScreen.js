import React from 'react'
import { HeroeList } from '../heroe/HeroeList'

export const MarvelScreen = () => {
    return (
        <div>
            <h3>MarvelScreen</h3>
            <hr/>
            <HeroeList publisher = 'Marvel Comics'/>
        </div>
    )
}
