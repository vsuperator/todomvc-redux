import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NewToDo from '../components/NewToDo'
import ToDoItem from '../components/ToDoItem'
import Filters from '../components/Filters'
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
            <section className="todoapp">
                <header>
                    <NewToDo inputValue={this.props.inputText} clearValue={clearValue}
                                changeInputValue={changeInputValue} addTodo={addTodo}/>
                </header>
                <section className="main">
                    <ul>
                        {todos}
                    </ul>
                </section>
                <footer className="footer">
                    <Filters />
                </footer>
            </section>
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
