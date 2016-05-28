import {EDIT_TODO} from '../constants/Todos'

// Задаем начальное состояние для input поля
const initialState = {
    todos: []
}


export default function inputField(state = initialState, action) {
    switch (action.type) {
        case EDIT_TODO:
            return { ...state, text: action.payload}
        default:
            return state;
    }
}