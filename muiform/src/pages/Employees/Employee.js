import React from 'react'
import EmployeeForm from './EmployeeForm'
import { makeStyles, Paper } from '@material-ui/core'
const useStyle=makeStyles(theme=>({
   root:{
        margin:theme.spacing(2),
        padding:theme.spacing(5)
    }

}))
export default function Employee() {
    const classes=useStyle()
  return (
    <Paper className={classes.root}>
    <EmployeeForm/>
    </Paper>
  )
}
