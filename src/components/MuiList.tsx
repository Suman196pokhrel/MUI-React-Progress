import React from 'react'

import {Box,List,ListItem,ListItemText,ListItemIcon} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'


function MuiList() {
  return (
    <Box
    sx={{
         width:'400px',
         bgcolor:'#efefef'
    }}
    >
         <List>
              <ListItem>
                   <ListItemIcon>
                        <MailIcon />
                   </ListItemIcon>
                   <ListItemText primary='List Item 1' />
                   <ListItemIcon>
                        <MailIcon />
                   </ListItemIcon>
                   <ListItemText primary='List Item 2' />
                   <ListItemIcon>
                        <MailIcon />
                   </ListItemIcon>
                   <ListItemText primary='List Item 3' />

              </ListItem>
         </List>
    </Box>
  )
}

export default MuiList