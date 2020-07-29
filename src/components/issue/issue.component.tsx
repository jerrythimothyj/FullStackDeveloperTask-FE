import React from "react";
import _ from "lodash";

export const Issue = (props: any) => {
    return (
        <div className="card">
            <div>
                <img src={props.data.user.avatar_url} />
                <div>{props.data.title}</div>
                <div>State: {props.data.state}</div>
                <div>Number: {props.data.number}</div>
                <div>Comments: {props.data.comments}</div>
                <div>User: {props.data.user.login}</div>
                <div><a href={props.data.html_url} target="_blank">View more...</a></div>
            </div>
        </div>
    )
}