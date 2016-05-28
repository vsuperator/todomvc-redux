import {ADD_TODO} from '../constants/InputField'

// Задаем начальное состояние для input поля
const initialState = {
    text: ''
}


export default function inputField(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, text: action.payload}
        default:
            return state;
    }
}