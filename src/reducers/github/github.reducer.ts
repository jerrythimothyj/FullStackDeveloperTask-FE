import {
    actionTypes,
} from "../../constants/github/github.constant";

const initialState = {
    data: {},
    searchCriteria: {}
};

export const githubReducer = (state = initialState, action: any) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.DATA_REQUESTED:
            return { ...state, searchCriteria: action.searchCriteria }
        case actionTypes.DATA_LOADED:
            return { ...state, data: action.payload }
        default:
            return state
    }
}

