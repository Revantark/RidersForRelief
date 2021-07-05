import React from 'react';
import './App.css'
import { AuthProvider } from './components/context/auth/authProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InitialHomeRouting from './components/home/initial_home/initialHomeRouting';
import UploadImages from './components/requester/new_request/upload_images';
function App() {
  //todo

  return (
    <div className="App">        
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/temp">
              {/* TestYourScreensHere */}
              <UploadImages/>
            </Route>
            <Route path="/">
              <InitialHomeRouting />
            </Route>
          </Switch>
        </Router>
<<<<<<< HEAD
      </AuthProvider>      
=======
      </AuthProvider>
>>>>>>> 92be79c6ff34d117463db5071a722e80e49c626c
    </div>
  );
}

export default App;
