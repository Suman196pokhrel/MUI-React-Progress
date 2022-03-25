import React from 'react'
import { Button, Stack } from '@mui/material'


function MuiButtons() {
     return (

          <Stack spacing={2}>


               <Stack spacing={2} direction={`row`}>
                    <Button variant="text" href="https://google.com">Google</Button>
                    <Button variant="contained">contained</Button>
                    <Button variant="outlined">outline</Button>
               </Stack>

               {/* Using Default Color Pallet  */}

               <Stack spacing={2} direction={`row`}>
                    <Button variant="outlined" color='primary'>Primary</Button>
                    <Button variant="outlined" color='secondary'>secondary</Button>
                    <Button variant="outlined" color='error'>error</Button>
                    <Button variant="outlined" color='warning'>warning</Button>
                    <Button variant="outlined" color='info'>info</Button>
                    <Button variant="outlined" color='success'>success</Button>

               </Stack>
               <Stack spacing={2} direction={`row`}>
                    <Button variant="contained" color='primary'>Primary</Button>
                    <Button variant="contained" color='secondary'>secondary</Button>
                    <Button variant="contained" color='error'>error</Button>
                    <Button variant="contained" color='warning'>warning</Button>
                    <Button variant="contained" color='info'>info</Button>
                    <Button variant="contained" color='success'>success</Button>

               </Stack>
               <Stack spacing={2} direction={`row`}>
                    <Button variant="text" color='primary'>Primary</Button>
                    <Button variant="text" color='secondary'>secondary</Button>
                    <Button variant="text" color='error'>error</Button>
                    <Button variant="text" color='warning'>warning</Button>
                    <Button variant="text" color='info'>info</Button>
                    <Button variant="text" color='success'>success</Button>

               </Stack>

               

          </Stack>




     )
}

export default MuiButtons