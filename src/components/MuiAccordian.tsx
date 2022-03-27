import React,{useState} from 'react'
import {
     Accordion,
     AccordionSummary, 
     AccordionDetails,
     Typography,
    
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function MuiAccordian() {

     const [expanded, setExpanded] = useState<string | false>(false)
     
     const handleChange = (isExpanded:boolean,pannel:string)=>{
          setExpanded(isExpanded? pannel:false)
     }
    
     
  return (
    <div>
         <Accordion expanded={expanded === "pannel1"} 
         onChange= {(e,isExpanded)=>handleChange(isExpanded,'pannel1')}>
              <AccordionSummary id='pannel1-header' expandIcon={<ExpandMoreIcon />} >
                  <Typography>
                       Accordion 1
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                        <Typography variant="body2">
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti sunt voluptatem quaerat illo, nam hic obcaecati officia itaque! Sint expedita beatae consequuntur perspiciatis non recusandae facilis quia enim cum! Quaerat.
                        </Typography>
               </AccordionDetails>
         </Accordion>

         <Accordion expanded={expanded === "pannel2"}
         onChange= {(e,isExpanded)=>handleChange(isExpanded,'pannel2')}>
              <AccordionSummary id='pannel2-header' expandIcon={<ExpandMoreIcon />} >
                  <Typography>
                       Accordion 2
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                        <Typography variant="body2">
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti sunt voluptatem quaerat illo, nam hic obcaecati officia itaque! Sint expedita beatae consequuntur perspiciatis non recusandae facilis quia enim cum! Quaerat.
                        </Typography>
               </AccordionDetails>
         </Accordion>

         <Accordion expanded={expanded === "pannel3"}
         onChange= {(e,isExpanded)=>handleChange(isExpanded,'pannel3')}>
              <AccordionSummary id='pannel3-header' expandIcon={<ExpandMoreIcon />} >
                  <Typography>
                       Accordion 3
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                        <Typography variant="body2">
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti sunt voluptatem quaerat illo, nam hic obcaecati officia itaque! Sint expedita beatae consequuntur perspiciatis non recusandae facilis quia enim cum! Quaerat.
                        </Typography>
               </AccordionDetails>
         </Accordion>


         <Accordion expanded={expanded === "pannel4"}
         onChange= {(e,isExpanded)=>handleChange(isExpanded,'pannel4')}>
              <AccordionSummary id='pannel4-header' expandIcon={<ExpandMoreIcon />} >
                  <Typography>
                       Accordion 4
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                        <Typography variant="body2">
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti sunt voluptatem quaerat illo, nam hic obcaecati officia itaque! Sint expedita beatae consequuntur perspiciatis non recusandae facilis quia enim cum! Quaerat.
                        </Typography>
               </AccordionDetails>
         </Accordion>
    </div>
  )
}

export default MuiAccordian