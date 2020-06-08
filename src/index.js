import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const heading = <h1 className="site-heading">Hello, React</h1>
class App extends Component {
  
  render() {
    return (
      heading
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))