import React, {Component} from 'react'

export default class Todos extends Component {
    onChange(e){
        const value = e.target.value === 'on'
        const todo = this.props.todo
        this.props.changeStateOfTodo({...todo, completed: value})
    }
    render(){
        const todo = this.props.todo
        return (
            <li>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={::this.onChange}
                />
                {todo.text}
            </li>
        )
    }
}