import React from 'react'
import {
     TableContainer,
     Table,
     TableHead,
     TableBody,
     TableCell,
     Paper,
     TableRow
} from '@mui/material'




function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
         <Table stickyHeader>
              <TableHead>
                   <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell>Email</TableCell>

                   </TableRow>
              </TableHead>
              <TableBody>
                   {
                        tableData.map((row)=>(
                             <TableRow key={row.id} sx= {{'&:last-child td, &:last-child th':{border:0}}}>
                                  <TableCell>{row.id}</TableCell>
                                  <TableCell>{row.first_name}</TableCell>
                                  <TableCell>{row.last_name}</TableCell>
                                  <TableCell align='center'>{row.email}</TableCell>

                             </TableRow>
                        ))
                   }
              </TableBody>
         </Table>
    </TableContainer>
  )
}

export default MuiTable



const tableData = [{
     "id": 1,
     "first_name": "Van",
     "last_name": "Archanbault",
     "email": "varchanbault0@go.com",
     "gender": "Female",
     "ip_address": "107.146.188.253"
   }, {
     "id": 2,
     "first_name": "Angus",
     "last_name": "Oggers",
     "email": "aoggers1@huffingtonpost.com",
     "gender": "Male",
     "ip_address": "124.80.239.204"
   }, {
     "id": 3,
     "first_name": "Lina",
     "last_name": "Stratiff",
     "email": "lstratiff2@cdbaby.com",
     "gender": "Female",
     "ip_address": "180.61.193.249"
   }, {
     "id": 4,
     "first_name": "Gwenneth",
     "last_name": "Branscomb",
     "email": "gbranscomb3@4shared.com",
     "gender": "Female",
     "ip_address": "218.95.159.46"
   }, {
     "id": 5,
     "first_name": "Phylis",
     "last_name": "Mourton",
     "email": "pmourton4@webnode.com",
     "gender": "Female",
     "ip_address": "88.46.57.19"
   }, {
     "id": 6,
     "first_name": "Helena",
     "last_name": "Sandall",
     "email": "hsandall5@lycos.com",
     "gender": "Female",
     "ip_address": "71.166.220.246"
   }, {
     "id": 7,
     "first_name": "Glenine",
     "last_name": "Peile",
     "email": "gpeile6@storify.com",
     "gender": "Female",
     "ip_address": "111.2.213.95"
   }, {
     "id": 8,
     "first_name": "Kristy",
     "last_name": "De Francisci",
     "email": "kdefrancisci7@cnbc.com",
     "gender": "Female",
     "ip_address": "162.116.61.200"
   }, {
     "id": 9,
     "first_name": "Anderson",
     "last_name": "Denisot",
     "email": "adenisot8@jimdo.com",
     "gender": "Male",
     "ip_address": "146.150.158.20"
   }, {
     "id": 10,
     "first_name": "Cissiee",
     "last_name": "Carlin",
     "email": "ccarlin9@europa.eu",
     "gender": "Female",
     "ip_address": "35.235.184.88"
   }]