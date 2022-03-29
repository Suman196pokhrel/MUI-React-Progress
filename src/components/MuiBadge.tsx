import React from 'react'
import {Stack,Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'


function MuiBadge() {
  return (
    <Stack direction={'row'} spacing={2}>
         <Badge badgeContent={10} color='primary' >
               <MailIcon />
         </Badge>
         <Badge badgeContent={10} color='secondary' >
               <MailIcon />
         </Badge>
         <Badge badgeContent={0} color='error' showZero >
               <MailIcon />
         </Badge>
         <Badge variant='dot' badgeContent={5} color='error' showZero >
               <MailIcon />
         </Badge>
    </Stack>
  )
}

export default MuiBadge