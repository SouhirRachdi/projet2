import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Title from './Title';
import { useSelector } from 'react-redux';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const user = useSelector((state) => state.userReducer.currentUser);
  return (
    <React.Fragment>
      
      <Avatar alt="photo" src={user&&user.image}  sx={{  width: 75, height: 75 }}/>
      <Title>{user&&user.firstName} {user&&user.lastName}</Title>
      <Typography component="p" variant="h4">{user&&user.role}</Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          {user&&user.email}
        </Link>
      </div>
    </React.Fragment>
  );
}