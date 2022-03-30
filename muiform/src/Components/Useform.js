import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core'
export  function Useform(initialValues) {
    const [values, setvalues] = useState(initialValues)
    const handleInputChnage=(e)=>{
        const {name,value}=e.target
        setvalues({
            ...values,
            [name]:value
        })
    }
  return {
      values,
      setvalues,
      handleInputChnage
  }
    
  
}

const useStyle = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin:theme.spacing(1)

        },
        '& .MuiFormLabel-root':{
            paddingRight:'26em'
        },
        '& .MuiInputBase-root':{
            textAlign:'left'
        }
    }
}))

export  function Form(props) {

    const classes=useStyle()
  return (
   <form className={classes.root} autoComplete='off'>
       {props.children}
   </form>
  )
}

