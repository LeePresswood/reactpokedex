import React, {Component} from "react";
import "./Content.css";
import Pokesquare from "./pokesquare/Pokesquare";

class Content extends Component {
    render(){
        return (
            <div className="Content">
                <Pokesquare pokeId="1"/>
                <Pokesquare pokeId="2"/>
                <Pokesquare pokeId="3"/>
                <Pokesquare pokeId="4"/>
                {/*<p>*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
            </div>
        );
    }
}

export default Content;
