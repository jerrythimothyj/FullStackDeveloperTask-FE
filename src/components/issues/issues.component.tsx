import React from "react";
import _ from "lodash";
import { Issue } from "../issue/issue.component";

type Props = {
    data: {
        items: [],
    }
}

export const Issues = (props: Props) => {
    return (
        <div className="cards">
            {_.map(props.data && props.data.items, (item, index) => {
                return <Issue data={item} key={index} />
            })}
        </div>
    )
}