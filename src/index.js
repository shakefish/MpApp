import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const heading = React.createElement('h1', { className: 'site-heading' }, 'Hello, React!')
class App extends Component {
  
  render() {
    return (
      heading
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))