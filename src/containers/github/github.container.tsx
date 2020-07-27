import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../actions/github/github.action'
import _ from "lodash";

export const Github = () => {

    const searchCriteria = useSelector((state: any) => state.githubReducer.searchCriteria)
    const usersData = useSelector((state: any) => state.githubReducer.data)
    const dispatch = useDispatch()

    const handleChange = useCallback((event: any, field) => {
        dispatch(getData({ ...searchCriteria, [field]: event.target.value }))
    }, [searchCriteria])

    return (
        <div>
            <select onChange={(event) => handleChange(event, 'type')} value={searchCriteria.type}>
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
                <option value="issues">Issues</option>
            </select>
            <input type="search" onChange={(event) => handleChange(event, 'text')} value={searchCriteria.text} />
            {_.map(usersData && usersData.items, (item, index) => {
                return <div key={index}>{item.login}</div>
            })}
        </div>
    );
}