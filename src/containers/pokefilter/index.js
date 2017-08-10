import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {filterEven, filterOdd, filterRemove} from '../../modules/filter'
import "./index.css";

const PokeFilter = props => (
    <div className="PokeFilter row">
        <button onClick={props.filterEven}>Filter Even</button>
        <button onClick={props.filterOdd}>Filter Odd</button>
        <button onClick={props.filterRemove}>Remove Filters</button>
    </div>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    filterEven : filterEven,
    filterOdd : filterOdd,
    filterRemove : filterRemove
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokeFilter)