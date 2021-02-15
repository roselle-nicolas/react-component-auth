import React, { FunctionComponent } from 'react';
import './App.scss';
import { BrowserRouter as Router , Link, Route, Switch } from 'react-router-dom';
import Auth from './pages/auth/auth';
import HeaderSideBar from './components/header-side-bar/header-side-bar';

const App: FunctionComponent = () => {

  return (
    <div className="App">
      <HeaderSideBar></HeaderSideBar>
      <Router>
        <Switch>
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
