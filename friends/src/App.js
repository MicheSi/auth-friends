import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import FormikLoginForm from './components/LoginForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Friends Project</h1>
      <NavLink to='/login'>Log In</NavLink>

      <Route exact path='/login'>
        <FormikLoginForm />
      </Route>
    </div>
  );
}

export default App;
