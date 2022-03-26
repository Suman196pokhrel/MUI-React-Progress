import React from 'react'
import {
     Box,
     FormControlLabel,
     Checkbox,
     FormControl,
     FormLabel,
     FormGroup
}from '@mui/material'

import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

import { useState } from 'react'

function MuiCheckBox() {
  
     const [acceptTnC, setAcceptTnC] = useState(false)
     const [skills, setSkills] = useState<string[]>([])
  
     const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
          setAcceptTnC(e.target.checked)
     }

     const handleSkillChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
           const index = skills.indexOf(e.target.value)
           if(index === -1){
                setSkills([...skills,e.target.value])
           }else{
                setSkills(skills.filter((skill => skill!== e.target.value)))
           }
     }

     console.log(skills);

     return (
    <Box>
         {/* Plain standard CheckBox  */}
         <Box>
              <FormControlLabel 
              label="I accept terms and conditions" 
              control={<Checkbox checked={acceptTnC} onChange={handleChange}/>}
              />
         </Box>

         {/* Icon Based CheckBox  */}
         <Box>
              <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}/>
             
         </Box>

          {/* CheckBox Group */}
         <Box>
              <FormControl>
                   <FormLabel>Skills</FormLabel>
                   <FormGroup row>
                        <FormControlLabel label='HTML'  control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange} />}/>
                        <FormControlLabel label='CSS' control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange} />}/>
                        <FormControlLabel label='JS'  control={<Checkbox value='js' checked={skills.includes('js')} onChange={handleSkillChange} />}/>
                   </FormGroup>
              </FormControl>
         </Box>

    </Box>
  )
}

export default MuiCheckBox