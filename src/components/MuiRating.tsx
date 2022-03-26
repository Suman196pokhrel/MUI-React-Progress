import React,{useState} from 'react'
import {Stack,Rating} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

function MuiRating() {
     
     const [value, setValue] = useState<number | null>(null)

     const handleChange = (e: React.ChangeEvent<{}>,newValue:number |null) =>{
           setValue(newValue)
     }

     console.log(value);

     return (
    <Stack spacing={2}>
         <Rating 
         value={value} 
         onChange={handleChange}
         precision={0.5}
         size='large'
         icon={<FavoriteIcon color='error'/>}
         emptyIcon={<FavoriteBorderIcon />}
         />
    </Stack>
    
  )
}

export default MuiRating