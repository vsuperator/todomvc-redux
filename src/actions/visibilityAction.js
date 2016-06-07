import {CHANGE_VISIBILITY} from '../constants/Visibility'

export function changeVisibilityState(filter) {
    return {
        type: CHANGE_VISIBILITY,
        payload: filter
    }
}