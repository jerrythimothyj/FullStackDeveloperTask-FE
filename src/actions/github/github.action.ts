import { actionTypes } from "../../constants/github/github.constant";

export const stageSearchCriteria = (stagedSearchCriteria: any) => ({
    type: actionTypes.STAGE_SEARCH_CRITERIA,
    stagedSearchCriteria
})

export const fetchData = () => ({
    type: actionTypes.DATA_REQUESTED
})

export const getPersisterData = () => ({
    type: actionTypes.GET_PERSISTED_DATA,
})