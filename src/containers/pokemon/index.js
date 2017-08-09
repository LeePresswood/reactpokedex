import React from 'react'
import "./index.css";

export default (props) => (
    <div className="Pokemon col-sm-4">
        <div>{props.number}</div>
        <div>{props.name}</div>
        <div>Picture</div>
    </div>
)