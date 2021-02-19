import React, { FunctionComponent, MouseEvent } from 'react';
import './App.scss';
import { BrowserRouter as Router , Link, Route, Switch } from 'react-router-dom';
import Auth from './pages/auth/auth';

const App: FunctionComponent = () => {

  //detection du click dans l'aplication (pour fermet le menu déroulant par exemple)
  const handleClick = (event: MouseEvent) => {
    
    const sideNav = document.querySelector('.side-nav');

    const isClickOnSideNav = (event.target as Element).classList.contains('side-nav');
    const isClickOnbuttonCommapse = (event.target as Element).classList.contains('icon-menu');
    console.log(isClickOnbuttonCommapse);
    
    if (!isClickOnSideNav) {
      if (!isClickOnbuttonCommapse && !isClickOnbuttonCommapse) {
        sideNav?.classList.remove('side-nav--reveal')
      }
    }
    

  }

  return (
    <div className="App" onClick={(event) => handleClick(event)}>
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
