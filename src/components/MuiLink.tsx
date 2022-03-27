import React from 'react'

import {Link, Stack, Typography} from '@mui/material'

function MuiLink() {
  return (
    <Stack direction='row' spacing={2} m={4}>
         <Link href='#'>Link</Link>
         <Link href='#' color='secondary'>Secondary</Link>
         <Link href='#' underline='hover'>Underline</Link>
         <Typography variant='h5'>
         <Link href='#' >Link</Link>
         </Typography>
        


    </Stack>
  )
}

export default MuiLink