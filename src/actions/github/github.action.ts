import { actionTypes } from "../../constants/github/github.constant";

export const stageSearchCriteria = (stagedSearchCriteria: any) => ({
    type: actionTypes.STAGE_SEARCH_CRITERIA,
    stagedSearchCriteria
})

export const getData = (payload: any) => ({
    type: actionTypes.DATA_REQUESTED,
    searchCriteria: payload
})