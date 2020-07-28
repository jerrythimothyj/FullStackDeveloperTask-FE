import React, { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getData, stageSearchCriteria } from '../../actions/github/github.action'
import _ from "lodash";

export const Github = () => {

    const stagedSearchCriteria = useSelector((state: any) => state.githubReducer.stagedSearchCriteria)
    const searchCriteria = useSelector((state: any) => state.githubReducer.searchCriteria)
    const usersData = useSelector((state: any) => state.githubReducer.data)
    const dispatch = useDispatch()

    const handleChange = useCallback((event: any, field) => {
        dispatch(stageSearchCriteria({ ...stagedSearchCriteria, [field]: event.target.value }))
        search(event.target.value, field)
    }, [])

    const search = _.debounce((eventTargetValue: any, field) => {
        dispatch(getData({ ...searchCriteria, [field]: eventTargetValue }))
    }, 500)


    return (
        <div>
            <select onChange={(event) => handleChange(event, 'type')} value={stagedSearchCriteria.type}>
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
                <option value="issues">Issues</option>
            </select>
            <input type="search" onChange={(event) => handleChange(event, 'text')} value={stagedSearchCriteria.text} />
            {_.map(usersData && usersData.items, (item, index) => {
                return <div key={index}>{item.login}</div>
            })}
        </div>
    );
}