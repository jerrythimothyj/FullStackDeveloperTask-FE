import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../actions/github/github.action'
import _ from "lodash";

export const Github = () => {

    const usersData = useSelector((state: any) => state.githubReducer.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData({ text: "jer", type: "users", page: 1, per_page: 100 }))
    }, [])

    return (
        <div>
            {_.map(usersData && usersData.items, (item) => {
                return <div>{item.login}</div>
            })}
        </div>
    );
}