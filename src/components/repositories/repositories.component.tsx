import React from "react";
import _ from "lodash";
import { Repository } from "../repository/repository.component";

export const Repositories = (props: any) => {
    return (
        <div className="cards">
            {_.map(props.data && props.data.items, (item, index) => {
                return <Repository data={item} key={index} />
            })}
        </div>
    )
}