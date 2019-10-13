import React, { Component } from 'react'
import Counter from "./components/container/Counter.js";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Counter/>
      </div>
    )
  }
}
