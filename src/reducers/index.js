import {combineReducers} from 'redux'
import inputField from './inputField'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    inputField,
    visibilityFilter,
    todos
})