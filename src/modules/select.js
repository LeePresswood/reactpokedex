export const SELECT_POKEMON = 'select/SELECT_POKEMON';

const initialState = {
    selectedPokemon : null
};

export default (state = initialState, action) =>{
    switch(action.type){
        case SELECT_POKEMON:
            return {
                ...state,
                selectedPokemon : (action.pokemonIndex !== state.selectedPokemon ? action.pokemonIndex : null)
            };
        default:
            return state;
    }
}

export const selectPokemon = (pokemonIndex) =>{
    return dispatch =>{
        dispatch({
            type : SELECT_POKEMON,
            pokemonIndex : pokemonIndex
        });
    }
};