import React from 'react'
import { Button, Stack,IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


function MuiButtons() {
     return (

          <Stack spacing={2}>


               <Stack spacing={2} direction={`row`}>
                    <Button variant="text" href="https://google.com">Google</Button>
                    <Button variant="contained">contained</Button>
                    <Button variant="outlined">outline</Button>
               </Stack>

               {/* Using Default Color Pallet  */}
               {/* Button Color  */}
               <Stack spacing={2} direction={`row`}>
                    <Button variant="outlined" color='primary'>Primary</Button>
                    <Button variant="outlined" color='secondary'>secondary</Button>
                    <Button variant="outlined" color='error'>error</Button>
                    <Button variant="outlined" color='warning'>warning</Button>
                    <Button variant="outlined" color='info'>info</Button>
                    <Button variant="outlined" color='success'>success</Button>

               </Stack>
               {/* Button Color  */}
               <Stack spacing={2} direction={`row`}>
                    <Button variant="contained" color='primary'>Primary</Button>
                    <Button variant="contained" color='secondary'>secondary</Button>
                    <Button variant="contained" color='error'>error</Button>
                    <Button variant="contained" color='warning'>warning</Button>
                    <Button variant="contained" color='info'>info</Button>
                    <Button variant="contained" color='success'>success</Button>

               </Stack>
               {/* Button Color  */}
               <Stack spacing={2} direction={`row`}>
                    <Button variant="text" color='primary'>Primary</Button>
                    <Button variant="text" color='secondary'>secondary</Button>
                    <Button variant="text" color='error'>error</Button>
                    <Button variant="text" color='warning'>warning</Button>
                    <Button variant="text" color='info'>info</Button>
                    <Button variant="text" color='success'>success</Button>

               </Stack>
               {/* Button Sizes  */}
               <Stack  spacing={2} direction={`row`}>
                    <Stack spacing={2}>
                    <Button variant='text' size='small' >Small</Button>
                    <Button variant='text' size='medium' >meduim</Button>
                    <Button variant='text' size='large' >Large</Button>
                    </Stack>
                    
                    <Stack spacing={2}>
                    <Button variant='outlined' size='small' >Small</Button>
                    <Button variant='outlined' size='medium' >meduim</Button>
                    <Button variant='outlined' size='large' >Large</Button>
                    </Stack>
                    
                    <Stack spacing={2}>
                    <Button variant='contained' size='small' >Small</Button>
                    <Button variant='contained' size='medium' >meduim</Button>
                    <Button variant='contained' size='large' >Large</Button>
                    </Stack>
                    
               
               </Stack>

               {/* Buttons With Icons  */}
               <Stack spacing={2} direction='row'>
                    <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
                    <Button variant='contained' endIcon={<SendIcon />}>Send</Button>

                    <IconButton aria-label='send'color='success' size='large'>
                         <SendIcon />
                    </IconButton>

               </Stack>

               
               <Stack spacing={2} direction='row'>
               {/* Buttons without Elevations */}
               <Button variant='contained' disableElevation startIcon={<SendIcon />}>Send</Button>
               {/* Button Without Ripple Effect  */}
               <Button variant='contained' disableRipple endIcon={<SendIcon />}>Send</Button>
               </Stack>

               {/* OnClick Methods  */}
               <Stack direction='row'>
                    <Button variant='contained' color='primary' size='medium' onClick={()=>alert("OnClick Method tested")}>Alert</Button>
               </Stack>

               

          </Stack>




     )
}

export default MuiButtons