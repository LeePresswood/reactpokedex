import {ADD_FILTER, REMOVE_FILTER} from '../constants'

export const FilterReducer = (state = {selectedFilters: []}, action) =>{
    switch(action.type){
        case ADD_FILTER:
            state = {
                ...state,
                selectedFilters: [...state.selectedFilters, action.payload]
            };
            break;
        case REMOVE_FILTER:
            state = {
                ...state,
                selectedFilters: state.selectedFilters.filter(currentFilter => currentFilter !== action.payload)
            };
            break;
        default:
            return state;
    }
    
    return state;
};