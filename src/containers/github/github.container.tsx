import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, stageSearchCriteria, getPersisterData } from '../../actions/github/github.action'
import _ from "lodash";
import { Repositories } from "../../components/repositories/repositories.component"
import { Users } from "../../components/users/users.component";
import { Issues } from "../../components/issues/issues.component";
import { GithubSearchForm } from "../../components/github-search-form/github-search-form.component";

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

    return (
        <div>
            <GithubSearchForm onChange={handleChange} data={stagedSearchCriteria} />
            {searchCriteria.type === 'repositories' && <Repositories data={data} />}
            {searchCriteria.type === 'users' && <Users data={data} />}
            {searchCriteria.type === 'issues' && <Issues data={data} />}
        </div>
    );
}