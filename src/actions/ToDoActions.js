import {ADD_TODO} from '../constants/InputField'

export function addTodo(todoText) {
    console.log(todoText)
    return {
        type: ADD_TODO,
        payload: todoText
    }

}