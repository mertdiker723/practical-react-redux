import React, { Component } from 'react'

class CounterControl extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.clicked} className="btn btn-primary btn-lg btn-block">{this.props.control}</button>
            </div>
        )
    }
}


export default CounterControl;