import React from 'react';
import './App.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import { AuthProvider } from './components/context/auth/authProvider';

// import InitialHomeRouting from './components/home/initial_home/initialHomeRouting';
import Test from './components/requester/profile/editRequesterProfile'

function App() {
  //todo

  return (
    <div className="App">   

      {/* <AuthProvider>
        <Router>
          <Switch>
          
            <Route path="/about">
              <PlacedRequest/>
          </Route>
            <Route path="/">
              <InitialHomeRouting />
            </Route>
          </Switch>
        </Router>
      </AuthProvider> */}
      <Test/>

    </div>
  );
}

export default App;
