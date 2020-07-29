import React from "react";
import _ from "lodash";
import "./users.component.scss"
import { Card } from "../card/card.component";

export const Users = (props: any) => {
    return (
        <div className="users">
            {_.map(props.users && props.users.items, (item, index) => {
                return <Card key={index} data={item} onViewMoreDetailsClick={props.onViewMoreDetailsClick} />
            })}
        </div>
    )
}