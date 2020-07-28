import { actionTypes } from "../../constants/github/github.constant";

export const stageSearchCriteria = (field: string, value: string) => {
    return {
        type: actionTypes.STAGE_SEARCH_CRITERIA,
        field,
        value
    }
}

export const fetchData = () => ({
    type: actionTypes.DATA_REQUESTED
})

export const getPersisterData = () => ({
    type: actionTypes.GET_PERSISTED_DATA,
})

export const fetchUserDetails = (url) => ({
    type: actionTypes.USER_DATA_REQUESTED
})