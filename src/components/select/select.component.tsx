import React from "react";
import _ from "lodash"
import "./select.component.scss"

export const Select = (props: any) => {
    return <select className="select" onChange={(event) => props.onChange(event, props.field)} value={props.value}>
        {_.map(props.options, (option) => {
            return <option value={option.value}>{option.name}</option>
        })}
    </select>
}