import React from 'react'
import {Box,Typography,TextField,MenuItem} from '@mui/material'
import { useState } from 'react'

function MuiSelect() {


     const [country, setCountry] = useState('')
     const [countries, setCountries] = useState<string[]>([])

     console.log(country)
     console.log(countries);

     const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
          setCountry(e.target.value as string)
     }
     const handleChangeCountries = (e:React.ChangeEvent<HTMLInputElement>)=>{
          const value = e.target.value
          setCountries(typeof value === 'string'? value.split(','):value)
     }

  return (
    <Box width='250px'>
         <Typography variant='h3' >Mui Select</Typography>

          {/* Single Select DropDown  */}
          <TextField label='Select Country' fullWidth select value={country} onChange={handleChange}>
               <MenuItem value ="NEP">Nepal</MenuItem>
               <MenuItem value ="IND">India</MenuItem>
               <MenuItem value ="USA">United Stated Of America</MenuItem>
               <MenuItem value ="UK">United Kingdom</MenuItem>
          </TextField>

          {/* Multi Select DropDown  */}
          <TextField 
          label='Select Country' 
          fullWidth 
          select 
          value={countries} 
          onChange={handleChangeCountries}
          SelectProps ={
               {
                    multiple:true
               }
          }
          >
               <MenuItem value ="NEP">Nepal</MenuItem>
               <MenuItem value ="IND">India</MenuItem>
               <MenuItem value ="USA">United Stated Of America</MenuItem>
               <MenuItem value ="UK">United Kingdom</MenuItem>
          </TextField>


    </Box>

  )
}

export default MuiSelect