import React, { Component } from 'react'

class CounterOutput extends Component {
    render() {
        return (
            <div className="shadow-lg p-3 mb-5 bg-white rounded text-center mt-3">
                <h5>Current Counter</h5> 
                <h3>{this.props.value}</h3>
            </div>
        )
    }
}


export default CounterOutput;