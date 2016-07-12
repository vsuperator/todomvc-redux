import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NewToDo from '../components/NewToDo'
import ToDoItem from '../components/ToDoItem'
import Filters from '../components/Filters'
import * as ToDoActions from '../actions/ToDoActions'
import * as visibilityAction from '../actions/visibilityAction'

export default class App extends Component {
    getVisibleTodos(todos, filter){
        var result = todos;
        if(filter === 'completed'){
            result = todos.filter(todo => todo.completed)
        }
        if(filter === 'active'){
            result = todos.filter(todo => !todo.completed)
        }
        return result;
    }
    render() {
        const {addTodo, changeStateOfTodo, deleteToDo, changeInputValue, clearCompleted} = this.props.toDoActions
        const {changeVisibilityState} = this.props.visibilityAction
        const {visibilityFilter} = this.props.visibilityFilter
        const hasCompleted = this.props.listOfTodos.some(item => item.completed);
        const remainingItems = this.props.listOfTodos.reduce((prevItem, nextItem) => {
            return nextItem.completed ? prevItem : prevItem + 1
        },0)
        const visibleTodos = this.getVisibleTodos(this.props.listOfTodos, visibilityFilter)
        const todos = visibleTodos.map((todo) =>
                <ToDoItem key={`uniq-key=${todo.id}`}
                          todo={todo}
                          deleteToDo={deleteToDo}
                          changeStateOfTodo={changeStateOfTodo}/>
            )

        return (
            <section className="todoapp">
                <header>
                    <NewToDo inputValue={this.props.inputText}
                                changeInputValue={changeInputValue} addTodo={addTodo}/>
                </header>
                <section className="main">
                    <ul>
                        {todos}
                    </ul>
                </section>
                <footer className="footer">
                    <Filters setFilter={changeVisibilityState}
                        clearCompleted={clearCompleted}
                        remainingItems={remainingItems}
                        hasCompleted={hasCompleted}
                        activeFilter={visibilityFilter}/>
                </footer>
            </section>
        );
    }
}



function mapStateToProps(state) {
    return {
        inputText: state.inputField,
        visibilityFilter: state,
        listOfTodos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        visibilityAction: bindActionCreators(visibilityAction, dispatch),
        toDoActions: bindActionCreators(ToDoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
