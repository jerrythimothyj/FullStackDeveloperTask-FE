import React from "react";
import _ from "lodash";
import { Repository } from "../repository/repository.component";
import "./repositories.component.scss"

export const Repositories = (props: any) => {
    return (
        <div className="repositories">
            {_.map(props.data && props.data.items, (item, index) => {
                return <Repository data={item} key={index} />
            })}
        </div>
    )
}