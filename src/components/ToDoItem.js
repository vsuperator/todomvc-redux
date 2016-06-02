import React, {Component} from 'react'

export default class ToDoItem extends Component {
    onChange(e){
        const todoId = this.props.todo.id;
        this.props.changeStateOfTodo(todoId)
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