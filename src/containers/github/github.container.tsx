import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, stageSearchCriteria, getPersisterData, fetchUserDetails } from '../../actions/github/github.action'
import _ from "lodash";
import { Users } from "../../components/users/users.component";

export const Github = () => {
    const stagedSearchCriteria = useSelector((state: any) => state.githubReducer.stagedSearchCriteria)
    const usersData = useSelector((state: any) => state.githubReducer.data)
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

    const handleViewMoreUserDetailsClick = useCallback((url: string) => {
        dispatch(fetchUserDetails(url))
    }, [])

    console.log('usersData=', usersData);
    return (
        <div>
            <select onChange={(event) => handleChange(event, 'type')} value={stagedSearchCriteria.type}>
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
                <option value="issues">Issues</option>
            </select>
            <input type="search" onChange={(event) => handleChange(event, 'text')} value={stagedSearchCriteria.text} />
            <Users users={usersData} onViewMoreDetailsClick={handleViewMoreUserDetailsClick} />
            {/* {_.map(usersData && usersData.items, (item, index) => {
                return <div key={index}>{item.login}</div>
            })} */}
        </div>
    );
}