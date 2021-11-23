import React from 'react'
import { HeroeList } from '../heroe/HeroeList'

export const DcScreen = () => {
    return (
        <div>
            <h1>Dc screen</h1>
            <hr/>
            <HeroeList publisher = 'DC Comics' />
        </div>
    )
}
