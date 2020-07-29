import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, stageSearchCriteria, getPersisterData } from '../../actions/github/github.action'
import _ from "lodash";
import { Repositories } from "../../components/repositories/repositories.component"
import { Users } from "../../components/users/users.component";
import { Issues } from "../../components/issues/issues.component";

export const Github = () => {
    const stagedSearchCriteria = useSelector((state: any) => state.githubReducer.stagedSearchCriteria)
    const searchCriteria = useSelector((state: any) => state.githubReducer.searchCriteria)
    const data = useSelector((state: any) => state.githubReducer.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPersisterData());
        dispatch(fetchData())
    }, []);

    const handleChange = useCallback((event: any, field) => {
        dispatch(stageSearchCriteria(field, event.target.value))
        search()
    }, [])

    const search = _.debounce(() => {
        dispatch(fetchData())
    }, 500)

    console.log('=data=', data)

    return (
        <div>
            <select onChange={(event) => handleChange(event, 'type')} value={stagedSearchCriteria.type}>
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
                <option value="issues">Issues</option>
            </select>
            <input type="search" onChange={(event) => handleChange(event, 'text')} value={stagedSearchCriteria.text} />
            {searchCriteria.type === 'repositories' && <Repositories data={data} />}
            {searchCriteria.type === 'users' && <Users data={data} />}
            {searchCriteria.type === 'issues' && <Issues data={data} />}
        </div>
    );
}