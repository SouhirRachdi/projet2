import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './dashboard/Title';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../Redux/Actions/Useraction';

// Generate Order Data
function createData(id, createdOn,image,firstName,lastName, email, ban, role) {
  return { id, createdOn,image, firstName,lastName, email,ban, role };
}


function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const dispatch = useDispatch();
  const Students = useSelector((state) => state.userReducer.users);
  //console.log(Students)
  //console.log(Student)
  
  
  const [checked, setChecked] = React.useState();
  const handleChange1 = (e) => {
    setChecked(!checked);
  };
  
  return (
    <React.Fragment>
      <Title>Students Mangement</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Ban</TableCell>
            <TableCell align="right">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { Students.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.createdOn}</TableCell>
              <TableCell><Avatar alt="Remy Sharp" src={row.image} /></TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleChange1} />
                }
                label="student"
              />
            </TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <DeleteForeverIcon size="small" onClick={()=>dispatch(deleteUser(row._id))}>Delete</DeleteForeverIcon>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}