import React from 'react'
import {Box,
     Card,
     CardActions,
     CardContent,
     CardMedia, 
     Typography,
     Button
} from '@mui/material'

function MuiCard() {
  return (
    <Box width="300px">
         <Card>
              <CardMedia 
              component='img'
              height='140'
              image='https://source.unsplash.com/random'
              alt="Unsplash Image"
              />
              <CardContent>
                   <Typography gutterBottom variant='h5' component='div'>
                         React
                   </Typography>
                   <Typography variant='body2' color='text.secondary'>
                         React is a js library for building user interfaces.React can be used as a base in the development of single-page or mobile applications.
                   </Typography>
              </CardContent>
              <CardActions>
                   <Button size='small'>Share</Button>
                   <Button size='small'>Learn more</Button>
              </CardActions>
         </Card>
    </Box>
    
  )
}

export default MuiCard