import React, {Component} from 'react'

export default class Todos extends Component {
    render(){
        return <li>{this.props.todo.text}</li>
    }
}