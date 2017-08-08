import React, {Component} from "react";
import "../styles/Pokemon.css";

class Pokemon extends Component {
    getBackgroundPosition(){
        return "-360px -120px";
    }
    
    getStyle(){
        return {
            // backgroundSize: '40px 40px',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: this.getBackgroundPosition()
        };
    }
    
    render(){
        return (
            <div className="Pokemon col-sm-4" style={this.getStyle()}>
                <div>{this.props.number}</div>
                <div>{this.props.name}</div>
                <div>Picture</div>
            </div>
        );
    }
}

export default Pokemon;
