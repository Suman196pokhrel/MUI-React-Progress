import React, { useState } from 'react'
import {
     Stack,
     Autocomplete,
     TextField
} from '@mui/material'

const skills = ['Python', 'Html', 'Css', 'JavaScript', 'Machine Learning']

type skill = {
     id: number
     label: string
}

const skillsOption = skills.map((skill, index) => ({
     id: index + 1,
     label: skill
}))

function MuiAutoComplete() {

     const [value, setValue] = useState<string | null>(null)
     const [skill, setSkill] = useState<skill | null>(null)

     const handleChange = (e: any, newValue: string | null) => {
          setValue(newValue)
     }
     const handleChangeSkill = (e: any, newValue: skill | null) => {
          setSkill(newValue)
     }


     console.log(value);
     return (
          <Stack spacing={2} width="250px">
               <Autocomplete
                    value={value}
                    options={skills}
                    renderInput={(params) => <TextField {...params} label="Skills" />}
                    onChange={handleChange}
               //     freeSolo
               />

               {/* Using array of objects   */}
               <Autocomplete
                    value={skill}
                    options={skillsOption}
                    renderInput={(params) => <TextField {...params} label="Skills" />}
                    onChange={handleChangeSkill}
               //     freeSolo
               />
          </Stack>
     )
}

export default MuiAutoComplete