import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import filter from './filter'
import select from './select'

export default combineReducers({
    routing: routerReducer,
    counter,
    filter,
    select
})