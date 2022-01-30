import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import cityApi from './api/cityApi';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { NotFound, PrivateRoute } from './components/Common';
import { AdminLayout } from './components/Layout';
import { authActions } from './features/auth/authSlice';
import LoginPage from './features/auth/LoginPage';
// import { LoginPage } from './features/auth/LoginPage';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    cityApi.getAll().then(response => console.log(response))
    // studentApi.getAll(all).then(response => console.log(response))
  })

  // useEffect(() => {
  //   studentApi.getAll(all).then(response => console.log(response))
  // })

  return (
    <div className="App">
      <h1>REdux Saga</h1>
      <Button variant="contained" 
      onClick = {() => dispatch(authActions.logout())}>LogOut</Button>
      <Switch>
        <Route path='/login'>
          <LoginPage  />
        </Route>
        <PrivateRoute path='/admin'>
          <AdminLayout  />
        </PrivateRoute>
        <Route >
          <NotFound  />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
