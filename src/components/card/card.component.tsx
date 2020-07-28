import React from "react";
import _ from "lodash";
import "./card.component.scss"

export const Card = (props: any) => {
    const { avatar_url, html_url, login, onClick } = props.data
    return (
        <div className="card">
            <img src={avatar_url} />
            <div>{login}</div>
            <div>
                <button onClick={() => onClick(props.url)}>View More Details</button>
            </div>
        </div>
    )
}