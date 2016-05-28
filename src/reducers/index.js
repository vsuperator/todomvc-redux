import {combineReducers} from 'redux'
import inputField from './inputField'
import todos from './todos'

export default combineReducers({
    inputField,
    todos
})