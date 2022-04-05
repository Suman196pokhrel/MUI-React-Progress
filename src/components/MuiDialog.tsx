import React,{useState} from 'react'

import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'

function MuiDialog() {

     const [open, setOpen] = useState(false)


     return (
          <>
               <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
               <Dialog 
               aria-labelledby='dialog-title' 
               id='dialog-title'
               open ={open}
               onClose={()=>setOpen(false)}
               >
                    <DialogTitle>Submit the test ?</DialogTitle>
                    <DialogContent>
                         <DialogContentText>Are you sure you want to submit the test ?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                         <Button>Cancel</Button>
                         <Button autoFocus>Submit</Button>

                    </DialogActions>
               </Dialog>
          </>
     )
}

export default MuiDialog