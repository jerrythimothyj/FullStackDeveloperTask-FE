import { githubReducer } from './reducers/github/github.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    githubReducer
})