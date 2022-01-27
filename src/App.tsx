import React, { useEffect } from 'react';

import './App.css';
import cityApi from './api/cityApi';
import studentApi from './api/studentApi';
import { all } from 'redux-saga/effects';
import { Route, Switch } from 'react-router-dom';

function App() {

  useEffect(() => {
    cityApi.getAll().then(response => console.log(response))
    // studentApi.getAll(all).then(response => console.log(response))
  })

  // useEffect(() => {
  //   studentApi.getAll(all).then(response => console.log(response))
  // })

  return (
    <div className="App">
      <Switch>
        <Route path='/login'>

        </Route>
        <Route path='/admin'>

        </Route>
      </Switch>

    </div>
  );
}

export default App;
