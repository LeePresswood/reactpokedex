import React, {Component} from "react";
import "./App.css";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

class App extends Component {
    render(){
        return (
            <div className="App">
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default App;


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