import React from "react";
import _ from "lodash";

export const User = (props: any) => {
    return (
        <div className="card">
            <div>
                <img src={props.data.avatar_url} />
                <div>{props.data.login}</div>
                <div><a href={props.data.html_url} target="_blank">View more...</a></div>
            </div>
        </div>
    )
}