import React from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import { Header } from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/details" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
