import React from 'react'
import {FormControl,InputLabel,MenuItem,Select} from '@material-ui/core'
export default function SelectBox(props) {
    const{name,label,value,onChange,options}=props
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select
      value={value}
      name={name}
      onChange={onChange}
      label={label}
      >
        <MenuItem value=''>
          <em>Select One</em>
        </MenuItem>
         {
           options.map((item)=>(
            <MenuItem value={item.id} >{item.title}</MenuItem>
           ))
         }
      </Select>
    </FormControl>
  )
}
