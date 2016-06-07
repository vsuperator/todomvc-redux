import {ADD_TODO, CHANGE_INPUT_VALUE} from '../constants/Todos'

// Задаем начальное состояние для input поля
const initialState = {
    value: ''
}


export default function inputField(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, value: action.payload}
        case CHANGE_INPUT_VALUE:
            return { ...state, value: action.payload}
        default:
            return state;
    }
}