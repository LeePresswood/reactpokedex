import pokemonList from "../data/pokemonMapped.json"

export const FILTER_EVEN = 'filter/FILTER_EVEN';
// export const INCREMENT = 'counter/INCREMENT';
// export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
// export const DECREMENT = 'counter/DECREMENT';

const initialState = {
    selectedPokemon: null,
    pokemonListUnfiltered: pokemonList,
    pokemonListFiltered: pokemonList
};

export default (state = initialState, action) =>{
    switch(action.type){
        case FILTER_EVEN:
            return {
                ...state,
                pokemonListFiltered : state.pokemonListUnfiltered.filter((pokemon) => pokemon.number % 2 === 0)
            };
        
        // case INCREMENT:
        //     return {
        //         ...state,
        //         count : state.count + 1,
        //         isIncrementing : !state.isIncrementing
        //     };
        //
        // case DECREMENT_REQUESTED:
        //     return {
        //         ...state,
        //         isDecrementing : true
        //     };
        //
        // case DECREMENT:
        //     return {
        //         ...state,
        //         count : state.count - 1,
        //         isDecrementing : !state.isDecrementing
        //     };
        
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

// export const incrementAsync = () =>{
//     return dispatch =>{
//         dispatch({
//             type : INCREMENT_REQUESTED
//         });
//
//         return setTimeout(() =>{
//             dispatch({
//                 type : INCREMENT
//             })
//         }, 3000)
//     }
// };
//
// export const decrement = () =>{
//     return dispatch =>{
//         dispatch({
//             type : DECREMENT_REQUESTED
//         });
//
//         dispatch({
//             type : DECREMENT
//         })
//     }
// };
//
// export const decrementAsync = () =>{
//     return dispatch =>{
//         dispatch({
//             type : DECREMENT_REQUESTED
//         });
//
//         return setTimeout(() =>{
//             dispatch({
//                 type : DECREMENT
//             })
//         }, 3000)
//     }
// };