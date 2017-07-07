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
