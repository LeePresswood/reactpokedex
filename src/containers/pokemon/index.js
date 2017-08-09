import React from 'react'
import "./index.css";

export default () => (
    <div className="Pokemon col-sm-4">
        <div>{this.props.number}</div>
        <div>{this.props.name}</div>
        <div>Picture</div>
    </div>
)