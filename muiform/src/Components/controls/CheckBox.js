import { FormControlLabel, FormGroup,Checkbox } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
const useStyles=makeStyles((theme)=>({
    root:{
        marginLeft:theme.spacing(6)
    }
}))
export default function CheckBox(props) {
    const { label, name, value, onChange } = props

    const Convertdefaultpara=(name,value)=>({
        target:{
            name,value
        }

    })
    const classes=useStyles()

    return (
        <FormGroup row >
            <FormControlLabel className={classes.root}
                control={
                    <Checkbox
                        name={name}
                        checked={value}
                        onChange={e=>onChange(Convertdefaultpara(name,e.target.checked))}
                    />
                }
                label={label}
            />
        </FormGroup>
    )
}
