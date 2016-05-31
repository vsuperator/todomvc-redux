import {CHANGE_STATE_OF_TODO, ADD_TODO} from '../constants/Todos'

// Задаем начальное состояние для input поля
const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
]

export default function todo(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.payload
                },
                ...state
            ]
        // Нужно вернуть новое состояние в котором мы меняем нужные нам
        case CHANGE_STATE_OF_TODO:
            return [action.payload, ...state]
        default:
            return state;
    }
}