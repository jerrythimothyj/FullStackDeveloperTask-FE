import React from "react"
import "./input.component.scss"

type Props = {
    onChange: Function,
    field: string,
    value: string,
    placeholder: string,
    type: string
}

export const Input = (props: Props) => {
    return (
        <input className="input" type={props.type} onChange={(event) => props.onChange(event, props.field)} value={props.value}
            placeholder={props.placeholder} title={props.field}
        />
    )
}