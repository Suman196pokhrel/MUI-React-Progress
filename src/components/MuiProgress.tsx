import React from 'react'

import {
     Stack,
     LinearProgress,
     CircularProgress
} from '@mui/material'


function MuiProgress() {
  return (
    <Stack spacing={2}>
         <CircularProgress />
         <CircularProgress color='success'/>
         <CircularProgress variant='determinate' value={60}/>
         <LinearProgress />
    </Stack>
  )
}

export default MuiProgress