import { stageSearchCriteria, fetchData, getPersisterData } from './github.action'
import { actionTypes } from '../../constants/github/github.constant'

describe('Github actions', () => {
    it('should create an action for STAGE_SEARCH_CRITERIA', () => {
        expect(stageSearchCriteria('text', 'jerrythimothy')).toEqual({
            type: actionTypes.STAGE_SEARCH_CRITERIA,
            field: 'text',
            value: 'jerrythimothy'
        })
    })

    it('should create an action for DATA_REQUESTED', () => {
        expect(fetchData()).toEqual({
            type: actionTypes.DATA_REQUESTED
        })
    })

    it('should create an action for GET_PERSISTED_DATA', () => {
        expect(getPersisterData()).toEqual({
            type: actionTypes.GET_PERSISTED_DATA
        })
    })
})