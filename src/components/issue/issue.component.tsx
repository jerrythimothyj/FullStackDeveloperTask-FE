import React from "react";

type Props = {
    data: {
        user: {
            avatar_url: string,
            login: string
        },
        title: string,
        state: string,
        number: string,
        comments: string,
        html_url: string,
    }
}

export const Issue = (props: Props) => {
    return (
        <div className="card">
            <div>
                <img src={props.data.user.avatar_url} alt="avatar" />
                <div>{props.data.title}</div>
                <div>State: {props.data.state}</div>
                <div>Number: {props.data.number}</div>
                <div>Comments: {props.data.comments}</div>
                <div>User: {props.data.user.login}</div>
                <div><a href={props.data.html_url} target="_blank" rel="noopener noreferrer">View more...</a></div>
            </div>
        </div>
    )
}