import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import filter from './filter'

export default combineReducers({
    routing: routerReducer,
    counter,
    filter
})