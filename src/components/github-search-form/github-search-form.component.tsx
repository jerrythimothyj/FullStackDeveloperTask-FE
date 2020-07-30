import React from "react";
import logo from "../../assets/images/logo.png"
import "./github-search-form.component.scss"
import { Select } from "../select/select.component";
import { Input } from "../input/input.component";

export const GithubSearchForm = (props: any) => {
    const options = [
        {
            value: "users",
            name: "Users",
        },
        {
            value: "repositories",
            name: "Repositories",
        },
        {
            value: "issues",
            name: "Issues",
        }
    ]
    return <div className="github-search-form">
        <div className="github-search-form__title">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <div className="title__heading">
                    Github Searcher
                </div>
                <div className="title__caption">
                    Search users, repositories or issues below
                </div>
            </div>
        </div>
        <div className="d-flex align-items-center">
            <Input type="search" onChange={props.onChange} field="text" value={props.data.text} placeholder="Start typing to search .." />
            <Select options={options} onChange={props.onChange} field="type" value={props.data.type} />
        </div>
    </div>
}