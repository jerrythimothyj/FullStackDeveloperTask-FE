import React from "react";

export const User = (props: any) => {
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