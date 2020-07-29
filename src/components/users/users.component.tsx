import React from "react";
import _ from "lodash";
import { User } from "../user/user.component";

export const Users = (props: any) => {
    return (
        <div className="cards">
            {_.map(props.data && props.data.items, (item, index) => {
                return <User data={item} key={index} />
            })}
        </div>
    )
}