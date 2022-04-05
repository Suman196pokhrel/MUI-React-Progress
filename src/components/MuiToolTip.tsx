import React from 'react'
import {
     Tooltip,
     IconButton,
     Stack
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'

function MuiToolTip() {
     return (
          <Stack spacing={2} direction='row'>
               <Tooltip title='delete' placement='bottom'>
                    <IconButton>
                         <DeleteIcon />
                    </IconButton>
               </Tooltip>
               <Tooltip title='delete' placement='right'>
                    <IconButton>
                         <DeleteIcon />
                    </IconButton>
               </Tooltip>
               <Tooltip title='delete' placement='top'>
                    <IconButton>
                         <DeleteIcon />
                    </IconButton>
               </Tooltip>
               <Tooltip title='delete' placement='bottom-end'>
                    <IconButton>
                         <DeleteIcon />
                    </IconButton>
               </Tooltip>
               <Tooltip title='delete' placement='bottom-start'>
                    <IconButton>
                         <DeleteIcon />
                    </IconButton>
               </Tooltip>
               <Tooltip title='delete' placement='left-end'>
                    <IconButton>
                         <DeleteIcon />
                    </IconButton>
               </Tooltip>
               <Tooltip title='delete' placement='left-start'>
                    <IconButton>
                         <DeleteIcon />
                    </IconButton>
               </Tooltip>
               <Tooltip title='delete' placement='top-end'>
                    <IconButton>
                         <DeleteIcon />
                    </IconButton>
               </Tooltip>
               <Tooltip title='delete' placement='top-start' enterDelay={100} leaveDelay={500}>
                    <IconButton>
                         <DeleteIcon />
                    </IconButton>
               </Tooltip>
               
          </Stack>


     )
}

export default MuiToolTip