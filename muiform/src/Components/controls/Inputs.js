import React from 'react'
import { TextField } from '@material-ui/core'
export default function Inputs(props) {
    const{label,name,value,onChange}=props
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            error
            helperText="inavlid"
            onChange={onChange} />
    )
}
