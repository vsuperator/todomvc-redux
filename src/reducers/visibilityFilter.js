import {CHANGE_VISIBILITY} from '../constants/Visibility'

export default function visibilityFilter(state = 'all', action) {
    switch (action.type) {
        case CHANGE_VISIBILITY:
            return action.payload;
        default:
            return state;
    }
}