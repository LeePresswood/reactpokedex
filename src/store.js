import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

import pokemonList from "./data/pokemonMapped.json"

export const history = createHistory();

const initialState = {
    selectedPokemon: null,
    pokemonListUnfiltered: pokemonList,
    pokemonListFiltered: pokemonList
};

const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];

if(process.env.NODE_ENV === 'development'){
    const devToolsExtension = window.devToolsExtension;
    
    if(typeof devToolsExtension === 'function'){
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export default store