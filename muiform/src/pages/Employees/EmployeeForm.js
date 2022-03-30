import React from 'react'
import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { Useform, Form } from '../../Components/Useform'
import Inputs from '../../Components/controls/Inputs'
import RadioButtons from '../../Components/controls/RadioButtons'
import SelectBox from '../../Components/controls/SelectBox'
import * as Service from '../../Services/Service'
import CheckBox from '../../Components/controls/CheckBox'
import Datepik from '../../Components/controls/Datepick'
import Btns from '../../Components/controls/Btns'
const items = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' }
]
const initialValues = {
    id: 0,
    fulname: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    department: '',
    hiredate: new Date(),
    isPermanent: false
}
export default function EmployeeForm() {


    const { values, setvalues, handleInputChnage } = Useform(initialValues)

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Inputs
                        variant="outlined"
                        label="Full Name"
                        name='fulname'
                        value={values.fulname}
                        onChange={handleInputChnage} />
                    <Inputs
                        variant="outlined"
                        label="Email"
                        name='email'
                        value={values.email}
                        onChange={handleInputChnage} />
                    <Inputs
                        variant="outlined"
                        label="Mobile"
                        name='mobile'
                        value={values.mobile}
                        onChange={handleInputChnage} />
                    <Inputs
                        variant="outlined"
                        label="City"
                        name='city'
                        value={values.city}
                        onChange={handleInputChnage} />
                </Grid>
                <Grid item xs={6}>
                    <RadioButtons
                        label='Gender'
                        name='gender'
                        value={values.gender}
                        onChange={handleInputChnage}
                        items={items}
                    />
                    <SelectBox
                        name='department'
                        label='Department'
                        value={values.department}
                        onChange={handleInputChnage}
                        options={Service.getDepartmentDetails()}
                    />
                    <Datepik
                        name='hiredate'
                        label='Hire date'
                        value={values.hiredate}
                        onChange={handleInputChnage}
                    />
                    <CheckBox
                        label='Permanent Employee '
                        name='isPermanent'
                        value={values.isPermanent}
                        onChange={handleInputChnage}
                    />
                    <div>
                        <Btns
                            variant='contained'
                            size='large'
                            color='primary'
                            title='Submit'
                            type='submit'
                        />
                         <Btns
                            variant='contained'
                            size='large'
                            color='default'
                            title='Reset'
                            type='submit'
                        />
                    </div>
                </Grid>
            </Grid>

        </Form>
    )
}
