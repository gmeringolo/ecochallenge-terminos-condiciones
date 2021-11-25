import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Terminos from './components/Terminos';

function App() {
  return (
      <React.Fragment>
            <Router>
              <Switch>
                <Route path="/" exact render = { props=> ( <Terminos {...props}/>)}></Route>
              </Switch>
            </Router>
      </React.Fragment>
    
  );
}

export default App;