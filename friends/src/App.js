import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import FormikLoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';


function App() {
  return (
    <div className="App">
      <h1>My Friends Project</h1>
      <NavLink to='/login'>Log In</NavLink>

      <Switch>
        <PrivateRoute path='/friends' component={FriendsList}/>
        <Route exact path='/login'>
          <FormikLoginForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
