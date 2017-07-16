import React, {Component} from "react";
import "../styles/App.css";
import ContentSection from "./ContentSection";
import Footer from "./Footer";
import DisplaySection from "./DisplaySection";

class App extends Component {
    render(){
        return (
            <div className="Application">
                <ContentSection/>
                <DisplaySection/>
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default App;
