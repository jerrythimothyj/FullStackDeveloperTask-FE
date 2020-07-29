import { REHYDRATE } from 'redux-persist/lib/constants';
import {
    actionTypes,
} from "../../constants/github/github.constant";
import _ from 'lodash';

const initialState = {
    persistedState: {
        stagedSearchCriteria: { text: "jer", type: "users", page: 1, per_page: 9 },
        searchCriteria: { text: "", type: "users", page: 1, per_page: 9 }
    },
    data: {},
    searchCriteria: { text: "", type: "users", page: 1, per_page: 9 },
    stagedSearchCriteria: { text: "jer", type: "users", page: 1, per_page: 9 }
};

export const githubReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.DATA_REQUESTED:
            return { ...state }
        case actionTypes.DATA_PROCESSING:
            return { ...state, stagedSearchCriteria: action.stagedSearchCriteria }
        case actionTypes.DATA_LOADED:
            return { ...state, data: action.data, searchCriteria: action.stagedSearchCriteria }
        case actionTypes.STAGE_SEARCH_CRITERIA:
            return { ...state, stagedSearchCriteria: { ...state.stagedSearchCriteria, [action.field]: action.value } }
        case actionTypes.GET_PERSISTED_DATA:
            return { ...state, ...state.persistedState }
        case REHYDRATE:
            return {
                ...state, persistedState: action.payload && _.pick(action.payload.githubReducer,
                    ['data', 'searchCriteria', 'stagedSearchCriteria']
                )
            };
        default:
            return state
    }
}

