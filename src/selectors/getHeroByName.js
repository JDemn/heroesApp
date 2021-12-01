import { heroes } from "../data/heroes";


export const getHeroByName = (name = '') => {
    console.log('get hero by name is called')
    if (name === ''){
        return [];
    }
    name = name.toLowerCase();
    
    return heroes.filter(hero => hero.superhero.toLowerCase().includes( name ));
    
}
