import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import PrivateRoute from './components/PrivateRoute';

import './App.css';



function App() {
  return (
    <div className="App">
      <h1>My Friends Project</h1>
      <nav>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/friends'>My Friends</NavLink>
        <NavLink to='/addfriend'>Add New Friend</NavLink>
      </nav>
        
      
      <Switch>
        <PrivateRoute path='/friends' component={FriendsList}/>
        <PrivateRoute path='/addfriend' component={AddFriendForm} />
        <Route path='/login' component={LoginForm}/>
        <Route component={LoginForm}/>
      </Switch>
    </div>
  );
}

export default App;
