import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InputField from '../components/InputField'
import Todos from '../components/Todos'
import * as InputActions from '../actions/InputActions'
import * as ToDoActions from '../actions/ToDoActions'

export default class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <InputField />
                <Todos />
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
        InputActions: bindActionCreators(InputActions, dispatch),
        ToDoActions: bindActionCreators(ToDoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
