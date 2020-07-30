import React from "react"
import "./input.component.scss"

export const Input = (props: any) => {
    return (
        <input className="input" type={props.type} onChange={(event) => props.onChange(event, props.field)} value={props.value}
            placeholder={props.placeholder} title={props.field}
        />
    )
}