import {DELETE_TODO, CHANGE_STATE_OF_TODO,
    ADD_TODO, CHANGE_INPUT_VALUE} from '../constants/Todos'

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

export function changeInputValue(e){
    const value = e.target.value
    return {
        type: CHANGE_INPUT_VALUE,
        payload: value
    }
}