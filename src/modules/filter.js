import pokemonList from "../data/pokemonMapped.json"

export const FILTER_EVEN = 'filter/FILTER_EVEN';
export const FILTER_ODD = 'filter/FILTER_ODD';

const initialState = {
    selectedPokemon: null,
    pokemonListUnfiltered: pokemonList,
    pokemonListFiltered: pokemonList,
    currentFilters: []
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
