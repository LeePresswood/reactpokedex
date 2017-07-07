import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Reducers from "./reducers/Reducers";

const initialState = {
    selectedFilters : []
};

const store = createStore(Reducers, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

//
// const reducer = (state = {
//     result : 1,
//     lastValues : []
// }, action) =>{
//     switch(action.type){
//         case "ADD":
//             state = {
//                 ...state,
//                 result : state.result + action.payload,
//                 lastValues : [...state.lastValues, action.payload]
//             };
//             break;
//         case "SUBTRACT":
//             state = {
//                 ...state,
//                 result : state.result - action.payload,
//                 lastValues : [...state.lastValues, action.payload]
//             };
//             break;
//     }
//
//     return state;
// };
//
// const store = createStore(reducer);
//
// store.subscribe(() =>{
//     console.log("Store updated!", store.getState())
// });
//
// store.dispatch({
//     type : "ADD",
//     payload : 100
// });
//
// store.dispatch({
//     type : "ADD",
//     payload : 22
// });
//
// store.dispatch({
//     type : "SUBTRACT",
//     payload : 80
// });