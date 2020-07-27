import { githubReducer } from "./reducers/github/github.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ githubReducer })

export default rootReducer