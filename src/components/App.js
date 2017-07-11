import React, {Component} from "react";
import "../styles/App.css";
import ContentSection from "./ContentSection";
import Footer from "./Footer";

class App extends Component {
    render(){
        return (
            <div>
                <ContentSection/>
                <Footer/>
            </div>
        );
    }
}

export default App;
