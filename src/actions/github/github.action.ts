import { actionTypes } from "../../constants/github/github.constant";

export const getData = (payload: any) => ({
    type: actionTypes.DATA_REQUESTED,
    searchCriteria: payload
})