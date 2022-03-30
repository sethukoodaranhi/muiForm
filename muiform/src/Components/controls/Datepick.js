import React from 'react'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnUtils from '@date-io/date-fns'
export default function Datepick(props) {
  const{name,label,value,onChange}=props

  const Convertdefaultpara=(name,value)=>({
    target:{
        name,value
    }

})

  return (
   <MuiPickersUtilsProvider utils={DateFnUtils}>
     <KeyboardDatePicker
     disableToolbar
     inputVariant='outlined'
     margin='normal'   
     format='MMM/dd/yyyy'
     name={name}
     label={label}
     value={value}
     onChange={date=>onChange(Convertdefaultpara(name,date))}
     />
   </MuiPickersUtilsProvider>
  )
}
