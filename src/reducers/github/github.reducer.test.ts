import { githubReducer } from './github.reducer';
import { actionTypes } from "../../constants/github/github.constant"
import { initialState, stagedSearchCriteria, data } from "../../mocks/states.mock"

describe('Github reducer', () => {
    it('should return the initial state', () => {
        expect(githubReducer(undefined, {})).toEqual(initialState);
    })

    it('should return the state after DATA_REQUESTED', () => {
        expect(githubReducer(initialState, { type: actionTypes.DATA_REQUESTED })).toEqual(initialState);
    })

    it('should return the state after DATA_PROCESSING', () => {
        expect(githubReducer(initialState, { type: actionTypes.DATA_PROCESSING, stagedSearchCriteria }))
            .toEqual({ ...initialState, stagedSearchCriteria });
    })

    it('should return the state after DATA_LOADED', () => {
        expect(githubReducer({ ...initialState, stagedSearchCriteria }, { type: actionTypes.DATA_LOADED, data, stagedSearchCriteria }))
            .toEqual({ ...initialState, data, searchCriteria: stagedSearchCriteria, stagedSearchCriteria });
    })

    it('should return the state after STAGE_SEARCH_CRITERIA', () => {
        expect(githubReducer(initialState, { type: actionTypes.STAGE_SEARCH_CRITERIA, stagedSearchCriteria, field: 'text', value: 'jerrythimothy' })).toEqual({ ...initialState, stagedSearchCriteria });
    })

    // it('should return the state after GET_PERSISTED_DATA', () => {
    //     expect(githubReducer(initialState, actionTypes.GET_PERSISTED_DATA)).toEqual(initialState);
    // })
})