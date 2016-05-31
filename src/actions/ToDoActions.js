import {ADD_TODO, CHANGE_STATE_OF_TODO} from '../constants/InputField'

export function addTodo(todoText) {
    return {
        type: ADD_TODO,
        payload: todoText
    }
}

export function changeStateOfTodo(value) {
    console.log(value)
    return {
        type: CHANGE_STATE_OF_TODO,
        payload: value
    }
}