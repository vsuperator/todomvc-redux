import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InputField from '../components/InputField'
import ToDoItem from '../components/ToDoItem'
import * as InputActions from '../actions/InputActions'
import * as ToDoActions from '../actions/ToDoActions'

export default class App extends Component {
    render() {
        const {changeInputValue, clearValue} = this.props.inputActions
        const {addTodo, changeStateOfTodo, deleteToDo} = this.props.toDoActions
        const todos = this.props.listOfTodos &&
            this.props.listOfTodos.map((todo) =>
                <ToDoItem key={`uniq-key=${todo.id}`} 
                          todo={todo}
                          deleteToDo={deleteToDo}
                          changeStateOfTodo={changeStateOfTodo}/>
            )

        return (
            <div className="main-container">
                <InputField inputValue={this.props.inputText} clearValue={clearValue}
                            changeInputValue={changeInputValue} addTodo={addTodo}/>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        inputText: state.inputField,
        listOfTodos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputActions: bindActionCreators(InputActions, dispatch),
        toDoActions: bindActionCreators(ToDoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
