import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../actions/github/github.action'
import _ from "lodash";

export const Github = () => {

    const searchCriteria = useSelector((state: any) => state.githubReducer.searchCriteria)
    const usersData = useSelector((state: any) => state.githubReducer.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData(searchCriteria))
    }, [])

    const handleEntityChange = useCallback((event: any) => {
        dispatch(getData({ ...searchCriteria, type: event.target.value }))
    }, [searchCriteria])

    return (
        <div>
            <select onChange={handleEntityChange}>
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
                <option value="issues">Issues</option>
            </select>
            {_.map(usersData && usersData.items, (item, index) => {
                return <div key={index}>{item.login}</div>
            })}
        </div>
    );
}