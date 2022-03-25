import React from 'react'
import {Typography} from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
         <Typography variant='h1'>H1 Heading</Typography>
         <Typography variant='h2'>H2 Heading</Typography>
         <Typography variant='h3'>H3 Heading</Typography>
         <Typography variant='h4' component="h1">H4 Heading</Typography>
         <Typography variant='h5' gutterBottom>H5 Heading</Typography>
         <Typography variant='h6'>H6 Heading</Typography>
         
         <Typography variant='subtitle1'>Subtitle 1</Typography>
         <Typography variant='subtitle2'>Subtitle 2</Typography>


          <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis fuga, iure inventore magni laborum illo impedit itaque qui rem tempore, veritatis dolor, rerum reiciendis velit ex. Porro, commodi voluptas?</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis fuga, iure inventore magni laborum illo impedit itaque qui rem tempore, veritatis dolor, rerum reiciendis velit ex. Porro, commodi voluptas?</Typography>

    </div>
  )
}
