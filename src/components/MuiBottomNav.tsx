import React, { useState } from 'react'

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function MuiBottomNav() {
     const [value, setValue] = useState(0)

     return (
          <BottomNavigation
               sx={{
                    width: "90vw",
                    position: "absolute",
                    bottom: 0,
                    //     backgroundColor:"primary.main",
                    margin: "0px",
                    //     color:"white"
               }}
               value={value}
               onChange={(e, newValue) => setValue(newValue)}
               showLabels
          >
               <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon fontSize='large' />}
               />
               <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon fontSize='large'/>}
               />
               <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon fontSize='large'/>}
               />
               <BottomNavigationAction 
               label="Folder" 
               value="folder" 
               icon={<FolderIcon fontSize='large'/>} 
               />


          </BottomNavigation>
     )
}

export default MuiBottomNav