import pokemonList from "../data/pokemonMapped.json"

export const FILTER_EVEN = 'filter/FILTER_EVEN';
export const FILTER_ODD = 'filter/FILTER_ODD';
export const FILTER_REMOVE = 'filter/FILTER_REMOVE';

const initialState = {
    pokemonListUnfiltered : pokemonList,
    pokemonListFiltered : pokemonList
};

export default (state = initialState, action) =>{
    switch(action.type){
        case FILTER_EVEN:
            return {
                ...state,
                pokemonListFiltered : state.pokemonListUnfiltered.filter((pokemon) => pokemon.number % 2 === 0)
            };
        case FILTER_ODD:
            return {
                ...state,
                pokemonListFiltered : state.pokemonListUnfiltered.filter((pokemon) => pokemon.number % 2 === 1)
            };
        case FILTER_REMOVE:
            return {
                ...state,
                pokemonListFiltered : state.pokemonListUnfiltered
            };
        default:
            return state
    }
}

export const filterEven = () =>{
    return dispatch =>{
        dispatch({
            type : FILTER_EVEN
        });
    }
};

export const filterOdd = () =>{
    return dispatch =>{
        dispatch({
            type : FILTER_ODD
        });
    }
};

export const filterRemove = () =>{
    return dispatch =>{
        dispatch({
            type : FILTER_REMOVE
        });
    }
};
