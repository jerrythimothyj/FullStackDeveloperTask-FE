import React from "react";

type Props = {
    data: {
        owner: {
            avatar_url: string,
            login: string
        },
        full_name: string,
        homepage: string,
        forks_count: string,
        name: string,
        open_issues_count: string,
        watchers_count: string,
        stargazers_count: string,
        html_url: string
    }
}

export const Repository = (props: Props) => {
    return (
        <div className="card">
            <div>
                <img src={props.data.owner.avatar_url} alt="avatar" />
                <div>{props.data.full_name}</div>
                <div>{props.data.homepage || '-'}</div>
                <div>Forks: {props.data.forks_count}</div>
                <div>{props.data.name}</div>
                <div>Issues: {props.data.open_issues_count}</div>
                <div>{props.data.owner.login}</div>
                <div>Watchers: {props.data.watchers_count}</div>
                <div>Stars: {props.data.stargazers_count}</div>
                <div><a href={props.data.html_url} target="_blank" rel="noopener noreferrer">View more...</a></div>
            </div>
        </div>
    )
}