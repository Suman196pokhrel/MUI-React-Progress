import React from 'react'
import {Stack,Chip,Avatar} from '@mui/material'



function MuiChip() {
  return (
    <Stack direction='row' spacing={2}>
         <Chip label="Chip" color='primary' size='medium' />
         <Chip label="Chip-outlined" color='secondary' size='medium' variant='outlined' />
         <Chip label="Chip-avatar" avatar={<Avatar></Avatar>} color='primary' size='medium' />
         <Chip 
         label="Chip-Click" 
         color='success' 
         size='medium' 
         variant='outlined'
         onClick={()=>alert("Clicked")}
         />
          <Chip 
         label="Chip-deletable" 
         color='error' 
         size='medium' 
         variant='outlined'
         onClick={()=>alert("Clicked")}
         onDelete={()=>alert("Delete handler called")}
         />
          


    </Stack>
  )
}

export default MuiChip