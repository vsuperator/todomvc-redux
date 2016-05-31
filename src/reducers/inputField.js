import {ADD_TODO, CHANGE_INPUT_VALUE, CLEAR_VALUE} from '../constants/InputField'

// Задаем начальное состояние для input поля
const initialState = {
    value: 'test'
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