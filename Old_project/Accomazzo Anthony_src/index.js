import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

 
/*
---This is also correct:
class App extends Component{
    render(){
        ...;
    }
}
*/

ReactDOM.render(<App />, document.getElementById('root'))