import {SET_YEAR} from '../constants/Page.js'

export function setYear(year) {

    return {
        type: SET_YEAR,
        payload: year
    }

}