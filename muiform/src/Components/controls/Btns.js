import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
const style=makeStyles((theme)=>({
  root:{
    margin:theme.spacing(1)
  }
}))
export default function Btns(props) {
  const{size,color,title,variant,onClick,...other}=props
  const classes=style()
  return (
    <Button className={classes.root}   
    variant={variant}
    color={color}
    onClick={onClick}
    {...other}
    >
      {title}
    </Button>
  )
}
