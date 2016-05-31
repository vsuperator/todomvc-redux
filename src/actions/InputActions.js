import {CHANGE_INPUT_VALUE} from '../constants/InputField'

export function changeInputValue(e){
    const value = e.target.value
    return {
        type: CHANGE_INPUT_VALUE,
        payload: value
    }
}