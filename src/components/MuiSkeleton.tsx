import React from 'react'

import {
     Skeleton,
     Stack
}from '@mui/material'

function MuiSkeleton() {
  return (
         <Stack spacing={1} width="250px">
              <Skeleton variant='text'/>
              <Skeleton variant='circular' width={40} height={40}/>
              <Skeleton variant='rectangular' width={250} height={100} />

              <Skeleton animation = 'wave' variant='text'/>
              <Skeleton animation = 'wave' variant='circular' width={40} height={40}/>
              <Skeleton animation = 'wave' variant='rectangular' width={250} height={100} />

              
              
         </Stack>
  )
}

export default MuiSkeleton