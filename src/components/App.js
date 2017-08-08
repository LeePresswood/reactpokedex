import React, {Component} from "react";
import "../styles/App.css";
import PokemonSelector from "./PokemonSelector";
import Footer from "./Footer";
import PokemonDisplay from "./PokemonDisplay";

class App extends Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <PokemonSelector/>
                    <PokemonDisplay/>
                </div>
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default App;
