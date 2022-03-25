import React, { useState } from 'react'
import {Stack,TextField,InputAdornment} from '@mui/material'

function MuiTextFields() {

     const [value, setValue] = useState('')

  return (
    <Stack spacing={4}>

         {/* three Basic Variants  */}
         <Stack direction='row' spacing={2}>
               <TextField
               variant='outlined' 
               label='username' 
               />
               <TextField
               variant='filled' 
               label='username' 
               />
               <TextField
               variant='standard' 
               label='username' 
               />
         </Stack>

          {/* textField Sizes  */}
         <Stack direction='row' spacing={2}>
               <TextField
               variant='outlined' 
               label='username' 
               size='small'
               color='primary'
               />
               <TextField
               variant='filled' 
               label='username'
               size='medium'
               color='secondary'
               />
               <TextField
               variant='standard' 
               label='username'
               color='success' 
               size='medium'
               />
         </Stack>

         {/* Form related Props  */}
         <Stack spacing={2} direction='row'>
         {/* Required Prop */}
         <TextField
               variant='outlined' 
               label='Form Input' 
               size='small'
               color='primary'
               required
               />

          {/* Helper text  */}
          <TextField
               variant='outlined' 
               label='Form Input' 
               size='small'
               color='primary'
               helperText='Do no share your password'
               />

          {/* Type Prop  */}
          <TextField
               variant='outlined' 
               label='Password' 
               size='small'
               color='primary'
               type='password'
               />

          {/* Disable Prop  */}
          <TextField
               variant='outlined' 
               label='Form Input' 
               size='small'
               color='primary'
               disabled
               />

          {/* ReadOnly  */}
          <TextField
               variant='outlined' 
               label='Read Only' 
               size='small'
               color='primary'
               InputProps={{readOnly:true}}
               />

          {/* Prefix and Suffixes to a textField  */}
          <Stack direction='row' spacing={2}>
          <TextField
               variant='outlined' 
               label='Amount' 
               size='small'
               color='primary'
               InputProps={
                    {
                         startAdornment: <InputAdornment position='start'>$</InputAdornment>,

                    }
               }
               />

               <TextField
               variant='outlined' 
               label='Weight' 
               size='small'
               color='primary'
               InputProps={
                    {
                         endAdornment: <InputAdornment position='end'>Kg</InputAdornment>,

                    }
               }
               />
          </Stack>
          
          {/* Error Prop  */}
          <TextField 
          variant='outlined' 
          label='Read Only' 
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          error = {!value}
          helperText={!value ? 'Required':"Do not share your password"}
          />
          
         </Stack>
    </Stack>
  )
}

export default MuiTextFields