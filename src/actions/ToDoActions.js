import {ADD_TODO, CHANGE_STATE_OF_TODO} from '../constants/InputField'
import {DELETE_TODO} from '../constants/Todos'

export function addTodo(todoText) {
    return {
        type: ADD_TODO,
        payload: todoText
    }
}

export function changeStateOfTodo(value) {
    return {
        type: CHANGE_STATE_OF_TODO,
        payload: value
    }
}

export function deleteToDo(value) {
    return {
        type: DELETE_TODO,
        payload: value
    }
}