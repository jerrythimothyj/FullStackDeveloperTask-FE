import React from "react";

type Props = {
    data: {
        avatar_url: string,
        login: string,
        html_url: string
    }
}

export const User = (props: Props) => {
    return (
        <div className="card">
            <div>
                <img src={props.data.avatar_url} alt="avatar" />
                <div>{props.data.login}</div>
                <div><a href={props.data.html_url} target="_blank" rel="noopener noreferrer">View more...</a></div>
            </div>
        </div>
    )
}