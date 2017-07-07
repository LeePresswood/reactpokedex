import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// import {createStore} from "redux";
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