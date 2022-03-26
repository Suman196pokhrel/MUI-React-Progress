import React from 'react'
import {Box, 
     FormControl, 
     FormLabel, 
     FormControlLabel, 
     RadioGroup, 
     Radio
} from '@mui/material'
import { useState } from 'react'



function MuiRadioButton() {

     const [value, setValue] = useState('')
     console.log(value)
     const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
          setValue(e.target.value)
     }

  return (
    <Box>
         <FormControl >
              <FormLabel>
                   Years of experience
              </FormLabel>
              <RadioGroup 
              name='job-experience-group' 
              aria-labelledby='job-experience-group-label'
              value={value}
              onChange={handleChange}
              row
             
              >
                    <FormControlLabel control={<Radio />} label='0-2' value={'0-2'}/>
                    <FormControlLabel control={<Radio />} label='3-5' value={'3-5'}/>
                    <FormControlLabel control={<Radio />} label='6-8' value={'6-8'}/>
              </RadioGroup>

         </FormControl>
    </Box>
  )
}

export default MuiRadioButton