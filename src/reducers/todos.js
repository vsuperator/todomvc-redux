import {CHANGE_STATE_OF_TODO, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED} from '../constants/Todos'

const initialState = []

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
            ];
        case CHANGE_STATE_OF_TODO:
            return state.map(todo =>
                todo.id === action.payload ?
                    Object.assign({}, todo, {completed: !todo.completed }) :
                    todo
            )
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
}