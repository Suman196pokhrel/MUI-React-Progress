import React,{useState} from 'react'
import {
     Drawer,
     Box,
     Typography,
     IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'


function MuiDrawer() {
     const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  return (<>
  <IconButton 
  size='large' 
  edge='start' 
  color='inherit'
  onClick={()=>setIsDrawerOpen(true)}
  >
       <MenuIcon/>
  </IconButton>
       <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
            <Box p={2} width='250px' textAlign='center' role='presentatation'>
               <Typography variant='h6'>Side Pannel</Typography>
            </Box>
       </Drawer>
       </>
  )
}

export default MuiDrawer