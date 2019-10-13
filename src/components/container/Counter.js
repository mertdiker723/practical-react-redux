import React, { Component } from 'react'
import CounterControl from '../CounterControl'
import CounterOutput from '../CounterOutput';
import { connect } from 'react-redux';
import * as actionTypes from "../store/action.js";

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <div className="row mt-3">
                    <div className="col-3">
                        <CounterControl control={"Increment"} clicked={this.props.onIncrementCounter} />
                    </div>
                    <div className="col-3">
                        <CounterControl control={"Decrement"} clicked={this.props.onDecrementCounter} />
                    </div>
                    <div className="col-3">
                        <CounterControl control={"Add - 10"} clicked={this.props.onAddCounter} />
                    </div>
                    <div className="col-3">
                        <CounterControl control={"Subtract - 15"} clicked={this.props.onSubtractCounter} />
                    </div>
                    <br />
                    <hr />
                </div>
                <div className="row">
                    <div className="col-12 text-center mt-3">
                        <button onClick={() => this.props.onStoreResult(this.props.ctr)} className="btn btn-warning btn-lg btn-block">
                            Store Result
                        </button>
                    </div>
                </div>
                <ul className="list-group mt-3">
                    {this.props.storedResult.map((strResult) => {
                        return (
                            <li style={{cursor:"pointer",textAlign:"center"}} className="list-group-item list-group-item-primary mt-2" key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}><b>{strResult.value}</b></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: actionTypes.INCREMENT
        }),
        onDecrementCounter: () => dispatch({
            type: actionTypes.DECREMENT
        }),
        onAddCounter: () => dispatch({
            type: actionTypes.ADD,
            val: 10
        }),
        onSubtractCounter: () => dispatch({
            type: actionTypes.SUBTRACT,
            val: 15
        }),
        onStoreResult: (result) => dispatch({
            type: actionTypes.STORE_RESULT,
            result: result
        }),
        onDeleteResult: (id) => dispatch({
            type: actionTypes.DELETE_RESULT,
            deleteId: id
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);