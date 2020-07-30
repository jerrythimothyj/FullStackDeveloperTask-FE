import React from "react";
import _ from "lodash"
import "./select.component.scss"

export const Select = (props: any) => {
    return <select className="select" onChange={(event) => props.onChange(event, props.field)} value={props.value} title={props.field}>
        {_.map(props.options, (option) => {
            return <option value={option.value} key={option.value}>{option.name}</option>
        })}
    </select>
}