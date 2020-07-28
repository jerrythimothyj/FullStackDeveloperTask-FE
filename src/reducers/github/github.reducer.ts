import {
    actionTypes,
} from "../../constants/github/github.constant";

const initialState = {
    data: {},
    searchCriteria: { text: "", type: "users", page: 1, per_page: 100 },
    stagedSearchCriteria: { text: "", type: "users", page: 1, per_page: 100 }
};

export const githubReducer = (state = initialState, action: any) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.DATA_REQUESTED:
            return { ...state, searchCriteria: action.searchCriteria }
        case actionTypes.DATA_LOADED:
            return { ...state, data: action.payload }
        case actionTypes.STAGE_SEARCH_CRITERIA:
            return { ...state, stagedSearchCriteria: action.stagedSearchCriteria }
        default:
            return state
    }
}

