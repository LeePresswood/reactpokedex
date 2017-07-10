import React, {Component} from "react";
import "../styles/App.css";
import Content from "./Content";
import Footer from "./Footer";

class App extends Component {
    render(){
        return (
            <div>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;
