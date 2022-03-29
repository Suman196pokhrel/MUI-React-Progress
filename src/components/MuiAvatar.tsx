import React from 'react'

import { Stack, Avatar, AvatarGroup } from '@mui/material'

function MuiAvatar() {
     return (
          <Stack spacing={4}>
               <Stack spacing={1} direction='row'>
                    <Avatar sx={{
                         bgcolor: 'primary.light'
                    }}>SP</Avatar>
                    <Avatar sx={{
                         bgcolor: 'success.light'
                    }}>PD</Avatar>

               </Stack>
               <Stack spacing={1} direction='row'>
                    <Avatar sx={{
                         bgcolor: 'primary.light'
                    }}>SP</Avatar>
                    <Avatar sx={{
                         bgcolor: 'success.light'
                    }}>PD</Avatar>

                    <Avatar src={`https://randomuser.me/api/portraits/women/80.jpg`} alt='Suman' />
                    <Avatar src={`https://randomuser.me/api/portraits/women/79.jpg`} alt='Suman' />

               </Stack>
               <Stack spacing={1} direction='row'>
                    <AvatarGroup max={3}>
                         <Avatar sx={{
                              bgcolor: 'primary.light'
                         }}
                         variant='square'>SP</Avatar>
                         <Avatar sx={{
                              bgcolor: 'success.light'
                         }}
                         variant='rounded'
                         >PD</Avatar>

                         <Avatar src={`https://randomuser.me/api/portraits/women/80.jpg`} alt='Suman' />
                         <Avatar src={`https://randomuser.me/api/portraits/women/79.jpg`} alt='Suman' />

                    </AvatarGroup>

               </Stack>
          </Stack>
     )
}

export default MuiAvatar