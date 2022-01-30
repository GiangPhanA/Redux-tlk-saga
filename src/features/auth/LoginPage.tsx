import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { authActions } from './authSlice';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
  },
  // box: {
  //   padding: theme.spacing(3),
     
  // },
}));



export default function LoginPage () {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleLoginClick = () => {
    dispatch(authActions.login({
      username: '',
      password: '',
    }))

  }

  return (
    <div className={classes.root}>
     
      <Paper elevation={1} >
        <Typography variant="h5" component="h1">
            Student Management
        </Typography>

        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick = {handleLoginClick}>
            Fake Login
          </Button>
        </Box>
        
      </Paper>
    </div>
  );
}
