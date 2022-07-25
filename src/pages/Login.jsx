import React, { useContext } from 'react';

import Login from '../components/Login/Login/Login';
import Home from './Home';

import AuthContext from '../components/Login/Store/auth-context';

function Logins() {
  const ctx = useContext(AuthContext);

  console.log(ctx.isLoggedIn)

  return (
    <React.Fragment>
      <main className='App'>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default Logins;
