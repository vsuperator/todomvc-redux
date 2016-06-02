import React, {Component} from 'react'

export default class ToDoItem extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isVisibleDeleteBtn: false
        }
    }
    onHover(e){
        this.setState({
            isVisibleDeleteBtn: e.type === 'mouseover'
        })
    }
    onChange(e){
        const todoId = this.props.todo.id;
        this.props.changeStateOfTodo(todoId)
    }
    deleteToDo(){
        const todoId = this.props.todo.id;
        this.props.deleteToDo(todoId)
    }
    render(){
        const todo = this.props.todo
        return (
            <li onMouseOver={::this.onHover}
                onMouseOut={::this.onHover}
                className="todo-item">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={::this.onChange}
                />
                <span className={todo.completed ? 'todo-text completed' : 'todo-text'}>
                    {todo.text}
                </span>
                <span className={this.state.isVisibleDeleteBtn ? 'delete-todo' : 'hidden'}
                      onClick={::this.deleteToDo}
                >X</span>
            </li>
        )
    }
}