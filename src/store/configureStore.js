import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
// import createLogger from 'redux-logger'

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState
    )
    return store
}